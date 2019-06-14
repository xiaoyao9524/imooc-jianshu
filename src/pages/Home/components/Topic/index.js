import React, { Component } from 'react'
import { 
  TopicWrapper,
  TopicItem
} from './style';
import { connect } from 'react-redux';

class Topic extends Component {
  render() {
    const list = this.props.topicList.toJS();

    return (
      <TopicWrapper>
         {list.map(item => (
          <TopicItem key={item.id}>
            <img 
              className='topic-pic'
              src={item.imgUrl}
              alt=""
            />
          {item.title}
          </TopicItem>
        ))
        }
      </TopicWrapper>
    )
  }
};

const mapStateToProps = state => ({
  topicList: state.getIn(['home', 'topicList'])
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
