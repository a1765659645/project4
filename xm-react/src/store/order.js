import { OrderAPI } from '../utils/API.js';

const actionTypes = {
        APPENDDATA: 'orderList/APPENDDATA'
};
export const actions = {
        getData: function(){
                return function(dispatch){
                        return OrderAPI.getData()
                                .then(data => {
                                        dispatch({ type: actionTypes.APPENDDATA, payload: data });
                                })
                }
        }
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