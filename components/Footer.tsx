'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ShieldCheck, Zap, Globe, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-border/80 bg-card/40 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg">TechPulse</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Hệ thống tổng hợp và phân tích tin tức chuyên sâu về Trí tuệ nhân tạo (AI), Kỹ nghệ phần mềm, Phần cứng bán dẫn, An ninh mạng và Hệ sinh thái công nghệ Việt Nam.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-amber-500" /> Vercel Edge Cache
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Chế độ tinh gọn (Reader Mode)
              </span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Chuyên mục công nghệ</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>Trí tuệ nhân tạo (AI & LLMs)</li>
              <li>Lập trình & Kỹ nghệ phần mềm</li>
              <li>Phần cứng, Bán dẫn & Chip</li>
              <li>An ninh mạng & Zero-Day Alerts</li>
              <li>Tin tức công nghệ Việt Nam</li>
            </ul>
          </div>

          {/* Sources */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Nguồn tin uy tín</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>OpenAI News & TechCrunch AI</li>
              <li>Hacker News & DEV Community</li>
              <li>Ars Technica & The Verge</li>
              <li>The Hacker News & BleepingComputer</li>
              <li>VnExpress Số Hóa & GenK</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} TechPulse News. Được thiết kế tối ưu cho Vercel Edge & GitHub Actions.</p>
          <div className="flex items-center gap-4">
            <span>Read-only Edge Architecture</span>
            <span>·</span>
            <span>Zero Tracking & Clean View</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
