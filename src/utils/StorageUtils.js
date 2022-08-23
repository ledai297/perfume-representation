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
    }
}