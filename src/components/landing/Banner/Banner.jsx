import Link from 'next/link';

export const Banner = () => {
  return (
    <>
      {/* <!-- BEGIN MAIN BLOCK --> */}
      <div className='main-block load-bg'>
        <div className='wrapper'>
          <div className='main-block__content'>
            <span className='saint-text'>-𝕽𝖎𝖇𝖎- 𝕮𝖔𝖘𝖒𝖊𝖙𝖎𝖈𝖘</span>
            <h1 className='main-text'>Perfume &amp; Care</h1>
            <p  style={{ color: '#0e0e0e' }}>
              Dùng nước hoa bạn có thêm 99% sự quyến rũ.
              <br />
              <h4>Ưu đãi vô cực</h4>
            </p>

            <Link href='/shop'>
              <a className='btn'>Shop now</a>
            </Link>
          </div>
        </div>
        <img
          className='main-block__decor'
          src='/assets/img/main-block-decor.png'
          alt=''
        />
      </div>
      {/* <!-- MAIN BLOCK EOF --> */}
    </>
  );
};
