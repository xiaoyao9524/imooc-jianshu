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
  getSearchInputBlurAction,
  getPageChangeAction,
  getHotListOverAction,
  getHotListOutAction
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
              <span className="iconfont home-icon">&#xe600;</span>
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
              <span className="iconfont zoom">&#xe653;</span>
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

  replaceList = () => {
    const {totalPage} = this.props;

    let { page } = this.props;

    if (page === totalPage) {
      page = 1;
    } else {
      page++;
    }
    this.props.handlePageChange(page, this.spinIcon)
  }

  getListArea = () => {
    const {focused, list, page, totalPage, hovered} = this.props;
    
    const jsList = list.toJS();

    let start = (page - 1) * 10;

    let end = page === totalPage ? 
      jsList.length :
      (page - 1) * 10 + 10

    let renderList = jsList.slice(start, end);
      
      return (
        <HotSearchInfo
          className='hot-search-info'
          style={{visibility: (focused || hovered) ? 'visible' : 'hidden'}}
          onMouseEnter={
            this.props.handleOver
          }
          onMouseLeave={
            this.props.handleOut
          }
        >
          <SearchInfoTitle className='clearfix'>
            <span className='title fl'>热门搜索</span>
            <a
              className='fr replace'
              href='void: 0;'
              onClick={() => {
                this.replaceList();
              }}
            >
              <span 
                ref={icon => {this.spinIcon = icon}}
                className='iconfont spin'
                // style={{
                //   transform: `rotate(${page * 360}deg)`
                // }}
              >&#xe851;</span>
              <span>换一批</span>
            </a>
          </SearchInfoTitle>
          <ul
            style={{paddingTop: 10}}
          >
            {
              renderList.map(item => (
                <SearchItem key={item}>
                  <a href={`/${item}`}>{item}</a>
                </SearchItem>
              ))
            }
          </ul>
        </HotSearchInfo>
      )
  }
}

const manStateToProps = state => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    hovered: state.getIn(['header', 'hovered'])
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
    },
    handlePageChange (page, spin) {
      spin.style.transform = `rotate(${page * 360}deg)`;
      dispatch(getPageChangeAction(page))
    },
    handleOver () {
      dispatch(getHotListOverAction());
    },
    handleOut () {
      dispatch(getHotListOutAction());
    }
  }
};

export default connect(manStateToProps, mapDispatchToProps)(Header);
