import { combineReducers } from 'redux';
import { reducer as headerReducer } from '../common/Header/store';

// 将每个组件的reducer连接起来
const reducer =  combineReducers({
  header: headerReducer
})

export default reducer;
