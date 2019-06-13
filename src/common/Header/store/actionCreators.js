import {
  SEARCH_INPUT_FOCUS,
  SEARCH_INPUT_BLUR,
  INIT_HOT_LIST,
  PAGE_CHANGE,
  HOT_LIST_OVER,
  HOT_LIST_OUT
} from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

// 无需导出的
// 获取初始化热门列表action
const getInitHotListAction = list => ({
  type: INIT_HOT_LIST,
  list: fromJS(list),
  totalPage: Math.ceil(list.length / 10)
})

// 需要导出的
// 获取热门列表数据请求
export const getList = () => {
  return dispatch => {
    axios.get('/api/headerList.json')
      .then(res => {
        dispatch(getInitHotListAction(res.data));
      })
      .catch (err => {
        console.log(err);
      })
  }
}

// 搜索框focus
export const getSearchInputFocusAction = () => ({
  type: SEARCH_INPUT_FOCUS
})

// 搜索框blur
export const getSearchInputBlurAction = () => ({
  type: SEARCH_INPUT_BLUR
})

export const getPageChangeAction = page => ({
  type: PAGE_CHANGE,
  page
})

export const getHotListOverAction = () => ({
  type: HOT_LIST_OVER
})

export const getHotListOutAction = () => ({
  type: HOT_LIST_OUT
})
