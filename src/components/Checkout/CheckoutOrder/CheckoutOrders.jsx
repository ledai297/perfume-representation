import productData from 'data/product/product';
import { CartContext } from 'pages/_app';
import { useContext } from 'react';
import { Card } from './Card/Card';

export const CheckoutOrders = () => {
  const { cart } = useContext(CartContext);
  const total = cart.reduce(
    (total, item) => total + Number(item.price) * Number(item.quantity),
    0
  );

  return (
    <>
      <div className='checkout-order'>
        <h5>Thông tin đơn hàng của bạn</h5>
        {cart.map((order) => (
          <Card key={order.id} order={order} />
        ))}
      </div>
      <div className='cart-bottom__total'>
        {/* <div className='cart-bottom__total-goods'>
          <span>VNĐ{total?.toLocaleString("ja") || 0}</span>
        </div> */}
        {/* <div className='cart-bottom__total-promo'>
          Discount on promo code
          <span>No</span>
        </div> */}
        {/* <div className='cart-bottom__total-delivery'>
          Delivery{' '}
          <span className='cart-bottom__total-delivery-date'>
            (Aug 28,2020 at 11:30)
          </span>
        </div> */}
        <div className='cart-bottom__total-num'>
          Tổng tiền:
          <span>VNĐ{(total)?.toLocaleString("ja") || 0}</span>
        </div>
      </div>
    </>
  );
};
