import { getApi } from "service/httpClient";

const brandService = {
    filterBrands: async () => {
        try {
            const response = await getApi("/brands");
            return response;
        } catch (error) {
            throw error;
        }
    }
};

export default brandService;