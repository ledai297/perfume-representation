import { getApi } from "service/httpClient";

const ProductService = {
    filterProducts: async () => {
        try {
            const response = await getApi("/api/products");
            return response;
        } catch (error) {
            throw error;
        }
    }
};

export default ProductService;