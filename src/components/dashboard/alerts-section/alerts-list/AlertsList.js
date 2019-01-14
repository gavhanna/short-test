import React, { Component } from 'react'
import AlertsListItem from './AlertsListItem';

export default class AlertList extends Component {
  render() {
    return (
      <ul id="alerts-list">
        <AlertsListItem />
        <AlertsListItem />
        <AlertsListItem />
        <AlertsListItem />
      </ul>
    )
  }
}
