import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen text-foreground relative overflow-x-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(-45deg, hsl(14, 100%, 68%), hsl(26, 100%, 74%), hsl(16, 100%, 78%), hsl(24, 100%, 83%))',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
          }}
        />
        
        {/* Floating Clouds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-10 left-[-10%] w-64 h-32 opacity-40"
            style={{
              animation: 'float1 25s ease-in-out infinite',
            }}
          >
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Cpath fill='%23ffffff' d='M20 40 Q10 40 10 30 Q10 20 20 20 Q20 10 35 10 Q45 10 50 20 Q60 20 60 30 Q60 40 50 40 Z'/%3E%3C/svg%3E" alt="" className="w-full h-full" />
          </div>
          
          <div 
            className="absolute top-32 right-[-10%] w-80 h-40 opacity-30"
            style={{
              animation: 'float2 30s ease-in-out infinite',
            }}
          >
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Cpath fill='%23ffffff' d='M15 45 Q5 45 5 35 Q5 25 15 25 Q15 15 30 15 Q40 15 45 25 Q55 25 55 35 Q55 45 45 45 Z'/%3E%3C/svg%3E" alt="" className="w-full h-full" />
          </div>
          
          <div 
            className="absolute top-20 left-[20%] w-48 h-28 opacity-25"
            style={{
              animation: 'float3 35s ease-in-out infinite',
            }}
          >
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Cpath fill='%23ffffff' d='M25 40 Q15 40 15 30 Q15 20 25 20 Q25 10 40 10 Q50 10 55 20 Q65 20 65 30 Q65 40 55 40 Z'/%3E%3C/svg%3E" alt="" className="w-full h-full" />
          </div>

          <div 
            className="absolute bottom-20 right-[15%] w-56 h-32 opacity-35"
            style={{
              animation: 'float4 28s ease-in-out infinite',
            }}
          >
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Cpath fill='%23ffffff' d='M20 40 Q10 40 10 30 Q10 20 20 20 Q20 10 35 10 Q45 10 50 20 Q60 20 60 30 Q60 40 50 40 Z'/%3E%3C/svg%3E" alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
      <style>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes float1 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(120vw, -20px);
          }
        }
        
        @keyframes float2 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-120vw, 30px);
          }
        }
        
        @keyframes float3 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(80vw, -40px);
          }
        }
        
        @keyframes float4 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-100vw, -25px);
          }
        }
        
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-15px) translateX(20px);
          }
        }
        
        @keyframes floatSlow2 {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(20px) translateX(-15px);
          }
        }
        
        @keyframes floatSlow3 {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-10px) translateX(25px);
          }
        }
        
        @keyframes float3d {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          33% {
            transform: translateY(-8px) translateX(5px) scale(1.02);
          }
          66% {
            transform: translateY(-5px) translateX(-3px) scale(0.98);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes driveCar1 {
          0% {
            transform: translateX(-100px);
          }
          100% {
            transform: translateX(100vw);
          }
        }
        
        @keyframes driveCar2 {
          0% {
            transform: translateX(-100px);
          }
          100% {
            transform: translateX(100vw);
          }
        }
        
        @keyframes driveCar3 {
          0% {
            transform: translateX(-100px);
          }
          100% {
            transform: translateX(100vw);
          }
        }
      `}</style>
      <header className="w-full bg-white relative z-30 rounded-b-3xl shadow-xl pt-4 pb-4">
        <div className="mx-auto max-w-6xl px-4 flex items-center justify-between">
          <div className="flex items-center gap-3 relative z-30 bg-gradient-to-r from-orange-50 to-orange-100 px-4 py-2 rounded-2xl shadow-lg border border-gray-200"
            style={{
              boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)',
            }}
          >
            <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center shadow-md">
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11C5.84 5 5.28 5.42 5.08 6.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
              </svg>
            </div>
            <span className="font-semibold text-gray-800">EV Service Center</span>
          </div>
          <div className="flex items-center gap-3 relative z-30">
            <Button 
              onClick={() => navigate('/login')}
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Đăng nhập
            </Button>
          </div>
        </div>
      </header>

      {/* Scroll Progress Bar */}
      <div className="fixed right-6 top-24 bottom-6 w-2 bg-white/30 rounded-full z-40 overflow-hidden">
        <div 
          className="w-full bg-gradient-to-b from-primary via-accent to-primary rounded-full transition-all duration-300 shadow-lg"
          style={{
            height: '30%',
            animation: 'scrollProgress 3s ease-in-out infinite',
          }}
        ></div>
      </div>
      
      <style>{`
        @keyframes scrollProgress {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(200%);
          }
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 12px;
        }
        
        ::-webkit-scrollbar-track {
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
          border-radius: 10px;
          margin: 10px 0;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, hsl(14, 100%, 68%), hsl(26, 100%, 74%));
          border-radius: 10px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, hsl(14, 100%, 60%), hsl(26, 100%, 68%));
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
        }
        
        ::-webkit-scrollbar-thumb:active {
          background: linear-gradient(180deg, hsl(14, 100%, 50%), hsl(26, 100%, 60%));
        }
        
        /* Firefox Scrollbar */
        * {
          scrollbar-width: thin;
          scrollbar-color: hsl(14, 100%, 68%) rgba(255, 255, 255, 0.2);
        }
      `}</style>

      <main className="mx-auto max-w-6xl px-4 py-14 space-y-8 relative z-20">
        <div className="relative">
          <h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
            style={{ 
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
              letterSpacing: '-0.02em'
            }}
          >
            Giới thiệu
          </h1>
        </div>
        
        <div className="space-y-6 text-gray-900 text-lg md:text-xl leading-relaxed relative z-20">
          <h1 
            className="font-bold text-3xl md:text-4xl lg:text-5xl relative z-20 text-gray-900"
            style={{
              textShadow: '4px 4px 0px rgba(0,0,0,0.1), 8px 8px 0px rgba(0,0,0,0.05), 2px 2px 10px rgba(0,0,0,0.15)',
            }}
          >
            Chào mừng đến với EV Service Center
          </h1>

          <div className="space-y-6 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Mọi Tiện ích trong Tay Bạn</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Chào mừng bạn đến với trải nghiệm bảo dưỡng xe điện thế hệ mới. Với ứng dụng của EV Service Center, bạn có thể hoàn toàn chủ động quản lý chiếc xe của mình: từ đặt lịch hẹn 24/7, theo dõi tiến độ sửa chữa, cho đến truy cập toàn bộ lịch sử bảo dưỡng ngay trên điện thoại.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-md border border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Tiết kiệm thời gian</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Đặt lịch online 24/7, không cần gọi điện. Nhận thông báo tự động khi đến kỳ bảo dưỡng</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 shadow-md border border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Minh bạch hoàn toàn</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Theo dõi tiến độ sửa chữa real-time trên điện thoại. Biết chính xác xe đang ở bước nào</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 shadow-md border border-purple-200 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Lịch sử không bao giờ mất</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Toàn bộ hồ sơ bảo dưỡng được lưu trữ điện tử. Giúp giữ giá xe khi bán lại</p>
              </div>
            </div>
          </div>
        </div>

        {/* EV Infrastructure Section */}
        <div className="mt-20 relative">
          <div className="relative h-80 bg-gradient-to-b from-gray-100 to-gray-300 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
            {/* Sky background */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-blue-50"></div>
            
            {/* Road with perspective */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-600 to-gray-800 shadow-inner">
              {/* Road markings */}
              <div className="absolute top-1/2 left-0 right-0 h-2 flex justify-around">
                <div className="w-16 h-2 bg-yellow-300 rounded"></div>
                <div className="w-16 h-2 bg-yellow-300 rounded"></div>
                <div className="w-16 h-2 bg-yellow-300 rounded"></div>
                <div className="w-16 h-2 bg-yellow-300 rounded"></div>
                <div className="w-16 h-2 bg-yellow-300 rounded"></div>
              </div>
              {/* Road edge lines */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-white/30"></div>
            </div>

            {/* Mobile App Mockup - Center spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30" style={{ animation: 'float 3s ease-in-out infinite' }}>
              <div className="relative">
                {/* Phone Frame - Larger size */}
                <div className="w-48 h-96 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-[2.5rem] shadow-2xl p-2 border-3 border-gray-700">
                  {/* Screen */}
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="h-7 bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-between px-4">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                      <span className="text-[10px] text-white font-bold">100%</span>
                    </div>
                    
                    {/* App Content - Progress Tracking */}
                    <div className="p-4 space-y-3">
                      {/* Header */}
                      <div className="text-center">
                        <h4 className="text-sm font-bold text-gray-900">Theo dõi Tiến độ</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">VF8 - 51A-123.45</p>
                      </div>
                      
                      {/* Progress Steps */}
                      <div className="space-y-3 mt-4">
                        {/* Step 1 - Completed */}
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 shadow-md">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-gray-900">Tiếp nhận xe</p>
                            <p className="text-[10px] text-gray-500">Hoàn thành 09:30</p>
                          </div>
                        </div>
                        
                        {/* Step 2 - In Progress */}
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 relative shadow-lg">
                            <div className="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-75"></div>
                            <div className="w-3 h-3 bg-white rounded-full relative z-10"></div>
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-orange-600">Đang kiểm tra</p>
                            <p className="text-[10px] text-gray-500">KTV: Nguyễn Văn A</p>
                          </div>
                        </div>
                        
                        {/* Step 3 - Pending */}
                        <div className="flex items-center gap-3 opacity-50">
                          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-gray-900">Bảo dưỡng</p>
                            <p className="text-[10px] text-gray-500">Dự kiến: 45 phút</p>
                          </div>
                        </div>
                        
                        {/* Step 4 - Pending */}
                        <div className="flex items-center gap-3 opacity-50">
                          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-gray-900">Hoàn tất</p>
                            <p className="text-[10px] text-gray-500">Chờ xử lý</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom Button */}
                      <div className="pt-2">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl py-2.5 text-center shadow-lg">
                          <span className="text-xs text-white font-bold">Xem chi tiết</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Home Button */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
                </div>
                
                {/* Floating Label */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-lg shadow-xl whitespace-nowrap">
                  📱 Ứng dụng EV Service Center
                </div>
              </div>
            </div>

            {/* Trees - Realistic style with planters */}
            {/* Tree 1 with planter */}
            <div className="absolute bottom-32 left-[30%] z-15">
              <svg width="90" height="126" viewBox="0 0 150 210" className="drop-shadow-2xl">
                {/* Flower planter */}
                <ellipse cx="75" cy="200" rx="35" ry="8" fill="#8B4513" opacity="0.3"/>
                <path d="M45 195 Q42 200 45 205 L105 205 Q108 200 105 195 Z" fill="#CD853F"/>
                <path d="M48 195 Q46 200 48 205 L102 205 Q104 200 102 195 Z" fill="#DEB887"/>
                <ellipse cx="75" cy="195" rx="27" ry="6" fill="#8B7355"/>
                {/* Soil */}
                <ellipse cx="75" cy="192" rx="25" ry="5" fill="#654321"/>
                
                {/* Trunk */}
                <path d="M66 135 L72 200 L78 200 L84 135 Q75 132 66 135" fill="#654321" />
                <rect x="69" y="135" width="12" height="65" fill="#7D5A3D" opacity="0.6"/>
                
                {/* Foliage - natural canopy */}
                <ellipse cx="75" cy="105" rx="54" ry="48" fill="#2D5016" opacity="0.8"/>
                <ellipse cx="75" cy="84" rx="48" ry="42" fill="#3A6B1F"/>
                <ellipse cx="75" cy="66" rx="42" ry="36" fill="#4A8C2A"/>
                <ellipse cx="75" cy="54" rx="33" ry="30" fill="#5FA836"/>
                {/* Light spots */}
                <ellipse cx="84" cy="75" rx="18" ry="15" fill="#7BC142" opacity="0.7"/>
                <ellipse cx="60" cy="90" rx="15" ry="12" fill="#6FB037" opacity="0.6"/>
              </svg>
            </div>

            {/* Tree 2 with planter */}
            <div className="absolute bottom-32 left-[42%] z-15">
              <svg width="86" height="122" viewBox="0 0 144 204" className="drop-shadow-2xl">
                <ellipse cx="72" cy="194" rx="33" ry="8" fill="#8B4513" opacity="0.3"/>
                <path d="M43 189 Q40 194 43 199 L101 199 Q104 194 101 189 Z" fill="#CD853F"/>
                <path d="M46 189 Q44 194 46 199 L98 199 Q100 194 98 189 Z" fill="#DEB887"/>
                <ellipse cx="72" cy="189" rx="26" ry="6" fill="#8B7355"/>
                <ellipse cx="72" cy="186" rx="24" ry="5" fill="#654321"/>
                
                <path d="M63 129 L69 194 L75 194 L81 129 Q72 126 63 129" fill="#5C4033" />
                <rect x="66" y="129" width="12" height="65" fill="#6D4C41" opacity="0.6"/>
                
                <ellipse cx="72" cy="99" rx="51" ry="45" fill="#2D5016" opacity="0.8"/>
                <ellipse cx="72" cy="81" rx="45" ry="39" fill="#3A6B1F"/>
                <ellipse cx="72" cy="63" rx="39" ry="33" fill="#4A8C2A"/>
                <ellipse cx="72" cy="51" rx="30" ry="27" fill="#5FA836"/>
                <ellipse cx="81" cy="72" rx="15" ry="12" fill="#7BC142" opacity="0.7"/>
                <ellipse cx="57" cy="84" rx="12" ry="9" fill="#6FB037" opacity="0.6"/>
              </svg>
            </div>

            {/* Tree 3 with planter */}
            <div className="absolute bottom-32 right-[32%] z-15">
              <svg width="94" height="130" viewBox="0 0 156 216" className="drop-shadow-2xl">
                <ellipse cx="78" cy="206" rx="37" ry="8" fill="#8B4513" opacity="0.3"/>
                <path d="M47 201 Q44 206 47 211 L109 211 Q112 206 109 201 Z" fill="#CD853F"/>
                <path d="M50 201 Q48 206 50 211 L106 211 Q108 206 106 201 Z" fill="#DEB887"/>
                <ellipse cx="78" cy="201" rx="28" ry="6" fill="#8B7355"/>
                <ellipse cx="78" cy="198" rx="26" ry="5" fill="#654321"/>
                
                <path d="M69 138 L75 206 L81 206 L87 138 Q78 135 69 138" fill="#654321" />
                <rect x="72" y="138" width="12" height="68" fill="#7D5A3D" opacity="0.6"/>
                
                <ellipse cx="78" cy="108" rx="57" ry="51" fill="#2D5016" opacity="0.8"/>
                <ellipse cx="78" cy="87" rx="51" ry="45" fill="#3A6B1F"/>
                <ellipse cx="78" cy="69" rx="45" ry="39" fill="#4A8C2A"/>
                <ellipse cx="78" cy="57" rx="36" ry="33" fill="#5FA836"/>
                <ellipse cx="87" cy="78" rx="18" ry="15" fill="#7BC142" opacity="0.7"/>
                <ellipse cx="63" cy="93" rx="15" ry="12" fill="#6FB037" opacity="0.6"/>
              </svg>
            </div>

            {/* Tree 4 with planter */}
            <div className="absolute bottom-32 right-[20%] z-15">
              <svg width="83" height="119" viewBox="0 0 138 198" className="drop-shadow-2xl">
                <ellipse cx="69" cy="188" rx="31" ry="8" fill="#8B4513" opacity="0.3"/>
                <path d="M41 183 Q38 188 41 193 L97 193 Q100 188 97 183 Z" fill="#CD853F"/>
                <path d="M44 183 Q42 188 44 193 L94 193 Q96 188 94 183 Z" fill="#DEB887"/>
                <ellipse cx="69" cy="183" rx="25" ry="6" fill="#8B7355"/>
                <ellipse cx="69" cy="180" rx="23" ry="5" fill="#654321"/>
                
                <path d="M60 126 L66 188 L72 188 L78 126 Q69 123 60 126" fill="#5C4033" />
                <rect x="63" y="126" width="12" height="62" fill="#6D4C41" opacity="0.6"/>
                
                <ellipse cx="69" cy="96" rx="48" ry="42" fill="#2D5016" opacity="0.8"/>
                <ellipse cx="69" cy="78" rx="42" ry="36" fill="#3A6B1F"/>
                <ellipse cx="69" cy="60" rx="36" ry="30" fill="#4A8C2A"/>
                <ellipse cx="69" cy="48" rx="27" ry="24" fill="#5FA836"/>
                <ellipse cx="78" cy="69" rx="15" ry="12" fill="#7BC142" opacity="0.7"/>
                <ellipse cx="54" cy="81" rx="12" ry="9" fill="#6FB037" opacity="0.6"/>
              </svg>
            </div>

            {/* Modern VinFast EV Car 1 - Silver/White */}
            <div 
              className="absolute bottom-16 left-0 z-30"
              style={{
                animation: 'driveCar1 15s linear infinite',
              }}
            >
              <svg width="100" height="50" viewBox="0 0 100 50" className="drop-shadow-2xl">
                {/* Car shadow */}
                <ellipse cx="50" cy="48" rx="35" ry="3" fill="rgba(0,0,0,0.2)" />
                
                {/* Main body - sleek SUV design */}
                <path d="M15,30 L20,25 L35,20 L55,20 L70,25 L85,30 L85,35 L15,35 Z" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="0.5"/>
                
                {/* Roof/cabin */}
                <path d="M28,20 L35,15 L60,15 L68,20 Z" fill="#D1D5DB" stroke="#9CA3AF" strokeWidth="0.5"/>
                
                {/* Windows with reflection */}
                <rect x="32" y="16" width="12" height="7" rx="1" fill="#60A5FA" opacity="0.6"/>
                <rect x="50" y="16" width="14" height="7" rx="1" fill="#60A5FA" opacity="0.6"/>
                
                {/* Front lights */}
                <ellipse cx="80" cy="28" rx="3" ry="2" fill="#FCD34D"/>
                <ellipse cx="80" cy="32" rx="3" ry="2" fill="#FCA5A5"/>
                
                {/* V logo on front (VinFast style) */}
                <path d="M78,24 L80,27 L82,24" stroke="#DC2626" strokeWidth="1.5" fill="none"/>
                
                {/* Wheels - modern alloy design */}
                <circle cx="28" cy="37" r="6" fill="#1F2937"/>
                <circle cx="28" cy="37" r="4" fill="#374151"/>
                <circle cx="28" cy="37" r="2" fill="#6B7280"/>
                <circle cx="70" cy="37" r="6" fill="#1F2937"/>
                <circle cx="70" cy="37" r="4" fill="#374151"/>
                <circle cx="70" cy="37" r="2" fill="#6B7280"/>
                
                {/* Wheel spokes */}
                <line x1="26" y1="35" x2="30" y2="39" stroke="#9CA3AF" strokeWidth="0.5"/>
                <line x1="26" y1="39" x2="30" y2="35" stroke="#9CA3AF" strokeWidth="0.5"/>
                <line x1="68" y1="35" x2="72" y2="39" stroke="#9CA3AF" strokeWidth="0.5"/>
                <line x1="68" y1="39" x2="72" y2="35" stroke="#9CA3AF" strokeWidth="0.5"/>
                
                {/* EV Badge */}
                <circle cx="22" cy="28" r="4" fill="#10B981" opacity="0.9"/>
                <text x="22" y="30" fontSize="5" fill="white" textAnchor="middle" fontWeight="bold">⚡</text>
              </svg>
            </div>

            {/* Modern VinFast EV Car 2 - Blue */}
            <div 
              className="absolute bottom-16 left-0 z-30"
              style={{
                animation: 'driveCar2 20s linear infinite',
                animationDelay: '5s',
              }}
            >
              <svg width="100" height="50" viewBox="0 0 100 50" className="drop-shadow-2xl">
                <ellipse cx="50" cy="48" rx="35" ry="3" fill="rgba(0,0,0,0.2)" />
                <path d="M15,30 L20,25 L35,20 L55,20 L70,25 L85,30 L85,35 L15,35 Z" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="0.5"/>
                <path d="M28,20 L35,15 L60,15 L68,20 Z" fill="#2563EB" stroke="#1D4ED8" strokeWidth="0.5"/>
                <rect x="32" y="16" width="12" height="7" rx="1" fill="#93C5FD" opacity="0.7"/>
                <rect x="50" y="16" width="14" height="7" rx="1" fill="#93C5FD" opacity="0.7"/>
                <ellipse cx="80" cy="28" rx="3" ry="2" fill="#FCD34D"/>
                <ellipse cx="80" cy="32" rx="3" ry="2" fill="#FCA5A5"/>
                <path d="M78,24 L80,27 L82,24" stroke="#DC2626" strokeWidth="1.5" fill="none"/>
                <circle cx="28" cy="37" r="6" fill="#1F2937"/>
                <circle cx="28" cy="37" r="4" fill="#374151"/>
                <circle cx="28" cy="37" r="2" fill="#6B7280"/>
                <circle cx="70" cy="37" r="6" fill="#1F2937"/>
                <circle cx="70" cy="37" r="4" fill="#374151"/>
                <circle cx="70" cy="37" r="2" fill="#6B7280"/>
                <line x1="26" y1="35" x2="30" y2="39" stroke="#9CA3AF" strokeWidth="0.5"/>
                <line x1="26" y1="39" x2="30" y2="35" stroke="#9CA3AF" strokeWidth="0.5"/>
                <line x1="68" y1="35" x2="72" y2="39" stroke="#9CA3AF" strokeWidth="0.5"/>
                <line x1="68" y1="39" x2="72" y2="35" stroke="#9CA3AF" strokeWidth="0.5"/>
                <circle cx="22" cy="28" r="4" fill="#10B981" opacity="0.9"/>
                <text x="22" y="30" fontSize="5" fill="white" textAnchor="middle" fontWeight="bold">⚡</text>
              </svg>
            </div>

            {/* Modern VinFast EV Car 3 - Red */}
            <div 
              className="absolute bottom-16 left-0 z-30"
              style={{
                animation: 'driveCar3 18s linear infinite',
                animationDelay: '10s',
              }}
            >
              <svg width="100" height="50" viewBox="0 0 100 50" className="drop-shadow-2xl">
                <ellipse cx="50" cy="48" rx="35" ry="3" fill="rgba(0,0,0,0.2)" />
                <path d="M15,30 L20,25 L35,20 L55,20 L70,25 L85,30 L85,35 L15,35 Z" fill="#DC2626" stroke="#991B1B" strokeWidth="0.5"/>
                <path d="M28,20 L35,15 L60,15 L68,20 Z" fill="#B91C1C" stroke="#991B1B" strokeWidth="0.5"/>
                <rect x="32" y="16" width="12" height="7" rx="1" fill="#FCA5A5" opacity="0.6"/>
                <rect x="50" y="16" width="14" height="7" rx="1" fill="#FCA5A5" opacity="0.6"/>
                <ellipse cx="80" cy="28" rx="3" ry="2" fill="#FCD34D"/>
                <ellipse cx="80" cy="32" rx="3" ry="2" fill="#FCA5A5"/>
                <path d="M78,24 L80,27 L82,24" stroke="#FBBF24" strokeWidth="1.5" fill="none"/>
                <circle cx="28" cy="37" r="6" fill="#1F2937"/>
                <circle cx="28" cy="37" r="4" fill="#374151"/>
                <circle cx="28" cy="37" r="2" fill="#6B7280"/>
                <circle cx="70" cy="37" r="6" fill="#1F2937"/>
                <circle cx="70" cy="37" r="4" fill="#374151"/>
                <circle cx="70" cy="37" r="2" fill="#6B7280"/>
                <line x1="26" y1="35" x2="30" y2="39" stroke="#9CA3AF" strokeWidth="0.5"/>
                <line x1="26" y1="39" x2="30" y2="35" stroke="#9CA3AF" strokeWidth="0.5"/>
                <line x1="68" y1="35" x2="72" y2="39" stroke="#9CA3AF" strokeWidth="0.5"/>
                <line x1="68" y1="39" x2="72" y2="35" stroke="#9CA3AF" strokeWidth="0.5"/>
                <circle cx="22" cy="28" r="4" fill="#10B981" opacity="0.9"/>
                <text x="22" y="30" fontSize="5" fill="white" textAnchor="middle" fontWeight="bold">⚡</text>
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}



