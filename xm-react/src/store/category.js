//此文件是category子仓库

//导入http中的CategoryAPI
import { CategoryAPI } from '../utils/API.js';
// action types
const actionTypes = {
        APPENDDATA: 'category/APPENDDATA',
        RECORDFID: 'category/RECORDFID'
};

//action creator
//帮助组件产生dispatch函数调用时需要参数，让组件不去关心action对象怎么构造，ajax怎么发
//组件需要关心的是要把什么数据通过action携带，ajax请求要传什么参数
export const actions ={
        //appendData: payload => ({ type:actionTypes.APPENDDATA, payload })
        getData: function(fid) {
                return function(dispatch, getState) {
                        if(getState().category.scanedFids.indexOf(fid) !== -1)
                                return Promise.resolve(fid === 0 ? getState().category.list[0].id : undefined);
                        else return CategoryAPI.getData({ fid })
                                .then(data => {
                                        dispatch({ type: actionTypes.RECORDFID, payload: fid });
                                        dispatch({ type: actionTypes.APPENDDATA, payload: data });
                                        if(fid === 0) return data[0].id;        //返回组件进行收尾
                                })
                }
        }
};

const initialState = {
        list: [],                              //记录用户所有看过的分类数据，无论一级还是二级
        scanedFids: []                  //记录用户所有看过的分类的fid值，用于缓存
};

const reducer = (state = initialState, { type, payload } = {}) => {
        switch(type) {
                case actionTypes.APPENDDATA:
                        return Object.assign({}, state, { list: [ ...state.list, ...payload ] });
                case actionTypes.RECORDFID:
                        return Object.assign({}, state, { scanedFids: [ ...state.scanedFids, payload ] });
                default:
                        return state;
        }
};

export default reducer;