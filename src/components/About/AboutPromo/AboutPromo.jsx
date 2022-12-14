import { PromoVideo } from 'components/shared/PromoVideo/PromoVideo';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import { useState } from 'react';
import PromoNumberData from 'data/promoNumber/promoNumber';

export const AboutPromo = () => {
  const [play, setPlay] = useState(false);

  const promoNumber = [...PromoNumberData];
  const url = play
    ? 'https://cvf.shopee.vn/file/d2db1d3b9e449195cc529462f4e11ae3'
    : '';
  return (
    <>
      {/* <!-- BEGIN PROMO VIDEO --> */}
      <section className='promo-video'>
        <div className='wrapper'>
          <SectionTitle
            title='Welcome to -𝕽𝖎𝖇𝖎- 𝕮𝖔𝖘𝖒𝖊𝖙𝖎𝖈𝖘'
            subTitle='Promotion video'
            body={`Today we can offer our customers exclusive products of 108 brands marked "only in -𝕽𝖎𝖇𝖎- 𝕮𝖔𝖘𝖒𝖊𝖙𝖎𝖈𝖘`}
          />

          <div className='promo-video__block'>
            <PromoVideo
              videoUrl={url}
              play={play}
              onVideoPlay={() => setPlay(true)}
              image='/assets/img/promo-video-img.jpg'
            />
          </div>

          <div className='promo-video__nums'>
            {promoNumber.map((promo, index) => (
              <div key={index} className='promo-video__num'>
                <span>{promo.number}</span>
                <h5>{promo.name}</h5>
              </div>
            ))}
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          src='/assets/img/promo-video__decor.jpg'
          alt=''
        />
      </section>
      {/* <!-- PROMO VIDEO EOF   --> */}
    </>
  );
};
