import React, { PureComponent } from 'react'
import {
  ListItem,
  ListInfo,
  LoadMore
} from './style';
import { connect } from 'react-redux';
import {
  getLoadMoreListAction
} from '../../store/actionCreators';
import { Link } from 'react-router-dom';

class List extends PureComponent {
  render() {
    console.log(this.props);
    const { articleList, getMoreList } = this.props;

    return (
      <ul>
        {
          articleList.map(item => (
            <ListItem key={item.id}>
              {
                item.imgUrl ? 
                <img className='pic' src={item.imgUrl} alt={item.title} /> :
                ''
              }
              <ListInfo className={`${item.imgUrl ? '' : 'w100'}`}>
                <h3 className='title'>
                  <Link to='/detail'>{item.title}</Link>
                </h3>
                <p className='desc'>{item.content}</p>
                <div className='other'>
                  <span className='score'>
                    <span className="iconfont icondiamond"></span>
                    {item.scope}
                  </span>
                  <a href="void: 0;" className="nick-name">{item.nickName}</a>
                  <a href="void: 0;" className="commit">
                    <span className="iconfont iconpinglun"></span>
                    {item.commit}
                  </a>
                  <span className="like">
                    <span className="iconfont iconxihuan"></span>
                    {item.like}
                  </span>
                  {
                    item.reward ?
                    (<span className="reward">
                      <span className="iconfont icondashang"></span>
                      {item.reward}
                    </span>):
                    ''
                  }
                </div>
              </ListInfo>
            </ListItem>
          ))
        }
        <LoadMore className="load-more">
          <a href='void: 0;' onClick={getMoreList}>加载更多</a>
        </LoadMore>
      </ul>
    )
  }
}

const mapState = state => ({
  articleList: state.getIn(['home', 'articleList']).toJS()
})

const mapDispatch = dispatch => ({
  getMoreList () {
    dispatch(getLoadMoreListAction());
  }
})

export default connect(mapState, mapDispatch)(List);
