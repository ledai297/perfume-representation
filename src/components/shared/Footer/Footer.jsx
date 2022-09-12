import footerNavData from 'data/footer/footerNav';
import paymentMethodData from 'data/footer/payment';
import socialData from 'data/social';
import Link from 'next/link';
import { NavCol } from './NavCol/NavCol';

export const Footer = () => {
  const footerNav = [...footerNavData];
  const footerSocial = [...socialData];

  return (
    <>
      {/* <!-- BEGIN FOOTER --> */}
      <footer className='footer'>
        <div className='wrapper'>
          <div className='footer-top'>
            <div className='footer-top__social'>
              <span>Find us here:</span>
              <ul>
                {footerSocial.map((social, index) => (
                  <li key={index}>
                    <a href={social.path} target="_blank">
                      <i className={social.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='footer-top__logo'>
              <Link href='/'>
                <a>
                  {/* <img src={footerLogo} className='js-img' alt='' /> */}
                  <h4 style={ {color: 'white' }}>-𝕽𝖎𝖇𝖎- 𝕮𝖔𝖘𝖒𝖊𝖙𝖎𝖈𝖘</h4>
                </a>
              </Link>
            </div>

            {/* Payment method */}
            <div className='footer-top__payments'>
              <span>Xem thêm tại:</span>
              <ul>
                  <li key={1} onClick={() => window.open("https://shopee.vn/ribicosmetics", "_target")}>
                    <img style={{ width: '80px', }} src="/assets/img/shopee-logo.png" className='js-img' alt='' />
                  </li>
              </ul>
            </div>
          </div>
          <div className='footer-nav'>
            {/* Footer Nav */}
            {footerNav.map((nav, index) => (
              <NavCol nav={nav} key={index} />
            ))}
            <div className='footer-nav__col'>
              <span className='footer-nav__col-title'>Contact</span>
              <ul>
                <li>
                  <i className='icon-map-pin'></i> Tòa V2 Victoria Văn Phú, Hà Đông, Hà Nội.
                </li>
                <li>
                  <i className='icon-smartphone'></i>
                  <div className='footer-nav__col-phones'>
                    <a href='tel:+13459971345'>0907 199 863</a>
                  </div>
                </li>
                <li>
                  <i className='icon-mail'></i>
                  <a href='mailto:info@beshop.com'>Ribicomestic@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer-copy'>
            <span>&copy; All rights reserved. Ribicomestic 2022</span>
          </div>
        </div>
      </footer>
      {/* <!-- FOOTER EOF   --> */}
    </>
  );
};
