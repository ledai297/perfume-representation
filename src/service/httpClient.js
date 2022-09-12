const axios = require('axios').default;
const qs = require("query-string");

const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
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
