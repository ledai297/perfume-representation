import { Categories } from 'components/Category/Categories/Categories';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';
import CategoryService from 'service/category/CategoryService';

export const TopCategories = () => {
  const [ categories, setCategories ] = useState([]);

  useEffect(() => {
    fetchCatefories();
  }, []);

  const fetchCatefories = async () => {
    try {
      const response = await CategoryService.filterCategories();
      setCategories(response?.data || []);
    } catch (error) {
      
    }
  }

  return (
    <>
      {/* <!-- BEGIN TOP CATEGORIES --> */}
      <section className='top-categories'>
        <SectionTitle
          subTitle='Popular collections'
          title='top categories'
          body=''
        />
        <div className='top-categories__items'>
          {<Categories categories={categories} />}
        </div>
      </section>
      {/* <!-- TOP CATEGORIES EOF   --> */}
    </>
  );
};
