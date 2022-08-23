import Link from 'next/link';

export const AboutDiscount = () => {
  return (
    <>
      {/* <!-- BEGIN DISCOUNT --> */}
      <div
        className='discount discount-about js-img'
        style={{ backgroundImage: `url('https://cf.shopee.vn/file/2df57e922ad6b41a1297b46828598969')` }}
      >
        <div className='wrapper'>
          <div className='discount-info'>
            <span className='saint-text'>
              {/* Success story */}
            </span>
            <h2>
              {/* -𝕽𝖎𝖇𝖎- 𝕮𝖔𝖘𝖒𝖊𝖙𝖎𝖈𝖘 develops its own brands */}
            </h2>
            <p>
              {/* The -𝕽𝖎𝖇𝖎- 𝕮𝖔𝖘𝖒𝖊𝖙𝖎𝖈𝖘 network is being developed and improved, taking into
              account all consumer. */}
            </p>
            <p className='discount-info__sm'>
              {/* Forming the range of stores, we, above all, strive not only to
              meet the format of "home shop", offering each customer the most
              basic household goods, but also to create a unique space of beauty
              and care. -𝕽𝖎𝖇𝖎- 𝕮𝖔𝖘𝖒𝖊𝖙𝖎𝖈𝖘 stores offer their customers the widest and
              highest quality selection of products from world-renowned
              manufacturers. */}
            </p>
            <Link href='/shop'>
              <a className='btn'>Shop now</a>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- DISCOUNT EOF   --> */}
    </>
  );
};
