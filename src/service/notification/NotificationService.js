import { postApi } from "service/httpClient";

const NotificationService = {
    notifyNewOrder: async (data) => {
        try {
            const response = await postApi("/telegram/new-order", data);
            return response;
        } catch (error) {
            throw error;
        }
    }
};

export default NotificationService;