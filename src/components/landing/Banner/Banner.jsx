import Link from 'next/link';
import { useEffect, useState } from 'react';
import ProductService from 'service/product/ProductService';

export const Banner = () => {
  
  const [ configuration, setConfiguration ] = useState();

  useEffect(() => {
    fetchConfiguration();
  }, []);

  const fetchConfiguration = async () => {
    try {
      const response = await ProductService.fetchConfiguration();
      setConfiguration(response?.data);
    } catch (error) {

    }
  }

  console.log('configuration: ', configuration)

  return (
    <>
      {/* <!-- BEGIN MAIN BLOCK --> */}
      <div className='main-block load-bg' style={{ background: `url(${configuration?.bannerUrl})`}}>
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
          src={configuration?.bannerUrl}
          alt=''
        />
      </div>
      {/* <!-- MAIN BLOCK EOF --> */}
    </>
  );
};
