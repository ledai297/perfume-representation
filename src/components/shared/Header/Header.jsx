import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import useWindowSize from 'components/utils/windowSize/windowSize';
import { header, navItem } from 'data/data.header';
import Link from 'next/link';
import { CartContext } from 'pages/_app';
import { useContext, useEffect, useState } from 'react';
import ProductService from 'service/product/ProductService';
import { Nav } from './Nav/Nav';

export const Header = () => {
  const { cart } = useContext(CartContext);
  const [promo, setPromo] = useState(true);
  const [fixedNav, setFixedNav] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [height, width] = useWindowSize();
  const [ configuration, setConfiguration ] = useState();

  // For Fixed nav
  useEffect(() => {
    window.addEventListener('scroll', isSticky);

    if (!configuration) {
      fetchConfiguration();
    }
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const fetchConfiguration = async () => {
    try {
      const response = await ProductService.fetchConfiguration();
      setConfiguration(response?.data);
    } catch (error) {

    }
  }

  const isSticky = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 10) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  };

  useEffect(() => {
    if (openMenu) {
      if (height < 767) {
        disableBodyScroll(document);
      } else {
        enableBodyScroll(document);
      }
    } else {
      enableBodyScroll(document);
    }
  }, [openMenu, height]);
  return (
    <>
      {/* <!-- BEGIN HEADER --> */}
      <header className='header'>
        {configuration && (
          <div className='header-top'>
            {
              <span>{configuration?.headerContent}</span>
            }
            <i
              onClick={() => setPromo(false)}
              className='header-top-close js-header-top-close icon-close'
            ></i>
          </div>
        )}
        <div className={`header-content ${fixedNav ? 'fixed' : ''}`}>
          <div className='header-logo'>
            <Link href='/'>
              <a>
                <img src="https://cf.shopee.vn/file/5f26c1d13e3d864eb9b9fc15906d3daa_tn" alt='' style={{ width: '80px', borderRadius: '80px' }} />
              </a>
            </Link>
          </div>
          <div style={{ right: openMenu ? 0 : -360 }} className='header-box'>
            {/* Nav */}
            <Nav navItem={navItem} />
            {/* header options */}
            <ul className='header-options'>
              {/* <li>
                <Link href='/faq'>
                  <a>
                    <i className='icon-search'></i>
                  </a>
                </Link>
              </li> */}
              {/* <li>
                <Link href='/profile'>
                  <a>
                    <i className='icon-user'></i>
                  </a>
                </Link>
              </li> */}
              {/* <li>
                <Link href='/wishlist'>
                  <a>
                    <i className='icon-heart'></i>
                  </a>
                </Link>
              </li> */}
              <li>
                <Link href='/cart'>
                  <a>
                    <i className='icon-cart'></i>
                    <span>{cart.length ?? '0'}</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div
            onClick={() => setOpenMenu(!openMenu)}
            className={
              openMenu ? 'btn-menu js-btn-menu active' : 'btn-menu js-btn-menu'
            }
          >
            {[1, 2, 3].map((i) => (
              <span key={i}>&nbsp;</span>
            ))}
          </div>
        </div>
      </header>

      {/* <!-- HEADER EOF   --> */}
    </>
  );
};
