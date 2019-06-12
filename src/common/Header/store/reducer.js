import {
  SEARCH_INPUT_FOCUS,
  SEARCH_INPUT_BLUR
} from './actionTypes';

import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  lsit: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_INPUT_FOCUS:
      return state.set('focused', true);
    case SEARCH_INPUT_BLUR:
      return state.set('focused', false);
    default: 
      console.log(action.type);
  }
  return state;
}