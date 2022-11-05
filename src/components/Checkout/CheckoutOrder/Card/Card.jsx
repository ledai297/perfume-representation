import Link from 'next/link';

export const Card = ({ cartItem }) => {
  const { variant, quantity } = cartItem;

  return (
    <>
      {/* <!-- BEING ORDER ITEM CARD --> */}
      <div className='checkout-order__item'>
        <div style={{ width: '70px', height: '70px', marginRight: '15px'}}>
          <Link href={`/product/${variant?.productId}`}>
            <a className='checkout-order__item-img'>
              <img src={variant?.imageUrl} className='js-img' alt='' />
            </a>
          </Link>
        </div>
        <div className='checkout-order__item-info' style={{ flex: 1}}>
          <Link href={`/product/${variant?.productId}`}>
            <a className='title6'>
              {variant?.name} <span>x{quantity}</span>
            </a>
          </Link>
          <span className='checkout-order__item-price' >
            {(variant?.price * quantity).toLocaleString("ja")} VNĐ
          </span>
          <span className='checkout-order__item-num'>SKU: {variant?.sku}</span>
        </div>
      </div>
      {/* <!-- ORDER ITEM CARD EOF --> */}
    </>
  );
};
