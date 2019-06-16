import React, { Component } from 'react'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';
import { connect } from 'react-redux';

import List from './components/List';
import Column from './components/Column';
import Recommend from './components/Recommend';
import Writer from './components/Writerr';

import {
  getChangeShowScrollAction
} from './store/actionCreators';

class Home extends Component {

  componentDidMount = () => {
    this.bindEvent();
  }

  componentWillUnmount = () => {
    console.log('unMount')
    window.removeEventListener('scroll', this.handleScroll)
  }

  bindEvent = () => {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = e => {
    const { showScroll, changeShowScroll } = this.props;
    const { scrollY } = window;

    if (scrollY >= 60 && !showScroll) {
      return changeShowScroll(true);
    }
    if (scrollY < 60 && showScroll) {
      return changeShowScroll(false);
    }
  }

  handleScollTop () {
    window.scrollTo(0, 0);
  }

  render() {
    const { showScroll } = this.props;

    return (
      <HomeWrapper>
        {/* 左侧内容 */}
        <HomeLeft className='home-left'>
          <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <List />
        </HomeLeft>
        {/* 右侧内容 */}
        <HomeRight className='home-right'>
          <Column/>
          <Recommend/>
          <Writer/>
        </HomeRight>
        {
          showScroll ?
            (<BackTop onClick={this.handleScollTop}>
              回到顶部
            </BackTop>) :
            ''
        }
      </HomeWrapper>
    )
  }
}

const mapState = state => ({
  showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatch = dispatch => ({
  changeShowScroll (flag) {
    dispatch(getChangeShowScrollAction(flag));
  }
})

export default connect(mapState, mapDispatch)(Home);
