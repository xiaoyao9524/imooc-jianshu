import React from 'react';

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style';

import GlobalIcon from '../../static/iconfont/iconfont';

import { connect } from 'react-redux';

import {
  getSearchInputFocusAction,
  getSearchInputBlurAction
} from "../../store/actionCreators";

const Header = props => (
  <div>
    <GlobalIcon />
    <HeaderWrapper>
      <Logo href='/' />
      <Nav>
        <NavItem className="fl active">
          <span className="iconfont home-icon">&#xe51c;</span>
          首页
            </NavItem>
        <NavItem className="fl">
          <span className="iconfont download-icon">&#xeb7d;</span>
          下载APP
            </NavItem>
        <NavItem className="fr">登陆</NavItem>
        <NavItem className="fr">
          <span className="iconfont Aa">&#xe659;</span>
        </NavItem>
        <SearchWrapper className='search-wrapper fl'>
          <NavSearch
            className='nav-search'
            onFocus={props.handleInputFocus}
            onBlur={props.handleInputBlur}
          />
          <span className="iconfont">&#xe653;</span>
        </SearchWrapper>
        focus: {props.focused ? 'y' : 'n'}
        <Addition>
          <Button className='writing'>
            <span className="iconfont writing-icon">&#xe628;</span>
            写文章
              </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </Nav>
    </HeaderWrapper>
  </div>
);

const manStateToProps = state => {
  return {
    focused: state.focused
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      const action = getSearchInputFocusAction();
      dispatch(action);
    },
    handleInputBlur() {
      const action = getSearchInputBlurAction();
      dispatch(action);
    }
  }
};

export default connect(manStateToProps, mapDispatchToProps)(Header);
