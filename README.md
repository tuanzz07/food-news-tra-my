# ⚡ TechPulse - Nền Tảng Tin Tức & Nội Dung Chuyên Sâu Công Nghệ

Một website tổng hợp tin tức và phân tích chuyên sâu công nghệ đa nguồn thế hệ mới, tích hợp **Chế độ đọc tinh gọn (Reader Mode)** loại bỏ toàn bộ quảng cáo rác, bộ nhớ đệm phân tán **Vercel Edge Caching (Read-only)** và quy trình kiểm thử tự động **GitHub Actions CI/CD**.

---

## 🌟 Tính Năng Nổi Bật

### 1. Thu Thập & Chuẩn Hóa Đa Nguồn Tin Uy Tín (RSS & APIs)
- **🤖 Trí tuệ nhân tạo (AI)**: OpenAI News, TechCrunch AI, MIT Technology Review.
- **💻 Lập trình & Kỹ nghệ phần mềm (Dev)**: Hacker News, DEV Community, InfoQ.
- **⚙️ Phần cứng & Bán dẫn (Hardware)**: Ars Technica Gadgets, The Verge, Bán dẫn & Chip.
- **🔒 An ninh mạng (Cybersecurity)**: The Hacker News, BleepingComputer.
- **🇻🇳 Công nghệ Việt Nam**: VnExpress Số Hóa, GenK.
- **Bộ parser RSS/Atom/JSON độc lập**: Viết bằng TypeScript thuần kết hợp `fast-xml-parser`, chịu tải cao, timeout an toàn, tự động lọc trùng và sắp xếp theo dòng thời gian.

### 2. Chế Độ Đọc Tinh Gọn (Distraction-Free Reader Mode)
- Trích xuất nội dung bài viết gốc, **loại bỏ 100% quảng cáo, banner, popup, script theo dõi và sidebar**.
- **Tùy biến hiển thị**:
  - Chỉnh cỡ chữ linh hoạt: `A-` / `A+`.
  - Đổi kiểu phông chữ: **Sans-serif** (hiện đại), **Serif** (như trang sách giấy), **Monospace** (lập trình viên).
  - Đổi giao diện đọc: **Dark Mode** (êm dịu ban đêm), **Light Mode** (sáng rõ), **Sepia** (vàng ấm chống mỏi mắt).
- **Text-to-Speech (Đọc bài bằng giọng nói tự nhiên)**: Tích hợp Web Speech API đọc to bài viết tiếng Việt và tiếng Anh.
- Sao chép liên kết chia sẻ nhanh và xem lại nguồn gốc bất cứ lúc nào.

### 3. Lọc Theo Danh Mục & Tìm Kiếm Tức Thì
- Thanh tìm kiếm thời gian thực với gợi ý từ khóa (`#GPT`, `#Next.js`, `#NVIDIA`, `#Zero-Day`...).
- Lọc theo từng nguồn tin chuyên biệt.
- 3 chế độ xem: **Dạng lưới (Grid)**, **Dạng tạp chí (Magazine)**, **Dạng danh sách gọn (Compact)**.
- **Hệ thống lưu bài đọc sau (Bookmark)**: Lưu trữ trực tiếp trên trình duyệt bằng LocalStorage (không cần tạo tài khoản hay đăng nhập phiền phức).

### 4. Tối Ưu Hiệu Năng Vercel Edge & Không Phụ Thuộc Database
- Chạy dạng **Read-Only**: Tận dụng cơ chế `stale-while-revalidate` và `Cache-Control` tại tầng Edge CDN của Vercel.
- Thời gian phản hồi API trung bình `< 50ms`.
- Tùy chọn Supabase: Module `lib/supabase.ts` sẵn sàng để kết nối nếu người dùng muốn đồng bộ dữ liệu đám mây trong tương lai.

---

## 🚀 HƯỚNG DẪN TRIỂN KHAI HOÀN TOÀN QUA GOOGLE CHROME (KHÔNG CẦN CÀI APP NÀO VỀ MÁY)

Bạn không cần cài Git, Node.js hay bất kỳ phần mềm lập trình nào. Mọi thao tác đều thực hiện trực tiếp trên trình duyệt Google Chrome:

