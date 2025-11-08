import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Contact() {
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
      `}</style>

      {/* Header */}
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

      <main className="mx-auto max-w-6xl px-4 py-14 relative z-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900"
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          CHÚNG TÔI CÓ THỂ GIÚP GÌ CHO BẠN?
        </h1>
        <p className="text-center text-gray-700 mb-12 text-lg">
          Luôn sẵn sàng tiếp nhận các yêu cầu từ trợ giúp và giải đáp mọi thắc mắc từ Khách hàng.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Contact Methods */}
          <div className="space-y-4">
            <div className="bg-card border border-gray-200 rounded-2xl p-6 shadow-xl">
              <p className="text-gray-700 font-medium mb-6">
                Những câu hỏi vẫn chưa giải đáp được thắc mắc của bạn?
              </p>
              <h3 className="text-xl font-bold mb-6 text-gray-900">LIÊN HỆ NGAY VỚI CHÚNG TÔI!</h3>
              
              {/* Zalo Button */}
              <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold py-4 px-6 rounded-xl mb-4 flex items-center justify-between shadow-lg hover:shadow-xl transition-all duration-300">
                <span>Nhắn tin qua Zalo</span>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">Z</span>
                </div>
              </button>

              {/* Hotline Button */}
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl mb-4 flex items-center justify-between shadow-lg hover:shadow-xl transition-all duration-300">
                <div>
                  <div>Gọi ngay hotline</div>
                  <div className="text-sm">0396727212</div>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-600">📞</span>
                </div>
              </button>

              {/* Messenger Button */}
              <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between">
                <span>Nhắn tin qua Messenger</span>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-purple-600">💬</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl p-8 shadow-2xl">
            <form className="space-y-4">
              <div>
                <Input 
                  placeholder="Họ và tên của bạn" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20"
                />
              </div>
              <div>
                <Input 
                  placeholder="Email của bạn" 
                  type="email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20"
                />
              </div>
              <div>
                <Input 
                  placeholder="Số điện thoại của bạn" 
                  type="tel"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20"
                />
              </div>
              <div>
                <select className="w-full bg-white/10 border border-white/20 text-gray-300 rounded-md px-3 py-2 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">—Vui lòng chọn—</option>
                  <option value="service">Dịch vụ sửa chữa</option>
                  <option value="maintenance">Bảo dưỡng định kỳ</option>
                  <option value="parts">Linh kiện phụ tùng</option>
                  <option value="consultation">Tư vấn</option>
                  <option value="other">Khác</option>
                </select>
              </div>
              <div>
                <Textarea 
                  placeholder="Yêu cầu của bạn (Nếu có)..." 
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20 resize-none"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                GỬI NGAY CHO CHÚNG TÔI
              </Button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900"
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            CÂU HỎI THƯỜNG GẶP
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold text-gray-900">
                  Làm thế nào để đặt lịch bảo dưỡng xe điện?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Bạn có thể đặt lịch trực tuyến qua website, gọi hotline, hoặc nhắn tin qua Zalo/Messenger. 
                  Hệ thống sẽ tự động nhắc lịch bảo dưỡng định kỳ mỗi 10.000 km hoặc 6 tháng.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold text-gray-900">
                  Trung tâm có kiểm tra sức khỏe pin (SoH) không?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Có, chúng tôi cung cấp dịch vụ kiểm tra sức khỏe pin chuyên sâu với thiết bị hiện đại. 
                  Bạn sẽ nhận được báo cáo chi tiết về tình trạng pin và khuyến nghị bảo dưỡng.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold text-gray-900">
                  Thời gian bảo dưỡng một xe điện mất bao lâu?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Bảo dưỡng định kỳ thường mất từ 1-2 giờ. Đối với sửa chữa phức tạp hơn, 
                  chúng tôi sẽ thông báo thời gian cụ thể và bạn có thể theo dõi tiến độ theo thời gian thực qua app.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-semibold text-gray-900">
                  Có cần đặt cọc khi đặt lịch không?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Không cần đặt cọc trước. Bạn chỉ thanh toán sau khi hoàn tất dịch vụ và hài lòng với chất lượng.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-semibold text-gray-900">
                  Trung tâm có cung cấp xe thay thế trong thời gian sửa chữa không?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Có, đối với các trường hợp sửa chữa lâu (trên 1 ngày), chúng tôi cung cấp dịch vụ xe thay thế 
                  để bạn không bị gián đoạn công việc và sinh hoạt.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  );
}


