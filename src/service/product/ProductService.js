import { getApi } from "service/httpClient";

const ProductService = {
    filterProducts: async () => {
        try {
            const response = await getApi("/products");
            return response;
        } catch (error) {
            throw error;
        }
    },
    findById: async (id) => {
        try {
            const response = await getApi(`/products/${id}`);
            return response;
        } catch (error) {

        }
    }
};

export default ProductService;