import { Checkout } from 'components/Checkout/Checkout';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'Trang chủ',
    path: '/',
  },
  {
    label: 'Shop',
    path: '/shop',
  },
  {
    label: 'Thanh toán',
    path: '/checkout',
  },
];
const CheckoutPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Thanh toán'>
      <Checkout />
    </PublicLayout>
  );
};

export default CheckoutPage;
