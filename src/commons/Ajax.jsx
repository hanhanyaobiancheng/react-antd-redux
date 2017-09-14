import axios from 'axios';

const instance = axios.create();

function _setOptions(axiosInstance) {
    axiosInstance.defaults.timeout = 10000;
    axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    axiosInstance.defaults.baseURL = '/';
    axiosInstance.defaults.withCredentials = true; // 允许跨域的cookie访问
    // Add a request interceptor
    axiosInstance.interceptors.request.use(cfg => {
        // Do something before request is sent
        return cfg;
    }, error => {
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
    axiosInstance.interceptors.response.use(response => {
        // Do something with response data
        return response;
    }, error => {
        // Do something with response error
        return Promise.reject(error);
    });
}

_setOptions(instance);

function fetch(url, data, method = 'get', options = {}) {
    let {successTip = false, errorTip = method === 'get' ? '获取数据失败！' : '操作失败！'} = options;

    const {permission} = options;
    if (permission && !_hasPermission(permission)) {
        return new Promise((resolve, reject) => {
            const error = new Error('您无权访问此资源');
            _onShowErrorTip({}, error.message);
            reject(error);
        });
    }

    const CancelToken = axios.CancelToken;
    let cancel;
    const isGet = method === 'get';
    const isMock = _isMock(url, data, method, options);
    let axiosInstance = instance;

    if (isGet && !isMock) {
        url = mosaicUrl(url, data);
    }
    if (isMock) {
        axiosInstance = mockInstance;
        axiosInstance.defaults.baseURL = '/';
    }
    const fetchPromise = new Promise((resolve, reject) => {
        axiosInstance({
            method,
            url,
            data,
            cancelToken: new CancelToken(c => cancel = c),
            ...options,
        }).then(response => {
            _onShowSuccessTip(response, successTip);
            resolve(response.data);
        }, err => {
            const isCanceled = err && err.message && err.message.canceled;
            if (isCanceled) return; // 如果是用户主动cancel，不做任何处理，不会触发任何函数
            _onShowErrorTip(err, errorTip);
            reject(err);
        }).catch(error => {
            reject(error);
        });
    });
    fetchPromise.cancel = function () {
        cancel({
            canceled: true,
        });
    };
    return fetchPromise;
}

/**
 * 发送一个get请求，一般用于查询操作
 * @param {string} url 请求路径
 * @param {object} [params] 传输给后端的数据，正常请求会转换成query string 拼接到url后面
 * @param {object} [options] axios 配置参数
 * @returns {Promise}
 */
export function get(url, params, options) {
    return fetch(url, params, 'get', options);
}

/**
 * 发送一个post请求，一般用于添加操作
 * @param {string} url 请求路径
 * @param {object} [params] 传输给后端的数据
 * @param {object} [options] axios 配置参数
 * @returns {Promise}
 */
export function post(url, params, options) {
    return fetch(url, params, 'post', options);
}


/**
 * 发送一个put请求，一般用于更新操作
 * @param {string} url 请求路径
 * @param {object} [params] 传输给后端的数据
 * @param {object} [options] axios 配置参数
 * @returns {Promise}
 */
export function put(url, params, options) {
    return fetch(url, params, 'put', options);
}

/**
 * 发送一个patch请求，一般用于更新部分数据
 * @param {string} url 请求路径
 * @param {object} [params] 传输给后端的数据
 * @param {object} [options] axios 配置参数
 * @returns {Promise}
 */
export function patch(url, params, options) {
    return fetch(url, params, 'patch', options);
}

/**
 * 发送一个delete请求，一般用于删除数据，params会被忽略（http协议中定义的）
 * @param {string} url 请求路径
 * @param {object} [params] 传输给后端的数据
 * @param {object} [options] axios 配置参数
 * @returns {Promise}
 */
export function del(url, params, options) {
    return fetch(url, params, 'delete', options);
}