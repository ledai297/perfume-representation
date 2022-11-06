import { postApi } from "service/httpClient";

const NotificationService = {
    notifyNewOrder: async (data) => {
        try {
            const response = await postApi("/notification/new-order", data);
            return response;
        } catch (error) {
            throw error;
        }
    },
    subcribe: async (data) => {
        try {
            const response = await postApi("/notification/new-subscriber", data);
            return response;
        } catch (error) {
            throw error;
        }
    }
};

export default NotificationService;