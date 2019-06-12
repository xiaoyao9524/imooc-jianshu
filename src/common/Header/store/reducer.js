import {
  SEARCH_INPUT_FOCUS,
  SEARCH_INPUT_BLUR,
  INIT_HOT_LIST
} from './actionTypes';

import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  list: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_INPUT_FOCUS:
      return state.set('focused', true);
    case SEARCH_INPUT_BLUR:
      return state.set('focused', false);
    case INIT_HOT_LIST:
      return state.set('list', action.list);
    default: 
      console.log(action.type);
  }
  return state;
}