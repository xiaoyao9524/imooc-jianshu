import {
  SEARCH_INPUT_FOCUS,
  SEARCH_INPUT_BLUR
} from './actionTypes';


export const getSearchInputFocusAction = () => ({
  type: SEARCH_INPUT_FOCUS
})

export const getSearchInputBlurAction = () => ({
  type: SEARCH_INPUT_BLUR
})
