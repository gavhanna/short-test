import React, { Component } from 'react'

export default class AlertsListItem extends Component {
  render() {
    return (
      <li className="alerts-list-item">
        <div className="alerts-list-item-name">
          <div className="vertically-center">
            <span className="cake-icon">
              <i className="fas fa-birthday-cake"></i>
            </span>
          </div>
          <h4 className="vertically-center">Adam Compton</h4>
        </div>
        <div className="alerts-list-item-title vertically-center">
          <span>
            Adam's End of Year review
          </span>
          <span>coming up</span>
        </div>
        <div className="alerts-list-item-date vertically-center">
          <span>
            Feb 03
          </span>
        </div>
        <div className="alerts-list-item-importance vertically-center" style={{ textAlign: "right" }}>
          <span>
            <strong>VERY <i className="fas fa-signal"></i></strong>
          </span>
        </div>
      </li>
    )
  }
}
