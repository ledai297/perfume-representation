import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';
import productData from 'data/product/product';
import ProductService from 'service/product/ProductService';
import CategoryService from 'service/category/CategoryService';

export const Trending = () => {
  const trendingProducts = [...productData];
  const [products, setProducts] = useState(trendingProducts);
  const [filterItem, setFilterItem] = useState('makeup');
  const [ categories, setCategories ] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await ProductService.filterProducts();
      setProducts(response?.data?.content);
    } catch (error) {

    }
  }

  const fetchCategories = async () => {
    try {
      const response = await CategoryService.filterCategories();
      setCategories(response?.data);
    } catch (error) {

    }
  }

  const renderCategoryProducts = (category) => {
    const categoryProducts = products?.filter((item) => item?.category?.id === category?.id);
    console.log("categoryProducts: ", categoryProducts)
    return (
      <section className='trending'>
        <div className='trending-content'>
          <SectionTitle
            subTitle='Cosmetics'
            title={category?.name}
            body={category?.title}
          />
          <div className='tab-wrap trending-tabs'>
            {/* <ul className='nav-tab-list tabs'>
              {categories?.map((item) => (
                <li
                  key={item.value}
                  onClick={() => setFilterItem(item.value)}
                  className={item.value === filterItem ? 'active' : ''}
                >
                  {item?.name}
                </li>
              ))}
            </ul> */}
            <div className='products-items'>
              <ProductsCarousel products={categoryProducts} />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* <!-- BEGIN TRENDING --> */}
      {/* <section className='trending'>
        <div className='trending-content'>
          <SectionTitle
            subTitle='Cosmetics'
            title='Trending products'
            body='Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.'
          />
          <div className='tab-wrap trending-tabs'>
            <ul className='nav-tab-list tabs'>
              {categories?.map((item) => (
                <li
                  key={item.value}
                  onClick={() => setFilterItem(item.value)}
                  className={item.value === filterItem ? 'active' : ''}
                >
                  {item?.name}
                </li>
              ))}
            </ul>
            <div className='products-items'>
              <ProductsCarousel products={products} />
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- TRENDING EOF   --> */}
      {
        categories?.map((cate) => renderCategoryProducts(cate))
      }
    </>
  );
};
