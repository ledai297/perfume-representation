import { Card } from './Card/Card';
import socialData from 'data/social';
import { CartContext } from 'pages/_app';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { StorageUtils } from 'utils/StorageUtils';
import router from 'next/router';

export const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [count, setCount] = useState(0);
  const socialLinks = [...socialData];

  const total = cart.reduce(
    (total, item) => total + Number(item?.variant?.price) * Number(item?.quantity),
    0
  );

  const handleProductQuantity = (change, quantity, variantId) => {
    if (change === 'increment') {
      const index = cart?.findIndex((item) => item.variant.id === variantId);
      cart[index].quantity += 1;
      setCount(count + 1);
      StorageUtils.changeCartItemQuantity(variantId, 1);
    }
    if (change === 'decrement' && quantity > 1) {
      const index = cart?.findIndex((item) => item.variant.id === variantId);
      cart[index].quantity -= 1;
      setCount(count - 1);
      StorageUtils.changeCartItemQuantity(variantId, -1);
    }
  };

  useEffect(() => {
    setCart(cart);
  }, [cart, count]);

  useEffect(() => {
    const cart = StorageUtils.getCart();

    if(!cart || cart?.length == 0) {
      router.push("/")
    }
  }, []);

  return (
    <>
      {/* <!-- BEGIN CART --> */}
      <div className='cart'>
        <div className='wrapper'>
          <div className='cart-table'>
            <div className='cart-table__box'>
              <div className='cart-table__row cart-table__row-head'>
                <div className='cart-table__col'>Sản phẩm</div>
                <div className='cart-table__col'>Giá</div>
                <div className='cart-table__col'>Số lượng</div>
                <div className='cart-table__col'>Thành tiền</div>
              </div>

              {cart.map((item) => (
                <Card
                  onChangeQuantity={handleProductQuantity}
                  key={item.variant?.id}
                  cartItem={item}
                />
              ))}
            </div>
          </div>
          <div className='cart-bottom'>
            <div className='cart-bottom__promo'>
              {/* <form className='cart-bottom__promo-form'>
                <div className='box-field__row'>
                  <div className='box-field'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter promo code'
                    />
                  </div>
                  <button type='submit' className='btn btn-grey'>
                    apply code
                  </button>
                </div>
              </form> */}
              <h6>MÃ GIẢM GIÁ CỦA SHOP</h6>
              <p>
                Theo dõi chúng tôi trên shopee và nhận những voucher giảm giá của shop ngay nha!!!
              </p>
              <div className='contacts-info__social'>
                <span>Find us here:</span>
                <ul>
                  {socialLinks.map((social, index) => (
                    <li key={index}>
                      <a href={social.path} target='_blank'>
                        <i className={social.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='cart-bottom__total'>
              <div className='cart-bottom__total-goods'>
                <span>VNĐ{total?.toLocaleString("ja") || 0}</span>
              </div>
              {/* <div className='cart-bottom__total-promo'>
                Discount on promo code
                <span>No</span>
              </div> */}
              <div className='cart-bottom__total-num'>
                Tổng tiền:
                <span>{total?.toLocaleString("ja") || 0}đ</span>
              </div>
              <Link href='/checkout'>
                <a className='btn'>Thanh toán</a>
              </Link>
            </div>
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          src='assets/img/promo-video__decor.jpg'
          alt=''
        />
      </div>
      {/* <!-- CART EOF   --> */}
    </>
  );
};
