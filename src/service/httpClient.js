const axios = require('axios').default;
const qs = require("query-string");

const instance = axios.create({
    baseURL: 'https://perfume-service.azurewebsites.net/api',
    timeout: 30000,
    headers: {
        'X-Custom-Header': 'foobar',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    },
    paramsSerializer: (params) => {
        return qs.stringify(params);
    }
});

export const getApi = async (url, params) => {
    try{
        var response = await instance.get(url, {
            method: 'get',
            url,
            params
        });
        return response;
    }
    catch(error){
        throw error;
    }
}

export const postApi = async (url, data) => {
    try{
        var response = await instance.post(url, {
            method: 'post',
            url,
            data
        });
        return response;
    }
    catch(error){
        throw error;
    }
}
