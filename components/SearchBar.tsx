'use client';

import React, { useRef, useEffect } from 'react';
import { Search, X, Sparkles } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, inputRef }) => {
  const localRef = useRef<HTMLInputElement>(null);
  const activeInputRef = inputRef || localRef;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        activeInputRef.current?.focus();
      }
      if (e.key === 'Escape' && document.activeElement === activeInputRef.current) {
        onChange('');
        activeInputRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeInputRef, onChange]);

  const quickTags = ['GPT', 'Next.js', 'NVIDIA', 'Zero-Day', 'Bán dẫn', 'Data Center'];

  return (
    <div className="w-full space-y-2">
      <div className="relative flex items-center">
        <Search className="absolute left-3.5 w-4 h-4 text-muted-foreground pointer-events-none" />
        <input
          ref={activeInputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Tìm kiếm bài viết chuyên sâu theo tiêu đề, tác giả hoặc từ khóa (ví dụ: AI Agents, GPU, Next.js)..."
          className="w-full pl-10 pr-10 py-2.5 rounded-2xl bg-card border border-border/80 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all shadow-sm"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-3 p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted"
            title="Xóa tìm kiếm"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Suggested search tags */}
      {!value && (
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground overflow-x-auto scrollbar-none py-1">
          <span className="flex items-center gap-1 text-[11px] font-medium mr-1 text-primary">
            <Sparkles className="w-3 h-3" /> Gợi ý:
          </span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              onClick={() => onChange(tag)}
              className="px-2.5 py-0.5 rounded-lg bg-muted/60 hover:bg-muted hover:text-foreground border border-border/40 text-[11px] transition-colors whitespace-nowrap"
            >
              #{tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
