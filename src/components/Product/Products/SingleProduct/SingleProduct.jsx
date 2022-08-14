import Link from 'next/link';

export const SingleProduct = ({
  product,
  onAddToWish,
  onAddToCart,
  addedInCart,
}) => {
  const { name, oldPrice, price, imageUrls, isSale, isNew, id, minPrice, maxPrice } = product;
  const firstImageUrl = imageUrls?.length > 0 ? imageUrls?.split(",")[0] : "";
  console.log('product: ', product)
  return (
    <>
      {/* <!-- BEING SINGLE PRODUCT ITEM --> */}
      <div className='products-item'>
        <div className='products-item__type'>
          {isSale && <span className='products-item__sale'>sale</span>}
          {isNew && <span className='products-item__new'>new</span>}
        </div>
        <div className='products-item__img'>
          <img src={firstImageUrl} className='js-img' alt='' />
          <div className='products-item__hover'>
            <Link href={`/product/${id}`}>
              <a>
                <i className='icon-search'></i>
              </a>
            </Link>
            <div className='products-item__hover-options'>
              <button className='addList' onClick={() => onAddToWish(id)}>
                <i className='icon-heart'></i>
              </button>
              <button
                disabled={addedInCart}
                className={`addList ${addedInCart ? 'added' : ''}`}
                onClick={() => onAddToCart(id)}
              >
                <i className='icon-cart'></i>
              </button>
            </div>
          </div>
        </div>
        <div className='products-item__info'>
          <Link href={`/product/${id}`}>
            <a>
              <span className='products-item__name'>{name}</span>
            </a>
          </Link>
          <span className='products-item__cost'>
            <span>{oldPrice && `$${oldPrice}`}</span> đ{minPrice?.toLocaleString("ja")} - đ{maxPrice?.toLocaleString('ja')}
          </span>
        </div>
      </div>
      {/* <!-- SINGLE PRODUCT ITEM EOF --> */}
    </>
  );
};
