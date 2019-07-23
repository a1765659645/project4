//总仓库
// 导入redux中的createStore、combineReducers函数
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';//使dispatch可以接受函数参数，来发送ajax
// 导入子reducer
import category , { actions as CategoryActions } from './category.js';
import product, { actions as ProductActions } from './product.js';
import cart, { actions as CartActions } from './cart.js';
import orderDetail, { actions as OrderDetailActions } from './orderDetail.js';
import order, { actions as OrderActions } from './order.js';
import address, { actions as AddressActions } from './address.js';

//统一导入所有子仓库导出的actions，并统一整合export导出，让组件在使用时代码更优雅
export {
        CategoryActions,
        ProductActions,
        CartActions,
        OrderDetailActions,
        OrderActions,
        AddressActions
}
// 声明一个总reducer,由各个子reducer组成
//创建store仓库并export default 导出
const reducer = combineReducers({
        category,
        product,
        cart,
        orderDetail,
        order,
        address
});

// 声明并创建总仓库
const store = createStore(
        reducer,
        compose(
                applyMiddleware(thunk),         //中间件
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    //redux调试
));
export default store;