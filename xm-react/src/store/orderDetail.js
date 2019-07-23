import { OrderDetailAPI } from '../utils/API.js';

const actionTypes = {
        APPENDDATA: 'product/APPENDDATA',
};
export const actions = {
        getData: function(ajaxData){
                return function(dispatch){
                        return OrderDetailAPI.getData(ajaxData)
                                .then(data => {
                                        dispatch({ type: actionTypes.APPENDDATA, payload: data });
                                })
                }
        },
};
const initialState = {
        list: []
};

const reducer = (state = initialState, { type, payload } = {}) => {
        switch(type) {
                case actionTypes.APPENDDATA:
                        return Object.assign({}, state, { list: [ ...state.list, ...payload ] });
                default:
                        return state;
        }
};

export default reducer;