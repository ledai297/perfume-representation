import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import productData from 'data/product/product';
import { useEffect } from 'react';
import { getApi } from 'service/httpClient';

export const NewArrivals = () => {
  useEffect(() => {

  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getApi('/api/products');
    } catch (error) {

    }
  }

  const newArrival = [...productData].filter(
    (arrival) => arrival.isNew === true
  );

  return (
    <>
      {/* <!-- BEGIN NEW ARRIVALS --> */}
      <section className='arrivals'>
        <SectionTitle
          subTitle='Cosmetics'
          title='New arrivals'
          body='Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.'
        />

        <div className='products-items'>
          <ProductsCarousel products={newArrival} />
        </div>
      </section>
      {/* <!-- NEW ARRIVALS EOF --> */}
    </>
  );
};
