import Link from 'next/link';

export const Card = ({ category }) => {
  const { name, imageUrl } = category;
  return (
    <Link href={`/categories`}>
      <a className='top-categories__item'>
        <img src={imageUrl || "/assets/img/top-categories-img3.jpg"} className='js-img' alt='' />
        <div className='top-categories__item-hover'>
          <h5>{name}</h5>
          <span>Shop now</span>
          <i className='icon-arrow-lg'></i>
        </div>
      </a>
    </Link>
  );
};
