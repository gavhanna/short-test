import React, { Component } from 'react'
import AlertsList from './alerts-list/AlertsList';

export default class AlertsSection extends Component {
  render() {
    return (
      <section id="alerts-section">
        <div className="menu">
          <div className="menu-left">
            <h2 style={{ display: "inline" }}>
              ALERTS
            </h2>
            <small style={{ marginLeft: "10px" }}>Latest alerts (41)</small>
          </div>
          <div className="menu-right">
            <div className="options">
              <span><i className="fas fa-chart-pie"></i></span>
              <span><i className="fas fa-filter"></i></span>
              <span><i className="fas fa-undo-alt"></i></span>
              <span><i className="fas fa-cog"></i></span>
              <div className="vertically-center" style={{ marginLeft: "15px" }}>
                <button>SAVE <i className="fas fa-caret-down"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div className="menu">
          <div className="menu-left"></div>
          <div className="menu-right hover-animation" style={{ marginTop: "20px", padding: "5px", cursor: "pointer", borderRadius: "3px" }}>IMPORTANCE <i className="fas fa-caret-down"></i></div>
        </div>

        <AlertsList />
        <div  style={{margin: "10px 0"}}>
        <span className=" hover-animation" style={{padding: "5px", cursor: "pointer", borderRadius: "3px"}}><strong>VIEW ALL</strong></span>
        </div>
      </section>
    )
  }
}
