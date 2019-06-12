import {
  SEARCH_INPUT_FOCUS,
  SEARCH_INPUT_BLUR
} from './actionTypes';
import axios from 'axios';

export const getList = () => {
  return dispatch => {
    console.log('123')
    axios.get('/api/headerList.json')
      .then(res => {
        console.log(res.data);  
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
