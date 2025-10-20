import { BookingForm } from '@/components/BookingForm';

// Mock services data - sẽ được thay thế bằng API call thực tế
const services: Service[] = [
  {
    id: '1',
    name: 'Bảo dưỡng định kỳ',
    description: 'Thay dầu, lọc dầu, kiểm tra hệ thống',
    price: 500000,
    duration: 120,
    compatibleVehicles: ['VF5', 'VF8', 'VF9', 'VFE34'],
    category: 'maintenance'
  },
  {
    id: '2',
    name: 'Kiểm tra phanh',
    description: 'Kiểm tra hệ thống phanh, thay thế nếu cần',
    price: 300000,
    duration: 60,
    compatibleVehicles: ['VF5', 'VF8', 'VF9', 'VFE34'],
    category: 'inspection'
  },
  {
    id: '3',
    name: 'Vệ sinh nội thất',
    description: 'Vệ sinh toàn bộ nội thất xe',
    price: 200000,
    duration: 90,
    compatibleVehicles: ['VF5', 'VF8', 'VF9', 'VFE34'],
    category: 'cleaning'
  },
  {
    id: '4',
    name: 'Kiểm tra điện',
    description: 'Kiểm tra hệ thống điện, ắc quy',
    price: 250000,
    duration: 60,
    compatibleVehicles: ['VF5', 'VF8', 'VF9', 'VFE34'],
    category: 'inspection'
  },
  {
    id: '5',
    name: 'Thay lốp',
    description: 'Thay lốp mới, cân bằng bánh xe',
    price: 800000,
    duration: 60,
    compatibleVehicles: ['VF5', 'VF8', 'VF9', 'VFE34'],
    category: 'repair'
  },
  {
    id: '6',
    name: 'Bảo dưỡng điều hòa',
    description: 'Vệ sinh, bảo dưỡng hệ thống điều hòa',
    price: 400000,
    duration: 120,
    compatibleVehicles: ['VF5', 'VF8', 'VF9', 'VFE34'],
    category: 'maintenance'
  },
  {
    id: '7',
    name: 'Kiểm tra động cơ',
    description: 'Kiểm tra toàn diện động cơ',
    price: 600000,
    duration: 180,
    compatibleVehicles: ['VF8', 'VF9', 'VFE34'],
    category: 'inspection'
  },
  {
    id: '8',
    name: 'Vệ sinh ngoại thất',
    description: 'Rửa xe, đánh bóng, bảo dưỡng sơn',
    price: 350000,
    duration: 120,
    compatibleVehicles: ['VF5', 'VF8', 'VF9', 'VFE34'],
    category: 'cleaning'
  },
  {
    id: '9',
    name: 'Thay dầu hộp số',
    description: 'Thay dầu hộp số tự động',
    price: 450000,
    duration: 90,
    compatibleVehicles: ['VF8', 'VF9', 'VFE34'],
    category: 'maintenance'
  },
  {
    id: '10',
    name: 'Kiểm tra hệ thống treo',
    description: 'Kiểm tra giảm xóc, thanh chống',
    price: 300000,
    duration: 90,
    compatibleVehicles: ['VF5', 'VF8', 'VF9', 'VFE34'],
    category: 'inspection'
  },
  {
    id: '11',
    name: 'Bảo dưỡng phanh',
    description: 'Thay má phanh, kiểm tra dầu phanh',
    price: 500000,
    duration: 120,
    compatibleVehicles: ['VF5', 'VF8', 'VF9', 'VFE34'],
    category: 'maintenance'
  },
  {
    id: '12',
    name: 'Kiểm tra an toàn',
    description: 'Kiểm tra toàn diện an toàn xe',
    price: 400000,
    duration: 150,
    compatibleVehicles: ['VF5', 'VF8', 'VF9', 'VFE34'],
    category: 'inspection'
  }
];

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  compatibleVehicles: string[];
  category: string;
}

export default function BookingPage() {
  return <BookingForm services={services} />;
}