import {
  SEARCH_INPUT_FOCUS,
  SEARCH_INPUT_BLUR,
  INIT_HOT_LIST,
  HOT_LIST_OVER,
  HOT_LIST_OUT,
  PAGE_CHANGE
} from './actionTypes';

import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  hovered: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_INPUT_FOCUS:
      return state.set('focused', true);
    case SEARCH_INPUT_BLUR:
      return state.set('focused', false);
    case INIT_HOT_LIST:
      return state.merge({
        list: action.list,
        totalPage: action.totalPage
      });
    case HOT_LIST_OVER:
      return state.set('hovered', true);
    case HOT_LIST_OUT:
      return state.set('hovered', false);
    case PAGE_CHANGE:
      return state.set('page', action.page);
    default: 
      return state;
  }
}