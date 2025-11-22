import { DataTable } from '@/components/DataTable';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { apiClient } from '@/lib/api';
import { bookingApi } from '@/lib/bookingUtils';
import { showApiErrorToast } from '@/lib/responseHandler';
import { authService } from '@/lib/auth';
import { ColumnDef } from '@tanstack/react-table';
import { CreditCard, History } from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';

type PaymentHistory = {
  id: number;
  invoiceNumber: string;
  orderCode: string;
  amount: number;
  status: string;
  paymentMethod: string;
  createdAt: string;
  paidAt: string;
  transactionRef: string;
  responseCode: string;
  bookingId?: number;
};

export default function PaymentHistoryPage() {
  const [paymentHistory, setPaymentHistory] = useState<PaymentHistory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setIsLoading(true);
        const currentUser = authService.getAuthState().user;
        if (!currentUser) {
          if (mounted) setIsLoading(false);
          return;
        }

        // Lấy tất cả bookings của customer
        const bookings = await bookingApi.getCustomerBookings(currentUser.id);
        
        // Lấy payment history từ tất cả bookings
        const allPayments: PaymentHistory[] = [];
        for (const booking of bookings) {
          try {
            const history = await apiClient.getPaymentHistory(booking.id);
            const paymentsWithBookingId = history.map(p => ({ ...p, bookingId: booking.id }));
            allPayments.push(...paymentsWithBookingId);
          } catch (error) {
            // Bỏ qua nếu booking không có payment history
            console.error(`Failed to load payment history for booking ${booking.id}:`, error);
          }
        }

        // Sắp xếp theo thời gian thanh toán (mới nhất trước)
        allPayments.sort((a, b) => {
          const dateA = new Date(a.paidAt || a.createdAt).getTime();
          const dateB = new Date(b.paidAt || b.createdAt).getTime();
          return dateB - dateA;
        });

        if (mounted) setPaymentHistory(allPayments);
      } catch (error) {
        console.error('Failed to load payment history:', error);
        showApiErrorToast(error, toast, 'Không thể tải lịch sử thanh toán.');
        if (mounted) setPaymentHistory([]);
      } finally {
        if (mounted) setIsLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [toast]);

  const formatPrice = useCallback((price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  }, []);

  const paymentHistoryColumns: ColumnDef<PaymentHistory>[] = useMemo(() => [
    {
      accessorKey: 'orderCode',
      header: 'Mã đơn hàng',
      cell: ({ row }) => <span className="font-mono font-medium">{row.original.orderCode}</span>,
    },
    {
      accessorKey: 'invoiceNumber',
      header: 'Số hóa đơn',
      cell: ({ row }) => <span className="font-mono">{row.original.invoiceNumber}</span>,
    },
    {
      accessorKey: 'amount',
      header: 'Số tiền',
      cell: ({ row }) => (
        <span className="font-semibold text-green-600">
          {formatPrice(row.original.amount)}
        </span>
      ),
    },
    {
      accessorKey: 'paymentMethod',
      header: 'Phương thức',
      cell: ({ row }) => (
        <Badge variant="outline">{row.original.paymentMethod}</Badge>
      ),
    },
    {
      accessorKey: 'status',
      header: 'Trạng thái',
      cell: ({ row }) => {
        const status = row.original.status;
        return (
          <Badge
            variant={status === 'SUCCESSFUL' ? 'default' : 'secondary'}
            className={status === 'SUCCESSFUL' ? 'bg-green-600 hover:bg-green-700' : ''}
          >
            {status === 'SUCCESSFUL' ? 'Thành công' : status}
          </Badge>
        );
      },
    },
    {
      accessorKey: 'transactionRef',
      header: 'Mã giao dịch',
      cell: ({ row }) => (
        <span className="font-mono text-sm">{row.original.transactionRef || '—'}</span>
      ),
    },
    {
      accessorKey: 'paidAt',
      header: 'Thời gian thanh toán',
      cell: ({ row }) => (
        <span>{new Date(row.original.paidAt || row.original.createdAt).toLocaleString('vi-VN')}</span>
      ),
    },
  ], [formatPrice]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <CreditCard className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">Lịch sử thanh toán</h1>
        </div>
        <p className="text-muted-foreground">
          Xem tất cả các giao dịch thanh toán của bạn
        </p>
      </div>

      {/* Payment History Table */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Đang tải lịch sử thanh toán...</p>
          </div>
        ) : paymentHistory.length > 0 ? (
          <DataTable
            columns={paymentHistoryColumns}
            data={paymentHistory}
          />
        ) : (
          <div className="text-center py-12 border rounded-lg">
            <History className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Chưa có lịch sử thanh toán</p>
          </div>
        )}
      </div>
    </div>
  );
}

