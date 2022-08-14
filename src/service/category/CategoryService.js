import { getApi } from "service/httpClient";

const CategoryService = {
    filterCategories: async () => {
        try {
            const response = await getApi("/categories");
            return response;
        } catch (error) {
            throw error;
        }
    }
};

export default CategoryService;