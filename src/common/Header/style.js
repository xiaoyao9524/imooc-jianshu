import styled from 'styled-components';
import logoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic}) 0 0 no-repeat;
  background-size: contain;
`;

export const Nav = styled.div`
  box-sizing: border-box;
  padding-right: 70px;
  width: 960px;
  height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.active {
    color: #ea6f5a;
  }
  .home-icon {
    font-size: 20px;
  }
  .download-icon {
    font-size: 20px;
  }
  .Aa {
    font-size: 24px;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    transition: .5s;
    background-color: #eee;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  width: 160px;
  height: 38px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  transition: .5s;
  &:focus {
    width: 240px;
    &+.iconfont {
      color: #fff;
      background-color: #696969;
    }
  }
  &::placeholder {
    color: #999;
  }
`;

export const HotSearchInfo = styled.div`
  position: absolute;
  left: 20px;
  top: 100%;
  box-sizing: border-box;
  width: 250px;
  margin-top: 12px;
  padding: 20px 20px 10px;
  border-radius: 4px;
  border-bottom: 1px solid #f0f0f0;
  box-shadow:  0 0 8px rgba(0,0,0,.2);
  background: #fff;
  &:before {
    content: "";
    position: absolute;
    left: 27px;
    top: -5px;
    z-index: -1;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    box-shadow: 0 0 8px rgba(0,0,0,.2);
  }
  &:after {
    content: "";
    position: absolute;
    left: 20px;
    bottom: 99%;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
  }
`;

export const SearchInfoTitle = styled.div`
  .title {
    font-size: 14px;
    color: #969696;
  }
  .replace {
    font-size: 13px;
    color: #969696;
    background-color: transparent;
    border-width: 0;
    padding: 0;
    text-decoration: none;
    .spin {
      display: block;
      float: left;
      width: auto;
      height: auto;
      font-size: 12px;
      margin-right: 2px;
      transition: transform .2s;
      transform: rotate(0deg);
      transform-origin: center center;
    }
    &:hover {
      color: #2f2f2f;
    }
  }
`;

export const SearchItem = styled.li`
  margin-right: 10px;
  display: inline-block;
  line-height: 28px;
  height: 32px;
  a {
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    line-height: 28px;
    &:hover {
      color: #333;
      border-color: #b4b4b4;
    }
  }
`;

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin-top: 9px; 
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149;
  }
  .writing-icon {
    font-size: 20px;
  }
`;

export const TransitionTest = styled.div`
  width: 100px;
  height: 100px;
  background: pink;

  &.fade-enter, &.fade-exit-done {
    width: 100px;
  }
  &.fade-enter-active {
    transition: 1s;
    width: 160px;
  }
  
  &.fade-exit, &.fade-enter-done {
    width: 160px;
  }

  &.fade-exit-active {
    transition: 1s;
    width: 100px;
  }
`;
