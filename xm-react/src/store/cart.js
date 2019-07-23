import { CartAPI } from '../utils/API.js';

const actionTypes = {
        INIT: 'cart/INIT',
        INCREASE: 'cart/INCREASE',
        DECREASE: 'cart/DECREASE',
        TOGGLE1: 'cart/TOGGLE1',
        TOGGLE2: 'cart/TOGGLE2',
        TOGGLEALL1: 'cart/TOGGLEALL1',
        TOGGLEALL2: 'cart/TOGGLEALL2',
        REMOVE: 'cart/REMOVE',
        SETTLEMENT: 'cart/SETTLEMENT'
};

export const actions ={
        init: () => dispatch => {
                return CartAPI.init()
                        .then(data => dispatch({ type: actionTypes.INIT, payload: data }));
        },
        increase: id => dispatch => {
                return CartAPI.increase({ id })
                        .then(() => dispatch({ type: actionTypes.INCREASE, payload:id }));
        },
        decrease: id => dispatch => {
                return CartAPI.decrease({ id })
                        .then(() => dispatch({ type: actionTypes.DECREASE, payload:id }));
        },
        toggle1: id => ({ type: actionTypes.TOGGLE1, payload: id }),
        toggle2: id => ({ type: actionTypes.TOGGLE2, payload: id }),
        toggleAll1: checked => ({ type: actionTypes.TOGGLEALL1, payload: checked }),
        toggleAll2: checked => ({ type: actionTypes.TOGGLEALL2, payload: checked }),
        remove: () => (dispatch, getState) => {
                let ids = [];
                getState().cart.list.forEach(function(item){
                        if(item.select2) ids.push(item.id);
                });
                if(ids.length < 1) { alert('请先选择'); return Promise.resolve(); }
                return CartAPI.remove({ ids: JSON.stringify(ids) })
                        .then(() => dispatch({ type: actionTypes.SETTLEMENT, payload: ids }));
        },
        settlement: () => (dispatch, getState) => {
                let ids = [], account = 0;
                getState().cart.list.forEach(function(item){
                        if(item.select1)  {
                                ids.push(item.id);
                                account += item.price * item.count;
                        }
                });
                if(ids.length < 1) { alert('请先选择'); return Promise.resolve(); }
                return CartAPI.settlement({ ids: JSON.stringify(ids), account })
                        .then(data => {
                                dispatch({ type: actionTypes.SETTLEMENT, payload: ids });
                                return data;
                        });
        }
};

const initialState = { list: [] };
export default (state = initialState, { type, payload } = {}) => {
        console.log(payload);
        let list = state.list.slice(0), target = null;
        switch(type) {
                case actionTypes.INIT:
                        list = payload;
                        list.forEach(item => {  //给每一个item加一个select属性，表示选中买还是没有买
                                item.select1 = true;
                                item.select2 = false;
                        });
                        return Object.assign({}, state, { list });
                case actionTypes.INCREASE:
                        target = list.find(item => item.id === payload);
                        target.count +=1;
                        return Object.assign({}, state, { list });
                case actionTypes.DECREASE:
                        target = list.find(item => item.id ===payload);
                        target.count -= 1;
                        return Object.assign({}, state, { list });
                case actionTypes.TOGGLE1:
                        target = list.find(item => item.id ===payload);
                        target.select1 = !target.select1;
                        return Object.assign({}, state, { list });
                case actionTypes.TOGGLE2:
                        target = list.find(item => item.id ===payload);
                        target.select2 = !target.select2;
                        return Object.assign({}, state, { list });
                case actionTypes.TOGGLEALL1:
                        list.forEach(item => item.select1 = payload);
                        return Object.assign({}, state, { list });
                case actionTypes.TOGGLEALL2:
                        list.forEach(item => item.select2 = payload);
                        return Object.assign({}, state, { list });
                case actionTypes.REMOVE:
                case actionTypes.SETTLEMENT:
                        list = list.filter(item => payload.indexOf(item.id) === -1);
                        return Object.assign({}, state, { list });
                default:
                        return state;
        }
};