### Bước 1: Tạo Repository Trên GitHub (Bằng Google Chrome)
1. Mở trình duyệt Chrome và truy cập: [https://github.com](https://github.com) (Đăng ký/Đăng nhập tài khoản).
2. Nhấn vào dấu **`+`** ở góc trên bên phải > Chọn **New repository**.
3. Điền tên Repository (ví dụ: `techpulse-news`), chọn **Public**.
4. Nhấn **Create repository**.

### Bước 2: Tải Toàn Bộ Thư Mục Lên GitHub
1. Tại trang Repository vừa tạo trên GitHub, nhấn vào đường link **"uploading an existing file"**.
2. Kéo thả toàn bộ các file và thư mục trong thư mục này (`app`, `components`, `lib`, `public`, `.github`, `package.json`, `vercel.json`...) vào khung tải lên của GitHub.
3. Đợi các file tải lên xong > Nhấn **Commit changes**.
   > *Hệ thống GitHub Actions sẽ tự động kích hoạt workflow kiểm tra code (`CI - Code Quality & Build Validation`) ngay lập tức!*

### Bước 3: Đưa Lên Mạng Với Vercel (1 Click Deploy)
1. Mở tab mới trên Chrome và truy cập: [https://vercel.com](https://vercel.com).
2. Chọn **Sign Up** (hoặc Log In) bằng **Continue with GitHub**.
3. Tại trang tổng quan (Dashboard), nhấn **Add New...** > Chọn **Project**.
4. Bạn sẽ thấy repository `techpulse-news` vừa tạo xuất hiện trong danh sách > Nhấn nút **Import**.
5. Giữ nguyên toàn bộ cấu hình mặc định (Next.js Framework Preset) > Nhấn nút **Deploy**.
6. Đợi khoảng 1 phút, Vercel sẽ cung cấp cho bạn một đường link website miễn phí trọn đời (ví dụ: `https://techpulse-news.vercel.app`)!

---

## 🛠️ Cấu Trúc Mã Nguồn

```text
├── .github/
│   └── workflows/
│       └── ci.yml             # Tự động test & kiểm tra hợp lệ khi push lên nhánh main
├── app/
│   ├── api/
│   │   ├── news/route.ts      # API tổng hợp & phân tích RSS/XML/JSON đa nguồn
│   │   └── reader/route.ts    # API trích xuất bài viết tinh gọn (Reader Mode)
│   ├── bookmarks/page.tsx     # Trang xem và quản lý bài viết đã lưu
│   ├── reader/page.tsx        # Trang đọc trực tiếp toàn màn hình
│   ├── globals.css            # Thiết lập Tailwind, Dark/Light/Sepia themes
│   ├── layout.tsx             # Root Layout và thẻ SEO Metadata
│   └── page.tsx               # Trang chủ chính với Bộ lọc & Chế độ xem
├── components/
│   ├── ArticleCard.tsx        # Thẻ hiển thị bài viết (Grid, Magazine, Compact)
│   ├── CategoryNav.tsx        # Thanh điều hướng danh mục công nghệ
│   ├── Footer.tsx             # Chân trang và thông tin nguồn
│   ├── Header.tsx             # Đầu trang, nút tìm kiếm, đổi giao diện, dấu trang
│   ├── ReaderModal.tsx        # Hộp thoại Chế độ đọc tinh gọn + Text to Speech
│   ├── SearchBar.tsx          # Thanh tìm kiếm thời gian thực
│   ├── SourceFilter.tsx       # Bộ lọc nguồn tin tức
│   └── ViewSwitcher.tsx       # Bộ chuyển đổi giao diện hiển thị
├── lib/
│   ├── cache.ts               # Bộ nhớ đệm phân tầng
│   ├── feeds-config.ts        # Danh sách nguồn tin tức uy tín và danh mục
│   ├── reader-extractor.ts    # Thuật toán bóc tách bài viết & loại bỏ quảng cáo
│   ├── rss-parser.ts          # Bộ phân tích XML/RSS/Atom tốc độ cao
│   ├── supabase.ts            # Tùy chọn kết nối Supabase (Read-only an toàn)
│   ├── types.ts               # TypeScript Interfaces định nghĩa chuẩn dữ liệu
│   └── utils.ts               # Tiện ích định dạng thời gian và nội dung
├── package.json               # Cấu hình thư viện Next.js, Tailwind, React
├── tailwind.config.ts         # Cấu hình giao diện và màu sắc
└── vercel.json                # Cấu hình Edge Caching và CDN Headers
```

---

## 🧪 Tự Động Hóa Với GitHub Actions
File workflow tại `.github/workflows/ci.yml` sẽ tự động chạy mỗi khi có code mới được tải lên nhánh `main`:
1. Khởi tạo môi trường ảo Ubuntu với Node.js 20.
2. Kiểm tra tính toàn vẹn của mã nguồn (`npm ci`).
3. Chạy kiểm tra quy chuẩn mã nguồn (`npm run lint`).
4. Biên dịch thử nghiệm (`npm run build`).
5. Nếu đạt tất cả điều kiện, Vercel sẽ tự động cập nhật bản build mới nhất lên website trực tiếp!
