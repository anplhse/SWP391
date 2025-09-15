import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, EyeOff, User, Wrench, Shield } from 'lucide-react';

interface LoginFormProps {
  onLogin: (email: string, password: string, role: string, userType: 'customer' | 'service') => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'customer' | 'service'>('customer');
  const [role, setRole] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalRole = userType === 'customer' ? 'customer' : role;
    onLogin(email, password, finalRole, userType);
  };

  const serviceRoles = [
    { value: 'staff', label: 'Nhân viên', icon: User },
    { value: 'technician', label: 'Kỹ thuật viên', icon: Wrench },
    { value: 'admin', label: 'Quản trị viên', icon: Shield }
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* User Type Selection */}
      <div className="grid grid-cols-2 gap-4">
        <Card
          className={`cursor-pointer transition-all ${
            userType === 'customer'
              ? 'bg-white/20 border-white/40 ring-2 ring-white/50'
              : 'bg-white/10 border-white/20 hover:bg-white/15'
          }`}
          onClick={() => {
            setUserType('customer');
            setRole('');
          }}
        >
          <CardContent className="p-4 text-center">
            <User className="w-8 h-8 text-white mx-auto mb-2" />
            <p className="text-white font-medium">Khách hàng</p>
          </CardContent>
        </Card>
        <Card
          className={`cursor-pointer transition-all ${
            userType === 'service'
              ? 'bg-white/20 border-white/40 ring-2 ring-white/50'
              : 'bg-white/10 border-white/20 hover:bg-white/15'
          }`}
          onClick={() => setUserType('service')}
        >
          <CardContent className="p-4 text-center">
            <Wrench className="w-8 h-8 text-white mx-auto mb-2" />
            <p className="text-white font-medium">Trung tâm</p>
          </CardContent>
        </Card>
      </div>

      {/* Service Role Selection (only show if service is selected) */}
      {userType === 'service' && (
        <div className="space-y-2">
          <Label className="text-white/90">Vai trò</Label>
          <Select value={role} onValueChange={setRole}>
            <SelectTrigger className="bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Chọn vai trò của bạn" />
            </SelectTrigger>
            <SelectContent>
              {serviceRoles.map((serviceRole) => {
                const Icon = serviceRole.icon;
                return (
                  <SelectItem key={serviceRole.value} value={serviceRole.value}>
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {serviceRole.label}
                    </div>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-white/90">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          placeholder="Nhập email của bạn"
          required
        />
      </div>

      {/* Password */}
      <div className="space-y-2">
        <Label htmlFor="password" className="text-white/90">Mật khẩu</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 pr-10"
            placeholder="Nhập mật khẩu"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="electric"
        className="w-full"
        disabled={!email || !password || (userType === 'service' && !role)}
      >
        Đăng nhập
      </Button>

      {/* Demo Accounts */}
      <div className="text-center">
        <p className="text-white/70 text-sm mb-2">Tài khoản demo:</p>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="text-white/60">
            <p>Khách hàng: customer@demo.com</p>
            <p>Staff: staff@demo.com</p>
          </div>
          <div className="text-white/60">
            <p>Tech: tech@demo.com</p>
            <p>Admin: admin@demo.com</p>
          </div>
        </div>
        <p className="text-white/60 text-xs mt-1">Mật khẩu: demo123</p>
      </div>
    </form>
  );
}