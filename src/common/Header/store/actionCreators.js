import {
  SEARCH_INPUT_FOCUS,
  SEARCH_INPUT_BLUR,
  INIT_HOT_LIST
} from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

export const getInitHotListAction = list => ({
  type: INIT_HOT_LIST,
  list: fromJS(list)
})

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

export const getSearchInputFocusAction = () => ({
  type: SEARCH_INPUT_FOCUS
})

export const getSearchInputBlurAction = () => ({
  type: SEARCH_INPUT_BLUR
})
