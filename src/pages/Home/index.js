import React, { Component } from 'react'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';

import List from './components/List';
import Column from './components/Column';
import Recommend from './components/Recommend';
import Writer from './components/Writerr';

class Home extends Component {
  render() {
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
      </HomeWrapper>
    )
  }
}

export default Home;
