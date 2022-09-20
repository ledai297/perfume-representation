import { getApi } from "service/httpClient";

const ConfigurationService = {
    fetchDetail: async () => {
        try {
            const response = await getApi("/configuration");
            return response;
        } catch (error) {
            throw error;
        }
    }
};

export default ConfigurationService;