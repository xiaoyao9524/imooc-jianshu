import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ColumnItem } from './style';

class Column extends Component {
  render() {
    const { list } = this.props;
    console.log(list);

    return (
      <ul>
        {
          list.map(item => (
            <ColumnItem key={item.id}>
              <a href={item.href} alt='Banner' target='_black'>
                <img src={item.imgUrl} alt="Banner"/>
              </a>
            </ColumnItem>
          ))
        }
      </ul>
    )
  }
}

const mapState = state => ({
  list: state.getIn(['home', 'columnList']).toJS()
})

export default connect(mapState, null)(Column);
