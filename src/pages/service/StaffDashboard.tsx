import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Users, 
  Calendar, 
  MessageSquare, 
  Car, 
  Clock,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  Plus
} from 'lucide-react';

export default function StaffDashboard() {
  // Get user from localStorage (demo)
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  // Mock data for staff
  const todayAppointments = [
    {
      id: 1,
      customer: 'Nguyễn Văn A',
      phone: '0901234567',
      vehicle: 'VinFast VF8 - 30A-123.45',
      service: 'Bảo dưỡng định kỳ',
      time: '09:00',
      status: 'confirmed',
      technician: 'Trần Văn B'
    },
    {
      id: 2,
      customer: 'Lê Thị C',
      phone: '0912345678',
      vehicle: 'Tesla Model 3 - 29B-567.89',
      service: 'Kiểm tra pin',
      time: '14:00',
      status: 'waiting',
      technician: 'Chưa phân công'
    }
  ];

  const recentCustomers = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@email.com',
      phone: '0901234567',
      lastVisit: '2025-09-10',
      totalServices: 5
    },
    {
      id: 2,
      name: 'Lê Thị C',
      email: 'lethic@email.com',
      phone: '0912345678',
      lastVisit: '2025-09-08',
      totalServices: 2
    }
  ];

  const pendingRequests = [
    {
      id: 1,
      customer: 'Phạm Văn D',
      service: 'Bảo dưỡng khẩn cấp',
      requestTime: '2025-09-15 10:30',
      priority: 'high'
    },
    {
      id: 2,
      customer: 'Hoàng Thị E',
      service: 'Kiểm tra tổng quát',
      requestTime: '2025-09-15 11:15',
      priority: 'normal'
    }
  ];

  return (
    <DashboardLayout title="Dashboard Nhân Viên" user={user}>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-primary rounded-2xl p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Chào buổi sáng!</h2>
          <p className="text-white/80">Hôm nay bạn có {todayAppointments.length} cuộc hẹn và {pendingRequests.length} yêu cầu đang chờ xử lý.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{todayAppointments.length}</p>
                  <p className="text-sm text-muted-foreground">Hẹn hôm nay</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{recentCustomers.length}</p>
                  <p className="text-sm text-muted-foreground">Khách hàng</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-warning/10 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{pendingRequests.length}</p>
                  <p className="text-sm text-muted-foreground">Yêu cầu chờ</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-destructive/10 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-muted-foreground">Tin nhắn mới</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Appointments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Lịch hẹn hôm nay
              </CardTitle>
              <CardDescription>
                Quản lý các cuộc hẹn trong ngày
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {todayAppointments.map((appointment) => (
                <div key={appointment.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">{appointment.time}</span>
                    </div>
                    <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}>
                      {appointment.status === 'confirmed' ? 'Đã xác nhận' : 'Chờ xác nhận'}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold">{appointment.customer}</h3>
                    <p className="text-sm text-muted-foreground">{appointment.service}</p>
                    <p className="text-sm text-muted-foreground">{appointment.vehicle}</p>
                    <p className="text-sm">Kỹ thuật viên: <span className="font-medium">{appointment.technician}</span></p>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Phone className="w-4 h-4 mr-2" />
                      Gọi
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Nhắn tin
                    </Button>
                    {appointment.status === 'waiting' && (
                      <Button size="sm" variant="electric">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Xác nhận
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Pending Requests */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Yêu cầu đang chờ
              </CardTitle>
              <CardDescription>
                Các yêu cầu dịch vụ mới từ khách hàng
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingRequests.map((request) => (
                <div key={request.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{request.customer}</h3>
                    <Badge variant={request.priority === 'high' ? 'destructive' : 'secondary'}>
                      {request.priority === 'high' ? 'Khẩn cấp' : 'Thường'}
                    </Badge>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{request.service}</p>
                    <p className="text-xs text-muted-foreground">
                      Yêu cầu lúc: {new Date(request.requestTime).toLocaleString('vi-VN')}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="electric">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Chấp nhận
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Liên hệ
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Customers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Khách hàng gần đây
            </CardTitle>
            <CardDescription>
              Danh sách khách hàng đã sử dụng dịch vụ
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCustomers.map((customer) => (
                <div key={customer.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={`/avatars/${customer.id}.png`} />
                      <AvatarFallback className="bg-gradient-primary text-white">
                        {customer.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{customer.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {customer.email}
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {customer.phone}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{customer.totalServices} dịch vụ</p>
                    <p className="text-sm text-muted-foreground">
                      Lần cuối: {new Date(customer.lastVisit).toLocaleDateString('vi-VN')}
                    </p>
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