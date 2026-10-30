import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TechPulse - Tổng Hợp Tin Tức & Nội Dung Chuyên Sâu Công Nghệ',
  description: 'Nền tảng tổng hợp tin tức công nghệ đa nguồn từ OpenAI, TechCrunch, Hacker News, Dev.to, Ars Technica, VnExpress Số Hóa với Chế độ đọc tinh gọn (Reader Mode) và Vercel Edge Caching.',
  keywords: ['tin tức công nghệ', 'AI', 'lập trình', 'phần cứng', 'an ninh mạng', 'reader mode', 'techpulse'],
  openGraph: {
    title: 'TechPulse - Tin Tức & Nội Dung Chuyên Sâu Công Nghệ',
    description: 'Chế độ đọc tinh gọn, loại bỏ quảng cáo, cập nhật liên tục từ các nguồn công nghệ uy tín nhất.',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="dark" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
