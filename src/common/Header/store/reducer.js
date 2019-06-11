import {
  SEARCH_INPUT_FOCUS,
  SEARCH_INPUT_BLUR
} from './actionTypes';

const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  
  switch (action.type) {
    case SEARCH_INPUT_FOCUS:
      newState.focused = true;
      break;
    case SEARCH_INPUT_BLUR:
      newState.focused = false;
      break;
    default: 
      console.log(action.type);
  }
  return newState;
}