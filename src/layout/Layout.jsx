import { Header } from '../components/shared/Header/Header';
import { Insta } from 'components/shared/Insta/Insta';
import { Footer } from 'components/shared/Footer/Footer';

export const Layout = ({ children }) => {
  return (
    <>
      <header className='header'>
        <Header />
      </header>
      <main className='content'>
        {children}
        <Insta />
      </main>
      <div className='shopee-logo-fixed shake' onClick={() => window.open('https://shopee.vn/ribicosmetics', "_target")}>
        <img src="/assets/img/shopee-logo.png"/>
      </div>
      <div className='call-now shake' onClick={() => window.open('tel:0907199863')}>
        <img src="/assets/img/callnow.png"/>
      </div>
      <footer className='footer'>
        <Footer />
      </footer>
    </>
  );
};
