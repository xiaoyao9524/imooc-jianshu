import React, { Component } from 'react'
import {
  NoteItem
} from './style';

export default class List extends Component {
  render() {
    return (
      <ul>
        <NoteItem>item</NoteItem>
      </ul>
    )
  }
}
