import CategoryService from 'service/category/CategoryService';
import { Categories } from './Categories/Categories';
import { useEffect, useState } from 'react';

export const Category = () => {
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
      <section className='all-categories'>
        <div className='top-categories__items'>
          <Categories categories={categories} />
        </div>
      </section>
      {/* <!-- TOP CATEGORIES EOF --> */}
    </>
  );
};
