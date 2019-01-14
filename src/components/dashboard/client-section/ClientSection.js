import React, { Component } from 'react'
import Bar from './charts/Bar';
import DonutChart from './charts/DonutChart';

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
        <div className="graphs">
          <div className="graph-container">
            <DonutChart />
            <p style={{ color: "white", textAlign: "center" }}>ACTIVE CLIENTS</p>
          </div>
          <div className="graph-container">
            <Bar data={[1, 4, 3, 5, 6, 7, 3, 8, 4, 5, 3, 7]} />
            <p style={{ color: "white", textAlign: "center" }}>LAST 12 MONTHS</p>
          </div>
        </div>
      </section>
    )
  }
}
