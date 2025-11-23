import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useDebounce } from '@/hooks/useDebounce';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, Edit, Eye, Package, Search, X, XCircle } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface Appointment {
  id: string;
  customerName?: string;
  services: Array<{
    id: string;
    name: string;
    description: string;
    price: number;
    duration: string;
  }>;
  vehicle: {
    id: string;
    name: string;
    plate: string;
    model: string;
    year?: string;
  };
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'paid' | 'in_progress' | 'completed' | 'cancelled' | 'rejected';
  center: string;
  technician?: string;
  notes?: string;
  createdAt: string;
  estimatedDuration: string;
  paymentStatus?: string;
  totalAmount?: number;
}

interface AppointmentTableProps {
  appointments: Appointment[];
  onEdit: (appointment: Appointment) => void;
  onConfirm: (id: string) => void;
  onCancel: (id: string) => void;
  onViewDetails?: (id: string) => void;
  onCheckParts?: (id: string) => void;
  partsCheckResult?: Record<string, boolean>;
  isLoadingParts?: Record<string, boolean>;
  showActions?: boolean;
}

// Filter form schema
const filterSchema = z.object({
  search: z.string().optional(),
  status: z.enum(['all', 'pending', 'confirmed', 'paid', 'in_progress', 'completed', 'cancelled'])
});
type FilterForm = z.infer<typeof filterSchema>;

