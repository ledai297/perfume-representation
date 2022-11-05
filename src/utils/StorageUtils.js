export const StorageUtils = {
    recentlyViewedProducts: () => {
        if (typeof window == 'undefined') {
            return [];
        }
        const products = localStorage.getItem("recentlyViewedProducts");
        if (products) {
            return JSON.parse(products);
        }

        return null;
    },
    addRecentlyViewedProducts: (product) => {
        const localStorageProducts = localStorage.getItem("recentlyViewedProducts") || null;
        let products = localStorageProducts ? JSON.parse(localStorageProducts) : [];
        if (products && products?.length > 0) {
            const productExist = products?.find((item) => item?.id === product?.id);
            if (!productExist) {
                products = [ product, ...products];
                if (products?.length > 5) {
                    products.splice(4, 1);
                }
            }
        } else {
            products = [ product ];
        }

        localStorage.setItem("recentlyViewedProducts", JSON.stringify(products));
    },
    addVariantToCart: (lineItem) => {
        const cartStorage = localStorage.getItem("cart");

        let cart = cartStorage ? JSON.parse(cartStorage) : [];
        const itemIndex = cart.findIndex((item) => lineItem.variant?.id === item.variant.id);

        if (itemIndex != -1) {
            cart[itemIndex].quantity += 1;
        } else {
            cart = [ ...cart, lineItem];
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        return cart;
    },
    resetCart: () => {
        if (localStorage.getItem("cart")) {
            localStorage.removeItem("cart");
        }
    },
    getCart: () => {
        try {
            const cartStorage = localStorage.getItem("cart");
            return JSON.parse(cartStorage) || [];
        } catch (error) {
            return [];
        }
    },
    changeCartItemQuantity: (variantId, value) => {
        const cartStorage = localStorage.getItem("cart");
        const cart = JSON.parse(cartStorage) || [];
        if (cart?.length > 0) {
            const index = cart.findIndex(item => item?.variant?.id === variantId);
            cart[index].quantity += value;
            localStorage.setItem("cart", JSON.stringify(cart));
            return cart;
        }

        return [];
    }
}