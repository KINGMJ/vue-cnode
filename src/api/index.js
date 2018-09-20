import axios from 'axios';
import Constant from '../utils/constant';

//导入所有api模块
import Home from './home';


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = Constant.API_URL;

/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, params)
            .then(response => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

/**
 * 封装post方法
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
export function post(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

//导出所有模块
export default {
    Home: Home
}
