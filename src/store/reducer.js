import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/Header/store';
import { reducer as homeReducer } from '../pages/Home/store';

// 将每个组件的reducer连接起来
const reducer =  combineReducers({
  header: headerReducer,
  home: homeReducer
})

export default reducer;
