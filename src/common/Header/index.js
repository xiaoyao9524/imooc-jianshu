import React, { Component } from 'react';

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  HotSearchInfo,
  SearchInfoTitle,
  SearchItem,
  Addition,
  Button
} from './style';

import GlobalIcon from '../../static/iconfont/iconfont';

import { connect } from 'react-redux';

import {
  actionCreators
} from "./store";

const {
  getList,
  getSearchInputFocusAction,
  getSearchInputBlurAction
} = actionCreators;

class Header extends Component {
  render() {
    const { 
      focused,
      handleInputFocus,
      handleInputBlur
    } = this.props;

    return (
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
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <span className="iconfont">&#xe653;</span>
              {/* 热门搜索 */}
              {this.getListArea()}
            </SearchWrapper>
            focus: {focused ? 'y' : 'n'}
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
    )
  }

  getListArea = () => {
    const {focused, list} = this.props;
    if (focused) {
      return (
        <HotSearchInfo>
          <SearchInfoTitle className='clearfix'>
            <span className='title fl'>热门搜索</span>
            <a
              className='fr replace'
              href="/"
            >
              换一批
                </a>
          </SearchInfoTitle>
          <ul>
            {
              list.map(item => (
                <SearchItem key={item}>
                  <a href={`/${item}`}>{item}</a>
                </SearchItem>
              ))
            }
          </ul>
        </HotSearchInfo>
      )
    }
    return null;
  }
}

const manStateToProps = state => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(getList())
      dispatch(getSearchInputFocusAction());
    },
    handleInputBlur() {
      dispatch(getSearchInputBlurAction());
    }
  }
};

export default connect(manStateToProps, mapDispatchToProps)(Header);
