import { Cart } from 'components/Cart/Cart';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'Trang chủ',
    path: '/',
  },
  {
    label: 'Giỏ hàng',
    path: '/cart',
  },
];
const CartPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Giỏ hàng'>
      <Cart />
    </PublicLayout>
  );
};

export default CartPage;
