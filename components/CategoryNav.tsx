'use client';

import React from 'react';
import { CATEGORIES } from '@/lib/feeds-config';
import { TechCategory } from '@/lib/types';
import { 
  Flame, 
  Bot, 
  Code2, 
  Cpu, 
  ShieldAlert, 
  TrendingUp, 
  Globe2 
} from 'lucide-react';

interface CategoryNavProps {
  activeCategory: TechCategory;
  onSelectCategory: (category: TechCategory) => void;
  categoryCounts?: Record<string, number>;
}

const ICONS: Record<string, React.ReactNode> = {
  all: <Flame className="w-4 h-4 text-amber-500" />,
  ai: <Bot className="w-4 h-4 text-purple-400" />,
  dev: <Code2 className="w-4 h-4 text-emerald-400" />,
  hardware: <Cpu className="w-4 h-4 text-cyan-400" />,
  security: <ShieldAlert className="w-4 h-4 text-rose-400" />,
  trends: <TrendingUp className="w-4 h-4 text-orange-400" />,
  vietnam: <Globe2 className="w-4 h-4 text-red-500" />
};

export const CategoryNav: React.FC<CategoryNavProps> = ({
  activeCategory,
  onSelectCategory,
  categoryCounts = {}
}) => {
  return (
    <div className="w-full overflow-x-auto scrollbar-none py-2">
      <div className="flex items-center gap-2 min-w-max pb-1">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = categoryCounts[cat.id];

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                isActive
                  ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.02]'
                  : 'bg-card/70 hover:bg-card text-muted-foreground hover:text-foreground border border-border/60 hover:border-border'
              }`}
            >
              <span className="flex-shrink-0">{ICONS[cat.id]}</span>
              <span>{cat.vietnameseName}</span>
              {typeof count === 'number' && count > 0 && (
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full font-semibold ${
                    isActive
                      ? 'bg-primary-foreground/20 text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
