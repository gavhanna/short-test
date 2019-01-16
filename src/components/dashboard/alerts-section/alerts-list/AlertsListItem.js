import React, { Component } from 'react'

export default class AlertsListItem extends Component {
  render() {
    const { itemData } = this.props;
    return (
      <li className="alerts-list-item">
        <div className="alerts-list-item-name">
          <div className="vertically-center">
            <span className="cake-icon">
              <i className="fas fa-birthday-cake"></i>
            </span>
          </div>
          <h4 className="vertically-center">{itemData.name}</h4>
        </div>
        <div className="alerts-list-item-title vertically-center">
          <span>
            {itemData.content}
          </span>
          <span>{itemData.status}</span>
        </div>
        <div className="alerts-list-item-date vertically-center">
          <span>
            {itemData.date}
          </span>
        </div>
        <div className="alerts-list-item-importance vertically-center" style={{ textAlign: "right" }}>
          <span>
            <strong>{itemData.importance.desc} <i className="fas fa-signal"></i></strong>
          </span>
        </div>
      </li>
    )
  }
}
