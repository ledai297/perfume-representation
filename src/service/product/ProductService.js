import { getApi } from "service/httpClient";

const ProductService = {
    filterProducts: async (filterParams) => {
        try {
            const response = await getApi("/products", filterParams);
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
    },
    fetchConfiguration: async () => {
        try {
            const response = await getApi(`/configuration`);
            return response;
        } catch (error) {

        }
    }
};

export default ProductService;