import styled from 'styled-components';

export const ListItem = styled.li`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  &:nth-last-of-type(1) {
    border-bottom: none;
  }
  .pic {
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  float: left;
  margin-bottom: 15px;
  width: 458px;
  &.w100 {
    width: 100%;
  }
  .title {
    margin-bottom: 4px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    a {
      color: #333;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .desc {
    margin-bottom: 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
  .other {
    font-size: 12px;
    .score {
      margin-right: 10px;
      font-weight: 400;
      line-height: 20px;
      color: #ea6f5a;
      .icondiamond {
        margin-right: 5px;
        font-size: 12px;
      }
    }
    .nick-name, .commit {
      margin-right: 10px;
      color: #b4b4b4;
      &:hover {
        color: #787878;
      }
    }
    .like, .reward {
      margin-right: 10px;
      color: #b4b4b4;
    }
  }
`;
