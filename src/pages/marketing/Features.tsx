export default function Features() {
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
      `}</style>
      
      <main className="mx-auto max-w-6xl px-4 py-14 relative z-20">
        {/* Title Section with emphasis */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-3 relative inline-block">
            <span className="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">Chức Năng</span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-white/40 rounded-full"></div>
          </h1>
          <p className="text-white/90 text-lg mt-6 font-medium drop-shadow-lg">
            Trải nghiệm dịch vụ thông minh cho khách hàng xe điện
          </p>
        </div>

        {/* Top 3 features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="rounded-2xl p-7 bg-white shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer hover:-translate-y-2 border-t-4 border-primary">
            <div className="mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="font-bold mb-3 text-xl text-gray-900">
              Đặt lịch hẹn <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 font-black">24/7</span>
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Chủ động chọn dịch vụ, xem khung giờ còn trống tại Center và đặt hẹn bất cứ lúc nào bạn rảnh, kể cả nửa đêm. Không cần chờ điện thoại.
            </p>
          </div>

          <div className="rounded-2xl p-7 bg-white shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer hover:-translate-y-2 border-t-4 border-accent">
            <div className="mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="font-bold mb-3 text-xl text-gray-900">
              Theo dõi tiến độ <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 font-black">Real-time</span>
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Không cần gọi điện hỏi thăm. Biết chính xác xe của bạn đang ở trạng thái nào (Chẩn đoán, Đang sửa, Chờ phụ tùng, Hoàn tất) ngay trên app.
            </p>
          </div>

          <div className="rounded-2xl p-7 bg-white shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer hover:-translate-y-2 border-t-4 border-orange-400">
            <div className="mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h3 className="font-bold mb-3 text-xl text-gray-900">Sổ Bảo Dưỡng Điện Tử</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Lưu trữ toàn bộ lịch sử sửa chữa, bảo dưỡng, thay thế linh kiện của xe bạn tại Center. Không bao giờ lo mất sổ, giúp giữ giá xe khi bán lại.
            </p>
          </div>
        </div>

        {/* Bottom 2 features centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="rounded-2xl p-7 bg-white shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer hover:-translate-y-2 border-t-4 border-green-500">
            <div className="mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>
            <h3 className="font-bold mb-3 text-xl text-gray-900">Tư vấn & Báo giá Trực tuyến</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Chat trực tiếp với Cố vấn Dịch vụ để hỏi đáp kỹ thuật hoặc yêu cầu báo giá ước tính cho một hạng mục sửa chữa trước khi bạn mang xe đến.
            </p>
          </div>

          <div className="rounded-2xl p-7 bg-white shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer hover:-translate-y-2 border-t-4 border-blue-500">
            <div className="mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
            </div>
            <h3 className="font-bold mb-3 text-xl text-gray-900">Nhắc lịch & Ưu đãi Thành viên</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Nhận thông báo tự động khi xe sắp đến kỳ bảo dưỡng pin, thay lốp... và là người đầu tiên nhận các chương trình khuyến mãi, ưu đãi dành riêng cho khách hàng thân thiết.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}


