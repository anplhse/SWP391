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
        {/* Title Section with emphasis */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-3 relative inline-block">
            <span className="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">Blog</span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-white/40 rounded-full"></div>
          </h1>
          <p className="text-white/90 text-lg mt-6 font-medium drop-shadow-lg">
            Kiến thức hữu ích về bảo dưỡng xe điện
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <article className="rounded-2xl p-7 bg-white shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer hover:-translate-y-2 border-t-4 border-primary">
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                Bảo dưỡng
              </span>
            </div>
            <h3 className="font-bold mb-4 text-xl text-gray-900 leading-tight">
              10 Mẹo <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 font-black italic text-2xl">'Vàng'</span> Giúp Pin Xe Điện Bền Bỉ, Chậm Chai Hơn
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">Hướng dẫn cách sạc và bảo quản để tối ưu tuổi thọ pin.</p>
          </article>

          <article className="rounded-2xl p-7 bg-white shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer hover:-translate-y-2 border-t-4 border-accent">
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                Hướng dẫn
              </span>
            </div>
            <h3 className="font-bold mb-4 text-xl text-gray-900 leading-tight">
              Checklist Bảo Dưỡng Xe Điện Tại Nhà: 5 Việc Đơn Giản Hàng Tháng
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">Các bước tự kiểm tra lốp, nước rửa kính, cổng sạc...</p>
          </article>

          <article className="rounded-2xl p-7 bg-white shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer hover:-translate-y-2 border-t-4 border-orange-400">
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-orange-300 to-orange-400 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                Chi phí
              </span>
            </div>
            <h3 className="font-bold mb-4 text-xl text-gray-900 leading-tight">
              Chi Phí <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 font-black italic text-2xl">'Nuôi'</span> Xe Điện Thực Tế Tốn Bao Nhiêu Một Năm?
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">Phân tích chi phí sạc, bảo dưỡng định kỳ so với xe xăng.</p>
          </article>
        </div>

        {/* Bottom 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <article className="rounded-2xl p-7 bg-white shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer hover:-translate-y-2 border-t-4 border-green-500">
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                An toàn & Tin đồn
              </span>
            </div>
            <h3 className="font-bold mb-4 text-xl text-gray-900 leading-tight">
              Sự Thật Về Sạc Xe Điện Qua Đêm: Có Gây Nổ Hay Chai Pin...?
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">Giải đáp những lo ngại phổ biến về sạc xe điện qua đêm.</p>
          </article>

          <article className="rounded-2xl p-7 bg-white shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer hover:-translate-y-2 border-t-4 border-blue-500">
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                Kiến thức linh kiện
              </span>
            </div>
            <h3 className="font-bold mb-4 text-xl text-gray-900 leading-tight">
              Tại Sao Lốp Xe Điện Mòn Nhanh Hơn Lốp Xe Xăng...?
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">Tìm hiểu nguyên nhân và cách chọn lốp phù hợp cho xe điện.</p>
          </article>
        </div>
      </main>
    </div>
  );
}


