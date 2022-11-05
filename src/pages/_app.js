import { createContext, useEffect, useState } from 'react';
import { StorageUtils } from 'utils/StorageUtils';
import '../styles/styles.scss';

export const CartContext = createContext();
const MyApp = ({ Component, pageProps }) => {
  // @Todo
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cart = StorageUtils.getCart();
    setCart(cart);
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Component {...pageProps} />
    </CartContext.Provider>
  );
};

export default MyApp;
