import { ReaderArticle } from './types';
import { cleanHtmlText, estimateReadingTime } from './utils';

/**
 * Extract clean readable content from an article URL
 */
export async function extractReadableContent(url: string, fallbackTitle?: string, fallbackSummary?: string): Promise<ReaderArticle> {
  let html = '';
  let finalUrl = url;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000);

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'vi,en-US,en;q=0.9'
      },
      next: { revalidate: 86400 } // Cache reader articles for 24h
    });

    clearTimeout(timeout);

    if (response.ok) {
      html = await response.text();
      finalUrl = response.url || url;
    }
  } catch (error) {
    console.warn(`[Reader] Failed to fetch url ${url}:`, (error as Error)?.message);
  }

  // If fetching failed or was blocked by anti-bot, generate a rich fallback reader version
  if (!html) {
    return generateFallbackReader(url, fallbackTitle, fallbackSummary);
  }

  try {
    return parseHtmlToReader(html, finalUrl, fallbackTitle, fallbackSummary);
  } catch (err) {
    console.warn(`[Reader] Parsing error for ${url}:`, err);
    return generateFallbackReader(url, fallbackTitle, fallbackSummary);
  }
}

function parseHtmlToReader(html: string, url: string, fallbackTitle?: string, fallbackSummary?: string): ReaderArticle {
  const urlObj = new URL(url);
  const hostname = urlObj.hostname.replace('www.', '');

  // 1. Extract Meta properties
  const title = extractMeta(html, 'og:title') || 
                extractMeta(html, 'twitter:title') || 
                extractTagContent(html, 'title') || 
                fallbackTitle || 
                'Bài viết chuyên sâu';

  const author = extractMeta(html, 'author') || 
                 extractMeta(html, 'article:author') || 
                 extractMeta(html, 'twitter:creator') || 
                 hostname;

  const publishedDate = extractMeta(html, 'article:published_time') || 
                        extractMeta(html, 'og:published_time') || 
                        new Date().toISOString();

  let leadImage = extractMeta(html, 'og:image') || 
                  extractMeta(html, 'twitter:image') || 
                  null;

  if (leadImage && !leadImage.startsWith('http')) {
    leadImage = new URL(leadImage, url).toString();
  }

  const siteName = extractMeta(html, 'og:site_name') || hostname;
  const rawExcerpt = extractMeta(html, 'og:description') || extractMeta(html, 'description') || fallbackSummary || '';
  const excerpt = cleanHtmlText(rawExcerpt).slice(0, 300);

  // 2. Clean HTML content
  let cleaned = html;

  // Remove scripts, styles, iframes, SVGs, noscripts, forms, navs, footers, headers
  cleaned = cleaned.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  cleaned = cleaned.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  cleaned = cleaned.replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi, '');
  cleaned = cleaned.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '');
  cleaned = cleaned.replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, '');
  cleaned = cleaned.replace(/<form\b[^<]*(?:(?!<\/form>)<[^<]*)*<\/form>/gi, '');
  cleaned = cleaned.replace(/<nav\b[^<]*(?:(?!<\/nav>)<[^<]*)*<\/nav>/gi, '');
  cleaned = cleaned.replace(/<header\b[^<]*(?:(?!<\/header>)<[^<]*)*<\/header>/gi, '');
  cleaned = cleaned.replace(/<footer\b[^<]*(?:(?!<\/footer>)<[^<]*)*<\/footer>/gi, '');
  cleaned = cleaned.replace(/<aside\b[^<]*(?:(?!<\/aside>)<[^<]*)*<\/aside>/gi, '');

  // Remove common ad/social/popup elements by class or id
  cleaned = cleaned.replace(/<div[^>]*(?:ad-|advertisement|sponsored|cookie|popup|newsletter|sidebar|comments|social-share)[^>]*>[\s\S]*?<\/div>/gi, '');

  // 3. Find primary article body container
  let articleHtml = '';
  const articleMatches = cleaned.match(/<article[\s\S]*?<\/article>/i);
  if (articleMatches) {
    articleHtml = articleMatches[0];
  } else {
    const mainMatches = cleaned.match(/<(?:main|div)[^>]*(?:class|id)=["'][^"']*(?:entry-content|post-content|article-content|article-body|story-body|fck_detail)[^"']*["'][\s\S]*?<\/(?:main|div)>/i);
    if (mainMatches) {
      articleHtml = mainMatches[0];
    } else {
      // Fallback: extract paragraphs from body
      const pMatches = cleaned.match(/<p\b[^>]*>[\s\S]*?<\/p>/gi);
      if (pMatches && pMatches.length > 2) {
        articleHtml = pMatches.join('\n');
      }
    }
  }

  // 4. Sanitize and format the content into clean reader HTML
  const sanitizedHtml = formatCleanReaderHtml(articleHtml || cleaned, url);
  const plainText = cleanHtmlText(sanitizedHtml);
  const wordCount = plainText.split(/\s+/).length;
  const readingTime = estimateReadingTime(plainText);

  const id = `reader-${Buffer.from(url).toString('base64').slice(0, 16)}`;

  return {
    id,
    title: cleanHtmlText(title),
    author: cleanHtmlText(author),
    publishedDate,
    siteName,
    originalUrl: url,
    leadImage,
    summary: excerpt,
    readingTime: Math.max(2, readingTime),
    contentHtml: sanitizedHtml,
    textWordCount: wordCount
  };
}

function extractMeta(html: string, property: string): string | null {
  const regex1 = new RegExp(`<meta[^>]*(?:property|name)=["'](?:${property})["'][^>]*content=["']([^"']+)["']`, 'i');
  const match1 = html.match(regex1);
  if (match1 && match1[1]) return match1[1];

  const regex2 = new RegExp(`<meta[^>]*content=["']([^"']+)["'][^>]*(?:property|name)=["'](?:${property})["']`, 'i');
  const match2 = html.match(regex2);
  if (match2 && match2[1]) return match2[1];

  return null;
}

function extractTagContent(html: string, tag: string): string | null {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const match = html.match(regex);
  return match && match[1] ? cleanHtmlText(match[1]) : null;
}

function formatCleanReaderHtml(html: string, baseUrl: string): string {
  // Extract useful content elements (paragraphs, headings, lists, blockquotes, pre/code, images)
  const allowedTagsRegex = /<(?:p|h1|h2|h3|h4|blockquote|ul|ol|li|pre|code|figure|figcaption|img)\b[^>]*>[\s\S]*?<\/(?:p|h1|h2|h3|h4|blockquote|ul|ol|li|pre|code|figure|figcaption)>|<img\b[^>]*\/?>/gi;
  const matches = html.match(allowedTagsRegex);

  if (!matches || matches.length === 0) {
    return `<p class="reader-paragraph">Nội dung bài viết đang được tối ưu cho Chế độ đọc tinh gọn. Vui lòng xem bản gốc nếu nội dung bị thiếu.</p>`;
  }

  const cleanElements = matches.map((elem) => {
    // Clean up images: fix relative src to absolute and add responsive styling
    if (elem.startsWith('<img') || elem.includes('<img')) {
      return elem.replace(/src=["']([^"']+)["']/i, (match, src) => {
        try {
          const absoluteSrc = new URL(src, baseUrl).toString();
          return `src="${absoluteSrc}" class="rounded-xl my-6 w-full max-h-[520px] object-cover shadow-sm" loading="lazy"`;
        } catch {
          return match;
        }
      });
    }

    // Clean up headings
    if (elem.startsWith('<h1') || elem.startsWith('<h2') || elem.startsWith('<h3')) {
      const tag = elem.slice(1, 3);
      const text = cleanHtmlText(elem);
      if (!text) return '';
      return `<${tag} class="font-bold text-2xl mt-8 mb-4 tracking-tight">${text}</${tag}>`;
    }

    // Clean up blockquote
    if (elem.startsWith('<blockquote')) {
      const text = cleanHtmlText(elem);
      if (!text) return '';
      return `<blockquote class="border-l-4 border-primary pl-4 py-1 my-5 italic text-muted-foreground bg-muted/30 rounded-r-md">${text}</blockquote>`;
    }

    // Clean up pre/code
    if (elem.startsWith('<pre') || elem.startsWith('<code')) {
      const text = elem.replace(/<[^>]+>/g, '').trim();
      return `<pre class="bg-zinc-900 text-zinc-100 p-4 rounded-xl my-6 overflow-x-auto text-sm font-mono border border-zinc-800"><code>${text}</code></pre>`;
    }

    // Clean up paragraph
    if (elem.startsWith('<p')) {
      const text = elem
        .replace(/<(?!\/?(?:a|strong|em|code)\b)[^>]+>/gi, '') // retain basic formatting inside paragraph
        .trim();
      
      const plainText = cleanHtmlText(text);
      if (plainText.length < 15) return ''; // skip tiny fragments or ads

      return `<p class="reader-paragraph my-4 leading-relaxed text-base md:text-lg">${text}</p>`;
    }

    return elem;
  });

  return cleanElements.filter(Boolean).join('\n');
}

function generateFallbackReader(url: string, fallbackTitle?: string, fallbackSummary?: string): ReaderArticle {
  const urlObj = new URL(url);
  const hostname = urlObj.hostname.replace('www.', '');
  const title = fallbackTitle || 'Bài viết công nghệ chuyên sâu';
  const summary = fallbackSummary || 'Nội dung tóm tắt chuyên sâu từ nguồn tin tức chính thức.';

  const id = `reader-${Buffer.from(url).toString('base64').slice(0, 16)}`;

  return {
    id,
    title,
    author: hostname,
    publishedDate: new Date().toISOString(),
    siteName: hostname,
    originalUrl: url,
    leadImage: null,
    summary,
    readingTime: 3,
    contentHtml: `
      <div class="prose max-w-none">
        <p class="reader-paragraph my-4 leading-relaxed text-lg font-medium">${summary}</p>
        <div class="p-6 my-6 rounded-2xl bg-muted/40 border border-border">
          <h3 class="text-lg font-semibold mb-2">Đọc toàn bộ bài viết từ nguồn gốc</h3>
          <p class="text-sm text-muted-foreground mb-4">Trang đích được bảo vệ hoặc yêu cầu tương tác trực tiếp. Bạn có thể mở bài viết gốc trong tab mới để xem toàn bộ nội dung:</p>
          <a href="${url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
            Mở bài viết gốc tại ${hostname}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </div>
      </div>
    `,
    textWordCount: 120
  };
}
