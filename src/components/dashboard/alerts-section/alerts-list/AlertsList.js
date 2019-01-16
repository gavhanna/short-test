import React, { Component } from 'react'
import AlertsListItem from './AlertsListItem';

export default class AlertList extends Component {
  render() {
    let { data } = this.props;
    const propsCopy = this.props.data.slice();
    if (this.props.order === "Importance") {
      data = propsCopy.sort((a, b) => a.importance.num < b.importance.num ? -1 : 1)
    } else if (this.props.order === "Name") {
      data = propsCopy.sort((a, b) => a.name < b.name ? -1 : 1)
    }

    const { numToRender } = this.props;
    return (
      <ul id="alerts-list">
        {
          data.map((listItem, i) => {
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
