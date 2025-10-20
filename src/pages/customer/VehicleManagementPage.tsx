import { VehicleTable } from '@/components/VehicleTable';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { getRegisteredVehicles, setRegisteredVehicles, type RegisteredVehicle } from '@/lib/sessionStore';
import {
  Plus
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Vehicle {
  id: string;
  name: string;
  plate: string;
  model: string;
  year: number;
  battery: number;
  nextService: string;
  status: 'healthy' | 'warning' | 'critical';
  mileage: number;
  color: string;
  vin: string;
  purchaseDate: string;
}

export default function VehicleManagementPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const user = { email: 'customer@example.com', role: 'customer', userType: 'customer' };

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);

  // Chuyển đổi từ RegisteredVehicle sang Vehicle
  const convertToVehicle = (registered: RegisteredVehicle): Vehicle => ({
    id: registered.id,
    name: registered.name,
    plate: registered.plate || 'Chưa có',
    model: registered.name,
    year: parseInt(registered.year || '2024'),
    battery: Math.floor(Math.random() * 30) + 70, // Random battery 70-100%
    nextService: new Date(Date.now() + Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    status: Math.random() > 0.7 ? 'warning' : 'healthy' as const,
    mileage: Math.floor(Math.random() * 20000) + 5000, // Random mileage 5k-25k
    color: ['Trắng', 'Đen', 'Xám', 'Xanh'][Math.floor(Math.random() * 4)],
    vin: registered.vin,
    purchaseDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  });

  const [vehicles, setVehicles] = useState<Vehicle[]>(() => {
    const registeredVehicles = getRegisteredVehicles();
    return registeredVehicles.map(convertToVehicle);
  });

  const [newVehicle, setNewVehicle] = useState({
    name: '',
    plate: '',
    model: '',
    year: new Date().getFullYear(),
    battery: 100,
    nextService: '',
    status: 'healthy' as const,
    mileage: 0,
    color: '',
    vin: '',
    purchaseDate: ''
  });

  const vehicleModels = [
    { id: 'vf8', name: 'VinFast VF8', type: 'SUV' },
    { id: 'vf9', name: 'VinFast VF9', type: 'SUV' },
    { id: 'vfe34', name: 'VinFast VFE34', type: 'Sedan' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'healthy':
        return <Badge variant="default" className="bg-green-100 text-green-800">Bình thường</Badge>;
      case 'warning':
        return <Badge variant="destructive">Cần bảo dưỡng</Badge>;
      case 'critical':
        return <Badge variant="destructive">Khẩn cấp</Badge>;
      default:
        return null;
    }
  };

  const handleAddVehicle = () => {
    if (!newVehicle.name || !newVehicle.plate || !newVehicle.model) {
      toast({
        title: "Thông tin chưa đầy đủ",
        description: "Vui lòng điền đầy đủ thông tin xe",
        variant: "destructive",
      });
      return;
    }

    const vehicle: Vehicle = {
      id: Date.now().toString(),
      ...newVehicle,
      battery: Math.floor(Math.random() * 30) + 70,
      mileage: Math.floor(Math.random() * 20000) + 5000,
      nextService: new Date(Date.now() + Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      status: 'healthy'
    };

    setVehicles([...vehicles, vehicle]);

    // Thêm vào sessionStore
    const registeredVehicle: RegisteredVehicle = {
      id: vehicle.id,
      name: vehicle.name,
      plate: vehicle.plate,
      year: vehicle.year.toString(),
      vin: vehicle.vin,
      type: 'electric'
    };

    const currentVehicles = getRegisteredVehicles();
    setRegisteredVehicles([...currentVehicles, registeredVehicle]);

    setNewVehicle({
      name: '',
      plate: '',
      model: '',
      year: new Date().getFullYear(),
      battery: 100,
      nextService: '',
      status: 'healthy',
      mileage: 0,
      color: '',
      vin: '',
      purchaseDate: ''
    });

    setIsAddDialogOpen(false);

    toast({
      title: "Thêm xe thành công!",
      description: `Đã thêm ${vehicle.name} vào danh sách`,
    });
  };

  const handleEditVehicle = (vehicle: Vehicle) => {
    setEditingVehicle(vehicle);
    setIsEditDialogOpen(true);
  };

  const handleUpdateVehicle = () => {
    if (!editingVehicle) return;

    setVehicles(vehicles.map(v =>
      v.id === editingVehicle.id ? editingVehicle : v
    ));

    // Cập nhật sessionStore
    const currentVehicles = getRegisteredVehicles();
    const updatedVehicles = currentVehicles.map(v =>
      v.id === editingVehicle.id
        ? {
          id: editingVehicle.id,
          name: editingVehicle.name,
          plate: editingVehicle.plate,
          year: editingVehicle.year.toString(),
          vin: editingVehicle.vin,
          type: 'electric'
        }
        : v
    );
    setRegisteredVehicles(updatedVehicles);

    setIsEditDialogOpen(false);
    setEditingVehicle(null);

    toast({
      title: "Cập nhật thành công!",
      description: `Đã cập nhật thông tin ${editingVehicle.name}`,
    });
  };

  const handleDeleteVehicle = (vehicleId: string) => {
    const vehicle = vehicles.find(v => v.id === vehicleId);
    setVehicles(vehicles.filter(v => v.id !== vehicleId));

    // Xóa khỏi sessionStore
    const currentVehicles = getRegisteredVehicles();
    setRegisteredVehicles(currentVehicles.filter(v => v.id !== vehicleId));

    toast({
      title: "Xóa xe thành công!",
      description: `Đã xóa ${vehicle?.name} khỏi danh sách`,
    });
  };

  const handleViewVehicle = (vehicleId: string) => {
    navigate(`/customer/vehicle/${vehicleId}`);
  };

  const handleBookService = (vehicle: Vehicle) => {
    navigate('/customer/booking', {
      state: {
        preselectVin: vehicle.vin,
        preselectVehicle: {
          vin: vehicle.vin,
          brand: vehicle.name.split(' ')[0], // VinFast
          model: vehicle.name.split(' ').slice(1).join(' '), // VF8, VF9, etc.
          year: vehicle.year.toString(),
          plate: vehicle.plate
        }
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Quản lý xe</h1>
          <p className="text-muted-foreground">Quản lý thông tin xe của bạn</p>
        </div>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Thêm xe mới
        </Button>
      </div>

      {/* Vehicle Table */}
      <VehicleTable
        vehicles={vehicles}
        onEdit={handleEditVehicle}
        onDelete={handleDeleteVehicle}
        onView={handleViewVehicle}
        onBook={handleBookService}
        searchQuery={searchTerm}
        onSearchChange={setSearchTerm}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
      />

      {/* Add Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Thêm xe mới</DialogTitle>
            <DialogDescription>
              Nhập thông tin chi tiết về xe của bạn
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Tên xe</Label>
              <Input
                id="name"
                value={newVehicle.name}
                onChange={(e) => setNewVehicle({ ...newVehicle, name: e.target.value })}
                placeholder="VD: VinFast VF8"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="plate">Biển số</Label>
              <Input
                id="plate"
                value={newVehicle.plate}
                onChange={(e) => setNewVehicle({ ...newVehicle, plate: e.target.value })}
                placeholder="VD: 30A-12345"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="model">Model</Label>
              <Select value={newVehicle.model} onValueChange={(value) => setNewVehicle({ ...newVehicle, model: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn model" />
                </SelectTrigger>
                <SelectContent>
                  {vehicleModels.map((model) => (
                    <SelectItem key={model.id} value={model.name}>
                      {model.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="year">Năm sản xuất</Label>
              <Input
                id="year"
                type="number"
                value={newVehicle.year}
                onChange={(e) => setNewVehicle({ ...newVehicle, year: parseInt(e.target.value) })}
                min="2020"
                max="2025"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="color">Màu sắc</Label>
              <Input
                id="color"
                value={newVehicle.color}
                onChange={(e) => setNewVehicle({ ...newVehicle, color: e.target.value })}
                placeholder="VD: Trắng"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vin">VIN</Label>
              <Input
                id="vin"
                value={newVehicle.vin}
                onChange={(e) => setNewVehicle({ ...newVehicle, vin: e.target.value })}
                placeholder="Số VIN của xe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="purchaseDate">Ngày mua</Label>
              <Input
                id="purchaseDate"
                type="date"
                value={newVehicle.purchaseDate}
                onChange={(e) => setNewVehicle({ ...newVehicle, purchaseDate: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Hủy
            </Button>
            <Button onClick={handleAddVehicle}>
              Thêm xe
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Chỉnh sửa thông tin xe</DialogTitle>
            <DialogDescription>
              Cập nhật thông tin chi tiết về xe của bạn
            </DialogDescription>
          </DialogHeader>
          {editingVehicle && (
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="edit-name">Tên xe</Label>
                <Input
                  id="edit-name"
                  value={editingVehicle.name}
                  onChange={(e) => setEditingVehicle({ ...editingVehicle, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-plate">Biển số</Label>
                <Input
                  id="edit-plate"
                  value={editingVehicle.plate}
                  onChange={(e) => setEditingVehicle({ ...editingVehicle, plate: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-model">Model</Label>
                <Input
                  id="edit-model"
                  value={editingVehicle.model}
                  onChange={(e) => setEditingVehicle({ ...editingVehicle, model: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-year">Năm sản xuất</Label>
                <Input
                  id="edit-year"
                  type="number"
                  value={editingVehicle.year}
                  onChange={(e) => setEditingVehicle({ ...editingVehicle, year: parseInt(e.target.value) })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-color">Màu sắc</Label>
                <Input
                  id="edit-color"
                  value={editingVehicle.color}
                  onChange={(e) => setEditingVehicle({ ...editingVehicle, color: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-vin">VIN</Label>
                <Input
                  id="edit-vin"
                  value={editingVehicle.vin}
                  onChange={(e) => setEditingVehicle({ ...editingVehicle, vin: e.target.value })}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Hủy
            </Button>
            <Button onClick={handleUpdateVehicle}>
              Cập nhật
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}