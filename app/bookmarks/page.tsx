'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArticleCard } from '@/components/ArticleCard';
import { ReaderModal } from '@/components/ReaderModal';
import { Article } from '@/lib/types';
import { Bookmark, ArrowLeft, Trash2, BookOpen } from 'lucide-react';

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState<Article[]>([]);
  const [activeReaderArticle, setActiveReaderArticle] = useState<Article | null>(null);

  const loadBookmarks = () => {
    try {
      const saved = JSON.parse(localStorage.getItem('techpulse_bookmarks') || '[]');
      setBookmarks(saved);
    } catch {
      setBookmarks([]);
    }
  };

  useEffect(() => {
    loadBookmarks();
    window.addEventListener('storage', loadBookmarks);
    window.addEventListener('bookmarks-changed', loadBookmarks);

    return () => {
      window.removeEventListener('storage', loadBookmarks);
      window.removeEventListener('bookmarks-changed', loadBookmarks);
    };
  }, []);

  const handleClearAll = () => {
    if (confirm('Bạn có chắc chắn muốn xóa toàn bộ danh sách bài viết đã lưu?')) {
      localStorage.removeItem('techpulse_bookmarks');
      setBookmarks([]);
      window.dispatchEvent(new Event('bookmarks-changed'));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation & Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-border/60">
          <div className="space-y-1">
            <Link 
              href="/" 
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground font-medium mb-2 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Trở về trang chính
            </Link>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-primary/10 text-primary">
                <Bookmark className="w-5 h-5 fill-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Bài viết đã lưu</h1>
                <p className="text-xs text-muted-foreground">
                  Lưu trữ trực tiếp trên trình duyệt của bạn (LocalStorage)
                </p>
              </div>
            </div>
          </div>

          {bookmarks.length > 0 && (
            <button
              onClick={handleClearAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-destructive/40 text-destructive hover:bg-destructive/10 text-xs font-semibold self-start sm:self-auto transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Xóa toàn bộ ({bookmarks.length})</span>
            </button>
          )}
        </div>

        {/* Content */}
        {bookmarks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookmarks.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                viewMode="grid"
                onOpenReader={(item) => setActiveReaderArticle(item)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 px-4 rounded-3xl bg-card border border-border/70 max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mx-auto text-muted-foreground">
              <Bookmark className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg">Chưa có bài viết nào được lưu</h3>
            <p className="text-sm text-muted-foreground">
              Nhấn vào biểu tượng dấu trang (Bookmark) ở bất kỳ bài viết nào để lưu lại và đọc offline bất cứ lúc nào.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              Khám phá bài viết ngay
            </Link>
          </div>
        )}
      </main>

      {/* Reader Modal */}
      {activeReaderArticle && (
        <ReaderModal
          article={activeReaderArticle}
          onClose={() => setActiveReaderArticle(null)}
        />
      )}

      <Footer />
    </div>
  );
}
