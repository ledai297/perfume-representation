const axios = require('axios').default;

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 30000,
    headers: {
        'X-Custom-Header': 'foobar',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
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
