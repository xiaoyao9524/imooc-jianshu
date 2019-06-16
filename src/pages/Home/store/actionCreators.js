import {
  LOAD_MORE_LIST,
  CHANGE_SHOW_SCROLL
} from './actionTypes';

export const getLoadMoreListAction = () => ({
  type: LOAD_MORE_LIST
})

export const getChangeShowScrollAction = flag => ({
  type: CHANGE_SHOW_SCROLL,
  flag
})
