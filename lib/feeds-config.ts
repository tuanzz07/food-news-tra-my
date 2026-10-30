import { CategoryInfo, FeedSource, Article } from './types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'all',
    name: 'All Topics',
    vietnameseName: 'Tất cả tin tức',
    description: 'Toàn cảnh tin tức công nghệ mới nhất từ các nguồn uy tín toàn cầu và Việt Nam',
    iconName: 'Flame',
    color: 'from-amber-500 to-red-500'
  },
  {
    id: 'ai',
    name: 'AI & Data',
    vietnameseName: 'Trí tuệ nhân tạo (AI)',
    description: 'Mô hình ngôn ngữ lớn (LLM), Generative AI, Robotics và Khoa học dữ liệu',
    iconName: 'Bot',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'dev',
    name: 'Software & Dev',
    vietnameseName: 'Lập trình & Kỹ nghệ',
    description: 'Kiến trúc hệ thống, DevOps, Web/Mobile development và mã nguồn mở',
    iconName: 'Code2',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'hardware',
    name: 'Hardware & Chips',
    vietnameseName: 'Phần cứng & Linh kiện',
    description: 'Bán dẫn, CPU, GPU, thiết bị di động và công nghệ phần cứng thế hệ mới',
    iconName: 'Cpu',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'security',
    name: 'Cybersecurity',
    vietnameseName: 'An ninh mạng & Bảo mật',
    description: 'Lỗ hổng zero-day, tấn công mạng, bảo mật đám mây và quyền riêng tư',
    iconName: 'ShieldAlert',
    color: 'from-rose-500 to-red-600'
  },
  {
    id: 'trends',
    name: 'Tech Trends',
    vietnameseName: 'Xu hướng & Khởi nghiệp',
    description: 'Đầu tư mạo hiểm, Big Tech, thương mại điện tử và đột phá công nghệ tương lai',
    iconName: 'TrendingUp',
    color: 'from-amber-400 to-orange-500'
  },
  {
    id: 'vietnam',
    name: 'Vietnam Tech',
    vietnameseName: 'Công nghệ Việt Nam',
    description: 'Hệ sinh thái công nghệ, sản phẩm số và thị trường viễn thông tại Việt Nam',
    iconName: 'Globe2',
    color: 'from-red-600 to-yellow-500'
  }
];

export const FEED_SOURCES: FeedSource[] = [
  // AI & Data
  {
    id: 'openai-blog',
    name: 'OpenAI News',
    url: 'https://openai.com',
    feedUrl: 'https://openai.com/news/rss.xml',
    type: 'rss',
    category: 'ai',
    badgeColor: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    icon: 'Brain',
    language: 'en'
  },
  {
    id: 'techcrunch-ai',
    name: 'TechCrunch AI',
    url: 'https://techcrunch.com/category/artificial-intelligence/',
    feedUrl: 'https://techcrunch.com/category/artificial-intelligence/feed/',
    type: 'rss',
    category: 'ai',
    badgeColor: 'bg-green-500/10 text-green-500 border-green-500/20',
    icon: 'Sparkles',
    language: 'en'
  },
  {
    id: 'mit-tech-ai',
    name: 'MIT Tech Review',
    url: 'https://www.technologyreview.com',
    feedUrl: 'https://www.technologyreview.com/topic/artificial-intelligence/feed',
    type: 'rss',
    category: 'ai',
    badgeColor: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20',
    icon: 'Cpu',
    language: 'en'
  },

  // Software & Dev
  {
    id: 'hackernews',
    name: 'Hacker News',
    url: 'https://news.ycombinator.com',
    feedUrl: 'https://news.ycombinator.com/rss',
    type: 'rss',
    category: 'dev',
    badgeColor: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
    icon: 'Terminal',
    language: 'en'
  },
  {
    id: 'devto',
    name: 'DEV Community',
    url: 'https://dev.to',
    feedUrl: 'https://dev.to/feed',
    type: 'rss',
    category: 'dev',
    badgeColor: 'bg-zinc-800/10 text-zinc-300 border-zinc-700/30',
    icon: 'Code',
    language: 'en'
  },
  {
    id: 'infoq',
    name: 'InfoQ Dev',
    url: 'https://www.infoq.com',
    feedUrl: 'https://feed.infoq.com/',
    type: 'rss',
    category: 'dev',
    badgeColor: 'bg-blue-600/10 text-blue-400 border-blue-500/20',
    icon: 'Layers',
    language: 'en'
  },

  // Hardware & Chips
  {
    id: 'arstechnica-gadgets',
    name: 'Ars Technica',
    url: 'https://arstechnica.com/gadgets/',
    feedUrl: 'https://feeds.arstechnica.com/arstechnica/gadgets',
    type: 'rss',
    category: 'hardware',
    badgeColor: 'bg-red-500/10 text-red-500 border-red-500/20',
    icon: 'Radio',
    language: 'en'
  },
  {
    id: 'theverge-tech',
    name: 'The Verge',
    url: 'https://www.theverge.com',
    feedUrl: 'https://www.theverge.com/rss/tech/index.xml',
    type: 'atom',
    category: 'hardware',
    badgeColor: 'bg-pink-500/10 text-pink-500 border-pink-500/20',
    icon: 'Laptop',
    language: 'en'
  },

  // Security
  {
    id: 'thehackernews',
    name: 'The Hacker News',
    url: 'https://thehackernews.com',
    feedUrl: 'https://feeds.feedburner.com/TheHackersNews',
    type: 'rss',
    category: 'security',
    badgeColor: 'bg-rose-500/10 text-rose-500 border-rose-500/20',
    icon: 'Shield',
    language: 'en'
  },
  {
    id: 'bleepingcomputer',
    name: 'BleepingComputer',
    url: 'https://www.bleepingcomputer.com',
    feedUrl: 'https://www.bleepingcomputer.com/feed/',
    type: 'rss',
    category: 'security',
    badgeColor: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    icon: 'Lock',
    language: 'en'
  },

  // Vietnam Tech
  {
    id: 'vnexpress-sohoa',
    name: 'VnExpress Số Hóa',
    url: 'https://vnexpress.net/so-hoa',
    feedUrl: 'https://vnexpress.net/rss/so-hoa.rss',
    type: 'rss',
    category: 'vietnam',
    badgeColor: 'bg-red-500/10 text-red-600 border-red-500/20',
    icon: 'Newspaper',
    language: 'vi'
  },
  {
    id: 'genk',
    name: 'GenK Tech',
    url: 'https://genk.vn',
    feedUrl: 'https://genk.vn/rss/home.rss',
    type: 'rss',
    category: 'vietnam',
    badgeColor: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    icon: 'Smartphone',
    language: 'vi'
  }
];

