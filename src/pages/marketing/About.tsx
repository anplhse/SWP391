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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 relative z-20">Giới thiệu</h1>
          
          {/* 3D Cloud behind title */}
          <div 
            className="absolute -top-8 -left-16 w-[400px] h-[180px] z-10 pointer-events-none"
            style={{
              animation: 'float3d 8s ease-in-out infinite',
            }}
          >
            <div className="relative w-full h-full">
              {/* Main cloud body with multiple layers for 3D effect */}
              <div className="absolute inset-0" style={{
                background: 'radial-gradient(ellipse at 30% 40%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 50%, transparent 100%)',
                filter: 'blur(20px)',
                transform: 'translateY(10px)',
              }}></div>
              
              <svg viewBox="0 0 400 180" className="w-full h-full drop-shadow-2xl" style={{
                filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.3)) drop-shadow(0 5px 15px rgba(0,0,0,0.2))',
              }}>
                {/* Bottom shadow layer */}
                <ellipse cx="200" cy="140" rx="150" ry="20" fill="rgba(0,0,0,0.15)" />
                
                {/* Cloud shape - multiple circles for fluffy effect */}
                <circle cx="100" cy="90" r="50" fill="rgba(255,255,255,0.95)" />
                <circle cx="150" cy="70" r="60" fill="rgba(255,255,255,0.98)" />
                <circle cx="200" cy="80" r="55" fill="white" />
                <circle cx="250" cy="75" r="58" fill="rgba(255,255,255,0.97)" />
                <circle cx="290" cy="95" r="45" fill="rgba(255,255,255,0.93)" />
                
                {/* Lighter highlights on top */}
                <circle cx="160" cy="60" r="35" fill="rgba(255,255,255,0.6)" opacity="0.8" />
                <circle cx="220" cy="65" r="30" fill="rgba(255,255,255,0.5)" opacity="0.7" />
                
                {/* Subtle shadow inside cloud */}
                <ellipse cx="200" cy="110" rx="120" ry="30" fill="rgba(200,200,220,0.2)" />
              </svg>
            </div>
          </div>
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

          <p>
            Nền tảng quản lý được thiết kế để chuẩn hóa và tối ưu hóa toàn bộ quy trình vận hành của một trung tâm dịch vụ xe điện hiện đại. 
            Chúng tôi mang đến một giải pháp giúp bạn loại bỏ mọi phiền phức trong vận hành và tập trung vào điều quan trọng nhất: 
            phát triển kinh doanh và chăm sóc khách hàng.
          </p>
          <p>Với EV Service Center, đây là những gì bạn sẽ thấy mỗi ngày: </p>
          <p>
            Trải nghiệm tiếp nhận xe chuyên nghiệp,nơi bạn chỉ cần nhập số VIN và mọi thông tin xe cùng lịch sử bảo dưỡng của khách hàng ngay lập tức xuất hiện. 
            Lịch hẹn của bạn sẽ được lấp đầy một cách tự động; hệ thống sẽ thay bạn gửi thông báo nhắc lịch bảo dưỡng định kỳ 
            (mỗi 10.000 km hoặc 6 tháng), đảm bảo khách hàng luôn quay lại. Khách hàng của bạn sẽ yêu thích sự tiện lợi khi có thể 
            tự đặt lịch hẹn trực tuyến, và tuyệt vời nhất, họ có thể theo dõi trạng thái xe của mình theo thời gian thực mà không cần 
            gọi điện hỏi thăm.
          </p>
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

            {/* VinFast Service Center - Modern Design */}
            <div className="absolute bottom-32 left-[8%] z-20">
              <div className="relative">
                {/* Building with red accent like VinFast */}
                <div className="relative">
                  {/* Main building */}
                  <div className="w-40 h-32 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-t-2xl shadow-2xl relative overflow-hidden">
                    {/* Red VinFast stripe */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm tracking-wider">VINFAST SERVICE</span>
                    </div>
                    {/* Glass windows effect */}
                    <div className="absolute top-10 left-2 right-2 bottom-2 bg-gradient-to-b from-blue-200/40 to-blue-300/20 rounded backdrop-blur-sm">
                      <div className="grid grid-cols-4 gap-1 p-2">
                        <div className="h-4 bg-blue-100/60 rounded shadow-inner"></div>
                        <div className="h-4 bg-blue-100/60 rounded shadow-inner"></div>
                        <div className="h-4 bg-blue-100/60 rounded shadow-inner"></div>
                        <div className="h-4 bg-blue-100/60 rounded shadow-inner"></div>
                        <div className="h-4 bg-blue-100/60 rounded shadow-inner"></div>
                        <div className="h-4 bg-blue-100/60 rounded shadow-inner"></div>
                        <div className="h-4 bg-blue-100/60 rounded shadow-inner"></div>
                        <div className="h-4 bg-blue-100/60 rounded shadow-inner"></div>
                      </div>
                    </div>
                    {/* Garage door */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-b from-gray-900 to-black rounded-t-lg border-2 border-gray-600">
                      <div className="grid grid-rows-4 gap-1 p-1 h-full">
                        <div className="bg-gray-700/50 rounded-sm"></div>
                        <div className="bg-gray-700/50 rounded-sm"></div>
                        <div className="bg-gray-700/50 rounded-sm"></div>
                        <div className="bg-gray-700/50 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                  {/* Sign board */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-xl border-2 border-red-400 whitespace-nowrap">
                    🔧 XƯỞNG DỊCH VỤ
                  </div>
                </div>
              </div>
            </div>

            {/* Modern Charging Station 1 - Blue/White theme */}
            <div className="absolute bottom-32 left-[42%] z-20">
              <div className="relative">
                {/* Charging pole */}
                <div className="w-12 h-28 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-2xl shadow-2xl relative overflow-hidden border-2 border-blue-400">
                  {/* Screen display */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-cyan-300 to-blue-200 rounded-lg flex items-center justify-center shadow-inner">
                    <div className="text-xs font-bold text-blue-900">⚡</div>
                  </div>
                  {/* Charging cable */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2 h-8 bg-gray-800 rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-3 bg-gray-700 rounded-t"></div>
                  {/* LED indicators */}
                  <div className="absolute top-14 left-1/2 -translate-x-1/2 flex gap-1">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
                {/* Sign */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap border border-blue-400">
                  ⚡ TRẠM SẠC
                </div>
              </div>
            </div>

            {/* Modern Charging Station 2 - Green theme */}
            <div className="absolute bottom-32 right-[22%] z-20">
              <div className="relative">
                <div className="w-12 h-28 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 rounded-2xl shadow-2xl relative overflow-hidden border-2 border-emerald-400">
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-green-300 to-emerald-200 rounded-lg flex items-center justify-center shadow-inner">
                    <div className="text-xs font-bold text-green-900">⚡</div>
                  </div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2 h-8 bg-gray-800 rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-3 bg-gray-700 rounded-t"></div>
                  <div className="absolute top-14 left-1/2 -translate-x-1/2 flex gap-1">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap border border-emerald-400">
                  ⚡ TRẠM SẠC
                </div>
              </div>
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



