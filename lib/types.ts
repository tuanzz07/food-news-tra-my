export type TechCategory = 
  | 'all'
  | 'ai'
  | 'dev'
  | 'hardware'
  | 'security'
  | 'trends'
  | 'vietnam';

export interface CategoryInfo {
  id: TechCategory;
  name: string;
  vietnameseName: string;
  description: string;
  iconName: string;
  color: string;
}

export interface FeedSource {
  id: string;
  name: string;
  url: string;
  feedUrl: string;
  type: 'rss' | 'atom' | 'json-hn' | 'json-devto';
  category: TechCategory;
  badgeColor: string;
  icon: string;
  language: 'vi' | 'en';
}

export interface Article {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  formattedDate: string;
  relativeTime: string;
  source: {
    id: string;
    name: string;
    url: string;
    badgeColor: string;
    icon: string;
    language: 'vi' | 'en';
  };
  category: TechCategory;
  categoryName: string;
  summary: string;
  coverImage: string | null;
  author: string;
  readingTime: number; // in minutes
  tags?: string[];
  engagement?: {
    points?: number;
    comments?: number;
  };
}

export interface ReaderArticle {
  id: string;
  title: string;
  author: string;
  publishedDate: string;
  siteName: string;
  originalUrl: string;
  leadImage: string | null;
  summary: string;
  readingTime: number;
  contentHtml: string;
  textWordCount: number;
}

export interface NewsResponse {
  articles: Article[];
  total: number;
  categories: { id: TechCategory; count: number }[];
  sources: { id: string; name: string; count: number }[];
  updatedAt: string;
  cached: boolean;
}
