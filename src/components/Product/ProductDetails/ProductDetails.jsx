import productData from 'data/product/product';
import { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import socialData from 'data/social';
import { useRouter } from 'next/router';
import { CartContext } from 'pages/_app';
import ProductService from 'service/product/ProductService';
import { SEX } from 'static/Product';
import { StorageUtils } from 'utils/StorageUtils';

export const ProductDetails = () => {
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);

  const socialLinks = [...socialData];
  const [product, setProduct] = useState(null);
  const [addedInCart, setAddedInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState(1);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [ variantSelected, setVariantSelected ] = useState([]);

  useEffect(() => {
    if (router.query.id) {
      fetchProductDetail(router.query.id);
    }
  }, [router.query.id]);

  useEffect(() => {
    if (product) {
      setAddedInCart(Boolean(cart?.find((pd) => pd.id === product.id)));
    }
  }, [product, cart]);

  const fetchProductDetail = async (id) => {
    try {
      const response = await ProductService.findById(id);
      setProduct(response?.data);
      if (response?.data) {
        StorageUtils.addRecentlyViewedProducts(response?.data);
      }
      setVariantSelected(response?.data?.variants?.length > 0 ? response?.data?.variants[0] : null);
    } catch (error) {

    }
  }

  const handleAddToCart = () => {
    const variant = {
      sku: variantSelected?.sku,
      name: product?.name,
      price: variantSelected?.price,
      imageUrl: product?.imageUrls?.split(",")[0],
      variantId: variantSelected?.id,
      productId: product?.id,
      volumn: variantSelected?.volume,
      updatedAt: product?.updatedAt,
      createdAt: product?.createdAt,
      productName: product?.name
    };
//     quantity: quantity,
    const cartItem = {
      variant,
      quantity
    };
    setCart([...cart, cartItem]);
    StorageUtils.addVariantToCart(cartItem);
  };
  
  const renderProductDetail = () => {
    const sex = SEX[`${product?.sex}`]?.name;
    return (
      <div className='product-detail'>
        <div className='row'>
          <div className='col xs-6'>
            <label>Thương hiệu</label>
          </div>
          <div className='col xs-6 product-detail__item-value'>{product?.brand?.name}</div>
        </div>

        <div className='row'>
          <div className='col xs-6'>
            <label>Giới tính</label>
          </div>
          <div className='col xs-6 product-detail__item-value'>{sex}</div>
        </div>

        <div className='row'>
          <div className='col xs-6'>
            <label>Kích cỡ sản phẩm</label>
          </div>
          <div className='col xs-6 product-detail__item-value'>{product?.size}</div>
        </div>

        <div className='row'>
          <div className='col xs-6'>
            <label>Mùi hương</label>
          </div>
          <div className='col xs-6 product-detail__item-value'>{product?.smell}</div>
        </div>

        <div className='row'>
          <div className='col xs-6'>
            <label>Hạn sử dụng</label>
          </div>
          <div className='col xs-6 product-detail__item-value'>{product?.guaranteePeriod} tháng</div>
        </div>

        <div className='row'>
          <div className='col xs-6'>
            <label>Công thức</label>
          </div>
          <div className='col xs-6 product-detail__item-value'>{product?.formula}</div>
        </div>

        <div className='row'>
          <div className='col xs-6'>
            <label>Trọng lượng</label>
          </div>
          <div className='col xs-6 product-detail__item-value'>{product?.weight}g</div>
        </div>

        <div className='row'>
          <div className='col xs-6'>
            <label>Kho hàng</label>
          </div>
          <div className='col xs-6 product-detail__item-value'>{product?.warehouse?.name}</div>
        </div>

        <div className='row'>
          <div className='col xs-6'>
            <label>Gửi từ</label>
          </div>
          <div className='col xs-6 product-detail__item-value'>{product?.warehouse?.address}</div>
        </div>
      </div>
    )
  }

  if (!product) return <></>;
  return (
    <>
      {/* <!-- BEGIN PRODUCT --> */}
      <div className='product'>
        <div className='wrapper'>
          <div className='product-content'>
            {/* <!-- Product Main Slider --> */}
            <div className='product-slider'>
              <div className='product-slider__main'>
                <Slider
                  fade={true}
                  // asNavFor={nav2}
                  // arrows={false}
                  lazyLoad={true}
                  // ref={(slider1) => setNav1(slider1)}
                >
                  {product?.imageUrls?.split(",")?.map((img, index) => (
                    <div key={index} className='product-slider__main-item'>
                      <div className='products-item__type'>
                        {product.isSale && (
                        <span classNasme='products-item__sale'>sale</span>
                        )}
                        {product.isNew && (
                          <span className='products-item__new'>new</span>
                        )}
                      </div>
                      <img src={img} alt='product' />
                    </div>
                  ))}
                  {/* {
                    product?.imageUrls?.split(",")?.map((imageUrl, index) => (
                      <div className='product-slider__main-item' key={index}>
                        <img src={imageUrl} alt='product' />
                      </div>
                    ))
                  } */}
                </Slider>
              </div>

              {/* <!-- Product Slide Nav --> */}
              <div className='product-slider__nav'>
                <Slider
                  arrows={false}
                  asNavFor={nav1}
                  ref={(slider2) => setNav2(slider2)}
                  slidesToShow={4}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  {/* {product.imageGallery.map((img, index) => (
                    <div key={index} className='product-slider__nav-item'>
                      <img src={img} alt='product' />
                    </div>
                  ))} */}
                </Slider>
              </div>
            </div>
            <div className='product-info'>
              <h3>{product.name}</h3>
              {/* {product.isStocked ? ( */}
                <span className='product-stock'>in stock</span>
              {/* ) : (
                ''
              )} */}

              <span className='product-num'>SKU: {variantSelected?.sku}</span>
              {/* {product.oldPrice ? ( */}
                <span className='product-price'>
                  <span>đ {(variantSelected?.price * 1.1).toLocaleString("ja")}</span>đ {variantSelected?.price?.toLocaleString("ja")}
                </span>
              {/* ) : (
                <span className='product-price'>đ {variantSelected?.price?.toLocaleString("ja")}</span>
              )} */}

              {/* <!-- Social Share Link --> */}
              <div className='contacts-info__social'>
                <span>Find us here:</span>
                <ul>
                  {socialLinks.map((social, index) => (
                    <li key={index}>
                      <a href={social.path}>
                        <i className={social.icon ? social.icon : ''}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* <!-- Product Color info--> */}
              <div className='product-options'>
                <div className='product-info__color'>
                  <span>Thể tích:</span>
                  <ul>
                    {product?.variants.map((variant, index) => (
                      <li
                        onClick={() => setVariantSelected(variant)}
                        className={variantSelected?.id === variant?.id ? 'active' : ''}
                        key={index}
                      >{variant?.volume}ml</li>
                    ))}
                  </ul>
                </div>

                {/* <!-- Order Item counter --> */}
                <div className='product-info__quantity'>
                  <span className='product-info__quantity-title'>
                    Quantity:
                  </span>
                  <div className='counter-box'>
                    <span
                      onClick={() => {
                        if (quantity > 1) {
                          setQuantity(quantity - 1);
                        }
                      }}
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
                      onClick={() => setQuantity(quantity + 1)}
                      className='counter-link counter-link__next'
                    >
                      <i className='icon-arrow'></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className='product-buttons'>
                <button
                  disabled={addedInCart}
                  onClick={() => handleAddToCart()}
                  className='btn btn-icon'
                  style={{ whiteSpace: 'nowrap' }}
                >
                  <i className='icon-cart'></i> Thêm vào giỏ hàng
                </button>
                <button className='btn btn-grey btn-icon'>
                  <i className='icon-heart'></i> Yêu thích
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Product Details Tab --> */}
          <div className='product-detail'>
            <div className='tab-wrap product-detail-tabs'>
              <ul className='nav-tab-list tabs pd-tab'>
                <li
                  className={tab === 1 ? 'active' : ''}
                  onClick={() => setTab(1)}
                >
                  Chi tiết sản phẩm
                </li>
                <li
                  className={tab === 2 ? 'active' : ''}
                  onClick={() => setTab(2)}
                >
                  Mô tả sản phẩm
                </li>
              </ul>
              <div className='box-tab-cont'>
                {/* <!-- Product description --> */}
                {tab === 1 && (
                  <div>
                    {renderProductDetail()}
                  </div>
                )}

                {tab === 2 && (
                  <div className='tab-cont product-reviews'>
                    {/* <!-- Product Reviews --> */}
                    {/* <Reviews reviews={product.reviews} /> */}
                    {/* <!-- Product Review Form --> */}
                    {/* <ReviewFrom /> */}
                    <div className='tab-cont'>
                      <div dangerouslySetInnerHTML={{__html: product?.description}} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          src='/assets/img/promo-video__decor.jpg'
          alt=''
        />
      </div>
      {/* <!-- PRODUCT EOF   --> */}
    </>
  );
};
