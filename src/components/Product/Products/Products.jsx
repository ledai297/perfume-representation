import { CartContext } from 'pages/_app';
import { useContext } from 'react';
import { StorageUtils } from 'utils/StorageUtils';
import { SingleProduct } from './SingleProduct/SingleProduct';

export const Products = ({ products }) => {
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = (id) => {
    const newProduct = products?.find((pd) => pd.id === id);
    const cartItem = {
      variant: {
        ...newProduct.variants[0],
        imageUrl: newProduct?.imageUrls,
        productName: newProduct?.name,
        producId: newProduct?.id
      },
      quantity: 1
    }

    // add variant to cartStorage
    const newCart = StorageUtils.addVariantToCart(cartItem);
    setCart(newCart);
  };
  return (
    <>
      {products.map((product) => (
        <SingleProduct
          addedInCart={Boolean(cart?.find((pd) => pd.id === product.id))}
          key={product.id}
          product={product}
          onAddToWish={(id) => console.log(id)}
          onAddToCart={handleAddToCart}
        />
      ))}
    </>
  );
};
