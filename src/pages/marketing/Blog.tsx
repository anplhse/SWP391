export default function Blog() {
  return (
    <div 
      className="min-h-screen text-foreground relative overflow-hidden"
      style={{
        background: 'linear-gradient(-45deg, hsl(14, 100%, 68%), hsl(26, 100%, 74%), hsl(16, 100%, 78%), hsl(24, 100%, 83%))',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite'
      }}
    >
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
      
      <main className="mx-auto max-w-6xl px-4 py-14 relative z-20">
        {/* Title Section - Professional & Clean */}
        <div className="mb-12 text-center">
          <h1 
            className="text-5xl md:text-6xl font-bold mb-3 text-white"
            style={{ 
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
              letterSpacing: '-0.02em',
              textShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
          >
            Blog
          </h1>
          <p className="text-white/90 text-lg mt-4 font-medium">
            Kiến thức hữu ích về bảo dưỡng xe điện
          </p>
        </div>

        {/* Grid layout - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <a 
            href="http://cartimes.tapchicongthuong.vn/6-meo-giup-keo-dai-tuoi-tho-pin-xe-dien-mot-cach-hieu-qua-16642.htm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-2xl p-7 bg-white shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer hover:-translate-y-2 border-t-4 border-primary flex flex-col"
          >
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                Bảo dưỡng
              </span>
            </div>
            <h3 className="font-bold mb-3 text-lg text-gray-900 leading-tight min-h-[4.5rem]">
              6 Mẹo Kéo Dài Tuổi Thọ Pin Xe Điện Hiệu Quả
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">Hướng dẫn cách sạc và bảo quản để tối ưu tuổi thọ pin xe điện của bạn.</p>
          </a>

          <a 
            href="https://vinfastauto.com/vn_vi/bao-duong-o-to-dien" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-2xl p-7 bg-white shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer hover:-translate-y-2 border-t-4 border-accent flex flex-col"
          >
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                Hướng dẫn
              </span>
            </div>
            <h3 className="font-bold mb-3 text-lg text-gray-900 leading-tight min-h-[4.5rem]">
              Bảo Dưỡng Xe Điện: Hướng Dẫn Chi Tiết
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">Các bước bảo dưỡng định kỳ và kiểm tra xe điện chuyên nghiệp từ VinFast.</p>
          </a>

          <a 
            href="https://vinfastauto.com/vn_vi/chi-phi-su-dung-xe-dien" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-2xl p-7 bg-white shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer hover:-translate-y-2 border-t-4 border-orange-400 flex flex-col"
          >
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-orange-300 to-orange-400 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                Chi phí
              </span>
            </div>
            <h3 className="font-bold mb-3 text-lg text-gray-900 leading-tight min-h-[4.5rem]">
              Chi Phí Sử Dụng Xe Điện: Phân Tích & So Sánh
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">Phân tích chi phí sạc, bảo dưỡng định kỳ so với xe xăng truyền thống.</p>
          </a>

          <a 
            href="https://osakar.com.vn/tin-tuc/sac-xe-dien-qua-dem-co-sao-khong/#:~:text=ng%E1%BA%AFt%20%E1%BB%9F%20%C4%91%C3%A2u?-,1.,m%C3%A0%20kh%C3%B4ng%20b%E1%BB%8B%20gi%C3%A1n%20%C4%91o%E1%BA%A1n." 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-2xl p-7 bg-white shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer hover:-translate-y-2 border-t-4 border-green-500 flex flex-col"
          >
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                An toàn & Tin đồn
              </span>
            </div>
            <h3 className="font-bold mb-3 text-lg text-gray-900 leading-tight min-h-[4.5rem]">
              Sạc Xe Điện Qua Đêm Có Sao Không?
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">Giải đáp những lo ngại phổ biến về an toàn khi sạc xe điện qua đêm.</p>
          </a>

          <a 
            href="https://thanhnien.vn/vi-sao-lop-o-to-dien-thuong-mon-nhanh-hon-lop-xe-xang-18525051509160644.htm#:~:text=M%E1%BB%99t%20chi%E1%BA%BFc%20%C3%B4%20t%C3%B4%20%C4%91i%E1%BB%87n,ho%E1%BA%B7c%20tr%C6%B0%E1%BB%9Bc%20t%C3%B9y%20m%E1%BA%ABu%20xe).&text=Ngo%C3%A0i%20ra%2C%20kh%C3%A1c%20v%E1%BB%9Bi%20xe,ph%E1%BA%A3i%20hy%20sinh%20%C4%91%E1%BB%99%20b%E1%BB%81n." 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-2xl p-7 bg-white shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer hover:-translate-y-2 border-t-4 border-blue-500 flex flex-col"
          >
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                Kiến thức linh kiện
              </span>
            </div>
            <h3 className="font-bold mb-3 text-lg text-gray-900 leading-tight min-h-[4.5rem]">
              Vì Sao Lốp Xe Điện Mòn Nhanh Hơn?
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">Tìm hiểu nguyên nhân và cách chọn lốp phù hợp cho xe điện của bạn.</p>
          </a>

          <a 
            href="https://vinfastauto.com/vn_vi/so-sanh-xe-dien-va-xe-xang-ve-kha-nang-cap-nhat-phan-mem" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-2xl p-7 bg-white shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer hover:-translate-y-2 border-t-4 border-purple-500 flex flex-col"
          >
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                Công nghệ
              </span>
            </div>
            <h3 className="font-bold mb-3 text-lg text-gray-900 leading-tight min-h-[4.5rem]">
              So Sánh Xe Điện Và Xe Xăng Về Cập Nhật OTA
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">Tìm hiểu về tính năng cập nhật từ xa và ưu điểm vượt trội của xe điện.</p>
          </a>
        </div>

        {/* View All Button - CTA */}
        <div className="flex justify-center mt-12">
          <a 
            href="https://vinfastauto.com/vn_vi/tin-tuc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-white text-gray-900 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 inline-block"
          >
            <span className="relative z-10 flex items-center gap-2">
              Xem tất cả bài viết
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Xem tất cả bài viết
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
        </div>
      </main>
    </div>
  );
}


