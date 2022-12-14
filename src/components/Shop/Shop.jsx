import { Products } from 'components/Product/Products/Products';
import { usePagination } from 'components/utils/Pagination/Pagination';
import Slider from 'rc-slider';
import { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import brandService from 'service/brand/brandService';
import CategoryService from 'service/category/CategoryService';
import ProductService from 'service/product/ProductService';
import { AsideItem } from '../shared/AsideItem/AsideItem';
import { StorageUtils } from 'utils/StorageUtils';
import { useRouter } from 'next/router';
// import ConfigurationService from 'service/configuration/ConfigurationService';

// React Range
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const options = [
  { value: 'minPrice:asc', label: 'Giá: Thấp đến Cao ' },
  { value: 'maxPrice:desc', label: 'Giá: Cao đến Thấp' },
];
export const Shop = () => {
  const [ categories, setCategories ] = useState([]);
  const [ brands, setBrands ] = useState([]);
  const recentlyViewed = StorageUtils.recentlyViewedProducts();
  const [products, setProducts] = useState([]);
  const paginate = usePagination(products, 10);
  const router = useRouter();
  const [filter, setFilter] = useState(
    {
      brandIds: "",
      categoryIds: "",
      keyword: "",
      priceFrom: 0,
      priceTo: null,
      pageNo: 0,
      pageSize: 10,
      sort: "createdAt:desc"
    }
  );
  var keywordChangeTimer = null;

  // useEffect(() => {
  //   fetchProducts(filter);
  //   const queryParam = router.query;
  // }, [filter?.categoryIds, filter?.brandIds, filter?.sort, filter.priceFrom, filter.priceTo, filter.keyword])

    useEffect(() => {
      fetchCategories();
      fetchBrands();
    }, []);

  useEffect(() => {
    fetchProducts(router.query);
    setFilter(router.query);
  }, [router.query]);

  const fetchProducts = async (filterParams) => {
    try {
      const response = await ProductService.filterProducts(filterParams);
      // const configuration = await ConfigurationService.fetchDetail();
      setProducts(response?.data?.content || []);
    } catch (error) {

    }
  }

  const fetchCategories = async () => {
    try {
      const response = await CategoryService.filterCategories();
      setCategories(response.data)
    } catch (error) {

    }
  }

  const fetchBrands = async () => {
    try {
      const response = await brandService.filterBrands();
      setBrands(response?.data || [])
    } catch (error) {

    }
  }

  const handleSort = (value) => {
    setFilter({ ...filter, sort: value})
  };

  const handleChangeCategory = (category) => {
    const queryParams = {
      ...router.query,
      categoryIds: category.id
    }
    router.replace(parseQueryParamToUrlQueryString(queryParams));
  }

  const handleChangeBrand = (brand) => {
    const queryParams = {
      ...router.query,
      brandIds: brand.id
    }
    router.replace(parseQueryParamToUrlQueryString(queryParams));
  }

  const handleChangeKeyword = (e) => {
    clearTimeout(keywordChangeTimer);
    const newKeyword = e.target.value;
    keywordChangeTimer = setTimeout(() => {
      const queryParams = router.query || {};
      const newQueryParams = {
        ...queryParams,
        keyword: newKeyword
      };
      const urlWithQueryString = parseQueryParamToUrlQueryString(newQueryParams);
      router.replace(urlWithQueryString);
    }, 200);
  }

  const handleChangePrices = (from, to) => {
    const queryParams = {
      ...router.query,
      priceFrom: from || 0,
      priceTo: to || null
    }
    setFilter(queryParams);
    router.replace(parseQueryParamToUrlQueryString(queryParams));
  }

  const parseQueryParamToUrlQueryString = (params) => {
    try {
      return router.pathname + "?" + new URLSearchParams(params).toString();
    } catch (error) {
      return router.pathname;
    }
  }

  return (
    <div>
      {/* <!-- BEGIN SHOP --> */}
      <div className='shop'>
        <div className='wrapper'>
          <div className='shop-content'>
            {/* <!-- Shop Aside --> */}
            <div className='shop-aside'>
              <div className='box-field box-field__search'>
                <input
                  type='search'
                  className='form-control'
                  placeholder='Search'
                  onChange={handleChangeKeyword}
                />
                <i className='icon-search'></i>
              </div>
              <div className='shop-aside__item'>
                <span className='shop-aside__item-title'>Danh mục</span>
                <ul>
                  {
                    categories?.map((cate) => (
                      <li>
                        <span onClick={() => handleChangeCategory(cate)} className={`${filter?.categoryIds?.includes(cate?.id) ? 'active' : ''}`}>
                          {cate?.name}
                        </span>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className='shop-aside__item'>
                <span className='shop-aside__item-title'>Thương hiệu</span>
                <ul>
                  {
                    brands?.map((brand) => (
                      <li>
                        <span onClick={() => handleChangeBrand(brand)}  className={`${filter?.brandIds?.includes(brand?.id) ? 'active' : ''}`}>
                          {brand?.name}
                        </span>
                      </li>
                    ))
                  }
                </ul>
              </div>
              {
                (router.query && Object.keys(router.query) !== 0) && (
                  <div className='shop-aside__item'>
                    <span className='shop-aside__item-title'>Price</span>
                    <div className='range-slider'>
                      <Range
                        min={0}
                        max={2000000}
                        defaultValue={[router.query?.priceFrom || 0, router.query?.priceTo || 2000000]}
                        tipFormatter={(value) => `${value.toLocaleString("ja")}đ`}
                        allowCross={false}
                        onAfterChange={(range) => {
                          const priceFrom = range[0];
                          const priceTo = range[1];
                          handleChangePrices( priceFrom, priceTo);
                        }}
                        
                        tipProps={{
                          placement: 'bottom',
                          prefixCls: 'rc-slider-tooltip',
                        }}
                      />
                    </div>
                  </div>
                )
              }
              {
                recentlyViewed ? (
                  <div className='shop-aside__item'>
                  <span className='shop-aside__item-title'>Best seller</span>
                  {recentlyViewed?.map((data) => (
                    <AsideItem key={data.id} aside={data} />
                  )) || null}
                </div>
                ) : null
              }
              {
                recentlyViewed ? (
                  <div className='shop-aside__item'>
                    <span className='shop-aside__item-title'>Sản phẩm vừa xem</span>
                    {recentlyViewed?.map((data) => (
                      <AsideItem key={data.id} aside={data} />
                    ))}
                  </div>
                ) : null
              }
            </div>
            {/* <!-- Shop Main --> */}
            <div className='shop-main'>
              <div className='shop-main__filter'>
                <div className='shop-main__checkboxes'>
                  {/* <label className='checkbox-box'>
                    <input
                      checked={filter.isSale}
                      onChange={() =>
                        setFilter({ ...filter, isSale: !filter.isSale })
                      }
                      type='checkbox'
                    />
                    <span className='checkmark'></span>
                    SALE
                  </label>
                  <label className='checkbox-box'>
                    <input
                      checked={filter.isNew}
                      onChange={() =>
                        setFilter({ ...filter, isNew: !filter.isNew })
                      }
                      type='checkbox'
                    />
                    <span className='checkmark'></span>
                    NEW
                  </label> */}
                </div>
                <div className='shop-main__select'>
                  <Dropdown
                    options={options}
                    className='react-dropdown'
                    onChange={(option) => handleSort(option.value)}
                    value={options[0]}
                  />
                </div>
              </div>
              <div className='shop-main__items'>
                <Products products={paginate?.currentData()} />
              </div>

              {/* <!-- PAGINATE LIST --> */}
              {/* <PagingList paginate={paginate} /> */}
            </div>
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          src='/assets/img/promo-video__decor.jpg'
          alt=''
        />
        <img
          className='shop-decor js-img'
          src='/assets/img/shop-decor.jpg'
          alt=''
        />
      </div>
      {/* <!-- SHOP EOF   --> */}
    </div>
  );
};
