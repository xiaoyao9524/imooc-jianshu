import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  margin: 0 auto;
  width: 960px;
`;

export const HomeLeft = styled.div`
  float: left;
  padding: 30px 0 0 15px;
  width: 625px;
  .banner-img {
    width: 625px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  padding-top: 30px;
  width: 280px;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  border: 1px solid #dcdcdc;
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  text-align: center;
`;
