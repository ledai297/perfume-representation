import Link from 'next/link';

export const Card = ({ cartItem, onChangeQuantity }) => {
  const {
    variant,
    quantity
  } = cartItem;

  return (
    <>
      <div className='cart-table__row'>
        <div className='cart-table__col'>
          <div>
            <Link href={`/product/${variant?.productId}`}>
              <a className='cart-table__img'>
                <img src={variant?.imageUrl} className='js-img' alt='' />
              </a>
            </Link>
          </div>
          <div className='cart-table__info'>
            <div>
              <Link href={`/product/${variant?.productId}`}>
                <a className='title5'>{variant?.productName}</a>
              </Link>
            </div>
            {/* {isStocked && (
              <span className='cart-table__info-stock'>in stock</span>
            )} */}
            <span className='cart-table__info-num'>SKU: {variant?.sku}</span>
          </div>
        </div>
        <div className='cart-table__col'>
            <span className='cart-table__price'>
              <span>{(variant?.price * 1.1).toLocaleString("ja")}đ</span>{variant?.price?.toLocaleString("ja")}đ
            </span>
        </div>
        <div className='cart-table__col'>
          <div className='cart-table__quantity'>
            <div className='counter-box'>
              <span
                onClick={() => onChangeQuantity('decrement', quantity, variant?.id)}
                className='counter-link counter-link__prev'
              >
                <i className='icon-arrow'></i>
              </span>
              <input
                type='text'
                className='counter-input'
                disabled
                value={quantity}
              />
              <span
                onClick={() => onChangeQuantity('increment', quantity, variant?.id)}
                className='counter-link counter-link__next'
              >
                <i className='icon-arrow'></i>
              </span>
            </div>
          </div>
        </div>
        <div className='cart-table__col'>
          <span className='cart-table__total'>
            {(variant?.price * quantity).toLocaleString("ja")}đ
          </span>
        </div>
      </div>
    </>
  );
};
