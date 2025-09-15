import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Car, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Wrench, 
  CreditCard, 
  Bell,
  Plus,
  History
} from 'lucide-react';

export default function CustomerDashboard() {
  // Get user from localStorage (demo)
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  // Mock data
  const vehicles = [
    {
      id: 1,
      name: 'VinFast VF8',
      plate: '30A-123.45',
      model: 'VF8 Plus',
      battery: 85,
      nextService: '2025-10-15',
      status: 'healthy'
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      service: 'Bảo dưỡng định kỳ',
      date: '2025-10-15',
      time: '09:00',
      center: 'Trung tâm bảo dưỡng Hà Nội',
      status: 'confirmed'
    }
  ];

  const recentServices = [
    {
      id: 1,
      service: 'Kiểm tra tổng quát',
      date: '2025-08-20',
      cost: '2,500,000 VND',
      status: 'completed'
    },
    {
      id: 2,
      service: 'Thay lốp xe',
      date: '2025-07-10',
      cost: '1,800,000 VND',
      status: 'completed'
    }
  ];

  return (
    <DashboardLayout title="Dashboard Khách Hàng" user={user}>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-primary rounded-2xl p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Chào mừng trở lại!</h2>
          <p className="text-white/80">Quản lý xe điện và dịch vụ bảo dưỡng của bạn một cách dễ dàng.</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="electric" className="h-20 flex-col space-y-2">
            <Plus className="w-6 h-6" />
            <span>Đặt lịch bảo dưỡng</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col space-y-2">
            <Car className="w-6 h-6" />
            <span>Quản lý xe</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col space-y-2">
            <History className="w-6 h-6" />
            <span>Lịch sử dịch vụ</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Vehicle Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="w-5 h-5" />
                Xe của tôi
              </CardTitle>
              <CardDescription>
                Tình trạng và thông tin xe điện
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{vehicle.name}</h3>
                      <p className="text-sm text-muted-foreground">{vehicle.plate} • {vehicle.model}</p>
                    </div>
                    <Badge variant={vehicle.status === 'healthy' ? 'default' : 'destructive'}>
                      {vehicle.status === 'healthy' ? 'Tốt' : 'Cần kiểm tra'}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Pin:</span>
                      <span className="font-medium">{vehicle.battery}%</span>
                    </div>
                    <Progress value={vehicle.battery} className="h-2" />
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    Bảo dưỡng tiếp theo: {new Date(vehicle.nextService).toLocaleDateString('vi-VN')}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Appointments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Lịch hẹn sắp tới
              </CardTitle>
              <CardDescription>
                Các cuộc hẹn bảo dưỡng đã đặt
              </CardDescription>
            </CardHeader>
            <CardContent>
              {upcomingAppointments.length > 0 ? (
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <h3 className="font-semibold">{appointment.service}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {new Date(appointment.date).toLocaleDateString('vi-VN')} - {appointment.time}
                          </div>
                          <p className="text-sm text-muted-foreground">{appointment.center}</p>
                        </div>
                        <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}>
                          {appointment.status === 'confirmed' ? 'Đã xác nhận' : 'Chờ xác nhận'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-muted-foreground py-8">
                  <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Chưa có lịch hẹn nào</p>
                  <Button variant="outline" className="mt-4">
                    <Plus className="w-4 h-4 mr-2" />
                    Đặt lịch ngay
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Recent Services */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="w-5 h-5" />
              Dịch vụ gần đây
            </CardTitle>
            <CardDescription>
              Lịch sử các dịch vụ đã sử dụng
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentServices.map((service) => (
                <div key={service.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                  <div className="space-y-1">
                    <h3 className="font-medium">{service.service}</h3>
                    <p className="text-sm text-muted-foreground">
                      {new Date(service.date).toLocaleDateString('vi-VN')}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <Badge variant="outline">Hoàn thành</Badge>
                    </div>
                    <p className="text-sm font-medium">{service.cost}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}