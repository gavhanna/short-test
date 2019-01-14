import React, { Component } from 'react'

export default class ClientSection extends Component {
  render() {
    return (
      <section id="client-section">
        <div className="menu">
          <div className="menu-left">
            <h2>CLIENTS <i className="fas fa-caret-right"></i></h2>

          </div>
          <div className="menu-right">
            <div className="options">
              <span><i className="fas fa-cog" style={{ color: "#747F86" }}></i></span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
