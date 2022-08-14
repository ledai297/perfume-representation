import Link from 'next/link';

export const Card = ({ cart, onChangeQuantity }) => {
  const {
    name,
    image,
    id,
    isStocked,
    sku,
    oldPrice,
    price,
    quantity,
  } = cart;

  return (
    <>
      <div className='cart-table__row'>
        <div className='cart-table__col'>
          <Link href={`/product/${id}`}>
            <a className='cart-table__img'>
              <img src={image} className='js-img' alt='' />
            </a>
          </Link>
          <div className='cart-table__info'>
            <Link href={`/product/${id}`}>
              <a className='title5'>{name}</a>
            </Link>
            {isStocked && (
              <span className='cart-table__info-stock'>in stock</span>
            )}
            <span className='cart-table__info-num'>SKU: {sku}</span>
          </div>
        </div>
        <div className='cart-table__col'>
            <span className='cart-table__price'>
              <span>{(price * 1.1).toLocaleString("ja")}đ</span>{price?.toLocaleString("ja")}đ
            </span>
        </div>
        <div className='cart-table__col'>
          <div className='cart-table__quantity'>
            <div className='counter-box'>
              <span
                onClick={() => onChangeQuantity('decrement', quantity)}
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
                onClick={() => onChangeQuantity('increment', quantity)}
                className='counter-link counter-link__next'
              >
                <i className='icon-arrow'></i>
              </span>
            </div>
          </div>
        </div>
        <div className='cart-table__col'>
          <span className='cart-table__total'>
            {(price * quantity).toLocaleString("ja")}đ
          </span>
        </div>
      </div>
    </>
  );
};