export const FALLBACK_ARTICLES: Article[] = [
  {
    id: 'fb-ai-1',
    title: 'Kỷ nguyên Agentic AI: Khi mô hình ngôn ngữ không chỉ trò chuyện mà trực tiếp hành động',
    link: 'https://openai.com/news/agentic-future',
    pubDate: new Date(Date.now() - 1000 * 60 * 35).toISOString(),
    formattedDate: '35 phút trước',
    relativeTime: '35m ago',
    source: {
      id: 'openai-blog',
      name: 'OpenAI News',
      url: 'https://openai.com',
      badgeColor: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
      icon: 'Brain',
      language: 'en'
    },
    category: 'ai',
    categoryName: 'Trí tuệ nhân tạo (AI)',
    summary: 'Phân tích sự chuyển dịch từ chatbot thụ động sang các AI Agent tự vận hành, có khả năng phân rã bài toán, lập trình mã nguồn và giải quyết công việc tự động trên môi trường đám mây.',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80',
    author: 'Research Team',
    readingTime: 6,
    tags: ['AI Agents', 'LLM', 'Autonomous AI']
  },
  {
    id: 'fb-dev-1',
    title: 'Tối ưu hóa Serverless và Edge Functions: Kiến trúc bộ nhớ đệm đa tầng giảm 80% độ trễ',
    link: 'https://dev.to/edge-caching-deep-dive',
    pubDate: new Date(Date.now() - 1000 * 60 * 90).toISOString(),
    formattedDate: '1 giờ trước',
    relativeTime: '1h ago',
    source: {
      id: 'devto',
      name: 'DEV Community',
      url: 'https://dev.to',
      badgeColor: 'bg-zinc-800/10 text-zinc-300 border-zinc-700/30',
      icon: 'Code',
      language: 'en'
    },
    category: 'dev',
    categoryName: 'Lập trình & Kỹ nghệ',
    summary: 'Hướng dẫn chi tiết kỹ thuật Stale-While-Revalidate kết hợp Vercel Edge Cache và CDN phân tán nhằm tối đa hoá tỷ lệ Cache Hit cho các hệ thống tin tức tải cao.',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    author: 'Alex Rivera',
    readingTime: 8,
    tags: ['Edge Computing', 'Next.js', 'Vercel', 'Performance']
  },
  {
    id: 'fb-hardware-1',
    title: 'Cuộc đua tiến trình bán dẫn 2nm và kiến trúc Chip 3D: Cột mốc mới cho tính toán hiệu năng cao',
    link: 'https://arstechnica.com/semiconductors-2nm-revolution',
    pubDate: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
    formattedDate: '3 giờ trước',
    relativeTime: '3h ago',
    source: {
      id: 'arstechnica-gadgets',
      name: 'Ars Technica',
      url: 'https://arstechnica.com',
      badgeColor: 'bg-red-500/10 text-red-500 border-red-500/20',
      icon: 'Radio',
      language: 'en'
    },
    category: 'hardware',
    categoryName: 'Phần cứng & Linh kiện',
    summary: 'TSMC, Intel và Samsung đang tăng tốc chuyển sang công nghệ bóng bán dẫn GAA (Gate-All-Around) cùng hệ thống cấp điện mặt sau (Backside Power Delivery) để cung ứng cho cụm siêu máy tính AI.',
    coverImage: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=1200&q=80',
    author: 'Dr. Samuel Vance',
    readingTime: 7,
    tags: ['Hardware', 'Semiconductors', 'Chips', 'GPU']
  },
  {
    id: 'fb-security-1',
    title: 'Phát hiện chiến dịch tấn công chuỗi cung ứng mã nguồn nhắm vào các gói npm phổ biến',
    link: 'https://thehackernews.com/npm-supply-chain-alert',
    pubDate: new Date(Date.now() - 1000 * 60 * 240).toISOString(),
    formattedDate: '4 giờ trước',
    relativeTime: '4h ago',
    source: {
      id: 'thehackernews',
      name: 'The Hacker News',
      url: 'https://thehackernews.com',
      badgeColor: 'bg-rose-500/10 text-rose-500 border-rose-500/20',
      icon: 'Shield',
      language: 'en'
    },
    category: 'security',
    categoryName: 'An ninh mạng & Bảo mật',
    summary: 'Các chuyên gia an ninh mạng vừa phát hiện hàng chục thư viện mở bị chèn backdoor đánh cắp biến môi trường và khóa API của máy chủ đám mây thông qua kỹ thuật Typosquatting tinh vi.',
    coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    author: 'Elena Rostova',
    readingTime: 5,
    tags: ['Security', 'Zero-Day', 'Supply Chain', 'Vulnerability']
  },
  {
    id: 'fb-vietnam-1',
    title: 'Việt Nam thúc đẩy phát triển trung tâm dữ liệu xanh và hạ tầng tính toán đám mây cho AI',
    link: 'https://vnexpress.net/vietnam-datacenter-green-ai',
    pubDate: new Date(Date.now() - 1000 * 60 * 300).toISOString(),
    formattedDate: '5 giờ trước',
    relativeTime: '5h ago',
    source: {
      id: 'vnexpress-sohoa',
      name: 'VnExpress Số Hóa',
      url: 'https://vnexpress.net/so-hoa',
      badgeColor: 'bg-red-500/10 text-red-600 border-red-500/20',
      icon: 'Newspaper',
      language: 'vi'
    },
    category: 'vietnam',
    categoryName: 'Công nghệ Việt Nam',
    summary: 'Nhiều tập đoàn công nghệ lớn tại Việt Nam khởi công xây dựng các cụm Data Center đạt chuẩn Tier III/Tier IV tiết kiệm năng lượng, phục vụ nhu cầu đào tạo mô hình trí tuệ nhân tạo trong nước.',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    author: 'Minh Quân',
    readingTime: 4,
    tags: ['Data Center', 'Vietnam Tech', 'Cloud', 'Viễn thông']
  },
  {
    id: 'fb-trends-1',
    title: 'Báo cáo đầu tư công nghệ 2026: Dòng vốn mạo hiểm đổ dồn vào AI Cơ sở hạ tầng và Năng lượng mới',
    link: 'https://techcrunch.com/tech-investments-2026',
    pubDate: new Date(Date.now() - 1000 * 60 * 360).toISOString(),
    formattedDate: '6 giờ trước',
    relativeTime: '6h ago',
    source: {
      id: 'techcrunch-ai',
      name: 'TechCrunch',
      url: 'https://techcrunch.com',
      badgeColor: 'bg-green-500/10 text-green-500 border-green-500/20',
      icon: 'Sparkles',
      language: 'en'
    },
    category: 'trends',
    categoryName: 'Xu hướng & Khởi nghiệp',
    summary: 'Các quỹ đầu tư mạo hiểm hàng đầu thung lũng Silicon tái cơ cấu danh mục, tập trung vào giải pháp năng lượng sạch cho trung tâm tính toán và vi kiến trúc tăng tốc suy luận AI.',
    coverImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    author: 'Sarah Jenkins',
    readingTime: 6,
    tags: ['Venture Capital', 'Startups', 'Clean Energy', 'Trends']
  }
];
