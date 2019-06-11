import { combineReducers } from 'redux';
import headerReducer from '../common/Header/store/reducer';

// 将每个组件的reducer连接起来
const reducer =  combineReducers({
  header: headerReducer
})

export default reducer;
