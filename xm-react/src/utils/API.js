import http from './http.js';

export const CategoryAPI = {
        // ajaxData = { fid: ? }
        getData: ajaxData => http('/category/getListByFid', { body: JSON.stringify(ajaxData) }),
};
export const ProductAPI = {
        //ajaxData = { cid: ?, begin: ?, count: ? }
        getData: ajaxData => http('/product/list', { body: JSON.stringify(ajaxData) }),
        // ajaxData = { id: ? }
        getProduct: ajaxData => http('/product/detail', {body: JSON.stringify(ajaxData)})
};
export const CartAPI = {
        init: () => http('/cart/list'),
        // ajaxData={ id: ? }
        increase: ajaxData => http('/cart/increase', {body: JSON.stringify(ajaxData)}),
        // ajaxData={ id: ? }
        decrease: ajaxData => http('/cart/decrease', {body: JSON.stringify(ajaxData)}),
        // ajaxData = { ids: ? }
        remove: ajaxData => http('/cart/remove', {body: JSON.stringify(ajaxData)}),
        // ajaxData = { ids: ?, account: ? }
        settlement: ajaxData => http('/cart/settlement', {body: JSON.stringify(ajaxData)}),
        // ajaxData = { pid: ? }
        addCart: ajaxData => http('/cart/add', {body: JSON.stringify(ajaxData)})
};
export const OrderDetailAPI = {
        getData: ajaxData => http('/order/orderDetail', { body:JSON.stringify(ajaxData) }),
        // ajaxData = { id: ? }
        pay: ajaxData => http('/order/pay', { body: JSON.stringify(ajaxData) })
};
export const OrderAPI = {
        getData: () => http('/order/orderlist')
};
export const ProfileAPI = {
        getName: () => http('/profile/center')
};
export const AddressAPI = {
        getData: () => http('/address/list')
};
export const LoginAPI = {
        //验证码不需要传数据
        getCode: () => http('/login/getcode', { method: 'get' }),
        // ajaxData = { phone: ?, code: ? }
        loginPhone: ajaxData => http('/login/phone', { body: JSON.stringify(ajaxData) }),
        // ajaxData = { account: ?, pwd: ? }
        loginPwd : ajaxData => http('/login/pwd', { body: JSON.stringify(ajaxData) })
};