export function AppointmentTable({
  appointments,
  onEdit,
  onConfirm,
  onCancel,
  onViewDetails,
  onCheckParts,
  partsCheckResult = {},
  isLoadingParts = {},
  showActions = true
}: AppointmentTableProps) {
  const filterForm = useForm<FilterForm>({
    resolver: zodResolver(filterSchema),
    defaultValues: { search: '', status: 'all' }
  });

  const watchFilters = filterForm.watch();
  const debouncedSearch = useDebounce(watchFilters.search || '', 300);

  const filteredAppointments = useMemo(() => {
    return appointments.filter(appointment => {
      const term = debouncedSearch.toLowerCase().trim();
      const matchesSearch = !term ||
        appointment.id.toLowerCase().includes(term) ||
        appointment.date.toLowerCase().includes(term) ||
        appointment.time.toLowerCase().includes(term) ||
        (appointment.customerName && appointment.customerName.toLowerCase().includes(term)) ||
        appointment.vehicle.plate.toLowerCase().includes(term) ||
        appointment.vehicle.model.toLowerCase().includes(term) ||
        (appointment.technician && appointment.technician.toLowerCase().includes(term));

      const matchesStatus = watchFilters.status === 'all' || appointment.status === watchFilters.status;

      return matchesSearch && matchesStatus;
    });
  }, [appointments, debouncedSearch, watchFilters.status]);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalPages = Math.ceil(filteredAppointments.length / pageSize);

  const paginatedAppointments = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredAppointments.slice(startIndex, startIndex + pageSize);
  }, [filteredAppointments, currentPage, pageSize]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, watchFilters.status]);

  const getPageNumbers = () => {
    const pages: (number | 'ellipsis')[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) {
        pages.push('ellipsis');
      }
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }
      if (currentPage < totalPages - 2) {
        pages.push('ellipsis');
      }
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const getStatusBadge = (status: string) => {
    const normalized = (status || '').toLowerCase();
    switch (normalized) {
      case 'pending':
      case 'chờ xác nhận':
        return <Badge variant="secondary">Chờ xác nhận</Badge>;
      case 'confirmed':
      case 'đã xác nhận':
        return <Badge variant="default">Đã xác nhận</Badge>;
      case 'paid':
      case 'đã thanh toán':
        return <Badge variant="default" className="bg-blue-500">Đã thanh toán</Badge>;
      case 'in_progress':
      case 'đang thực hiện':
        return <Badge variant="destructive">Đang thực hiện</Badge>;
      case 'completed':
      case 'hoàn thành':
      case 'maintenance_complete':
        return <Badge className="bg-green-500">Hoàn thành</Badge>;
      case 'cancelled':
      case 'đã hủy':
        return <Badge variant="destructive">Đã hủy</Badge>;
      case 'rejected':
      case 'từ chối':
        return <Badge variant="destructive">Từ chối</Badge>;
      default:
        return <Badge variant="outline">{status || 'Không xác định'}</Badge>;
    }
  };

  return (
    <div className="space-y-4">
      {/* Search and Filter Controls */}
      <div className="flex items-center justify-between">
        <Form {...filterForm}>
          <form className="flex items-center gap-3">
            <FormField name="search" control={filterForm.control} render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input className="pl-9 pr-10 w-64" placeholder="Tìm kiếm..." {...field} />
                    {field.value && (
                      <button
                        type="button"
                        onClick={() => field.onChange('')}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </FormControl>
              </FormItem>
            )} />
            <FormField name="status" control={filterForm.control} render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="pending">Chờ xác nhận</SelectItem>
                    <SelectItem value="confirmed">Đã xác nhận</SelectItem>
                    <SelectItem value="paid">Đã thanh toán</SelectItem>
                    <SelectItem value="in_progress">Đang thực hiện</SelectItem>
                    <SelectItem value="completed">Hoàn thành</SelectItem>
                    <SelectItem value="cancelled">Đã hủy</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )} />
          </form>
        </Form>
      </div>

      {/* Appointments Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Booking ID</TableHead>
              <TableHead>Ngày tạo lịch hẹn</TableHead>
              <TableHead>Tên khách</TableHead>
              <TableHead>VIN</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead>Kỹ thuật viên</TableHead>
              {showActions && <TableHead className="text-right">Thao tác</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAppointments.length === 0 ? (
              <TableRow>
                <TableCell colSpan={showActions ? 8 : 7} className="text-center py-8 text-muted-foreground">
                  Không tìm thấy lịch hẹn nào
                </TableCell>
              </TableRow>
            ) : (
              paginatedAppointments.map(appointment => (
                <TableRow key={appointment.id}>
                  <TableCell className="font-medium">#{appointment.id}</TableCell>
                  <TableCell>
                    {new Date(appointment.date).toLocaleDateString('vi-VN')} {appointment.time}
                  </TableCell>
                  <TableCell>{appointment.customerName || '—'}</TableCell>
                  <TableCell className="text-xs font-mono">{appointment.vehicle.plate || '—'}</TableCell>
                  <TableCell>{appointment.vehicle.model || '—'}</TableCell>
                  <TableCell>{getStatusBadge(appointment.status)}</TableCell>
                  <TableCell>{appointment.technician || '—'}</TableCell>
                  {showActions && (
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2 flex-wrap">
                        {appointment.status === 'pending' && (
                          <>
                            {onCheckParts && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => onCheckParts(appointment.id)}
                                disabled={isLoadingParts[appointment.id]}
                              >
                                <Package className="w-4 h-4 mr-1" />
                                {isLoadingParts[appointment.id] ? 'Đang kiểm tra...' : 'Kiểm tra phụ tùng'}
                              </Button>
                            )}
                            {partsCheckResult[appointment.id] === true && (
                              <Button
                                size="sm"
                                onClick={() => onConfirm(appointment.id)}
                                className="bg-green-600 hover:bg-green-700"
                              >
                                <CheckCircle2 className="w-4 h-4 mr-1" />
                                Xác nhận
                              </Button>
                            )}
                            {partsCheckResult[appointment.id] === false && (
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => onCancel(appointment.id)}
                              >
                                <XCircle className="w-4 h-4 mr-1" />
                                Từ chối
                              </Button>
                            )}
                            {partsCheckResult[appointment.id] === undefined && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => onCancel(appointment.id)}
                              >
                                Từ chối
                              </Button>
                            )}
                          </>
                        )}
                        {onViewDetails && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => onViewDetails(appointment.id)}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Chi tiết
                          </Button>
                        )}
                        <Button size="sm" variant="outline" onClick={() => onEdit(appointment)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  )}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Hiển thị {(currentPage - 1) * pageSize + 1} - {Math.min(currentPage * pageSize, filteredAppointments.length)} trong tổng số {filteredAppointments.length} kết quả
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                />
              </PaginationItem>
              {getPageNumbers().map((page, index) => (
                <PaginationItem key={index}>
                  {page === 'ellipsis' ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(page as number);
                      }}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                  }}
                  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
