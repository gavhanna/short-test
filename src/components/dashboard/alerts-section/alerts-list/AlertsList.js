import React, { Component } from 'react'
import AlertsListItem from './AlertsListItem';

export default class AlertList extends Component {
  render() {
    const { numToRender } = this.props;
    return (
      <ul id="alerts-list">
        {
          this.props.data.map((listItem, i) => {
            if (i < numToRender) {
              return <AlertsListItem key={i} itemData={listItem} />;
            } else {
              return null
            }
          }
          )
        }
      </ul>
    )
  }
}
