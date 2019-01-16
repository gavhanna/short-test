import React, { Component } from 'react'
import Bar from './charts/Bar';
import DonutChart from './charts/DonutChart';

export default class ClientSection extends Component {
  render() {
    const data = this.props.data[0];
    const { loading } = this.props;

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
          {
            loading ?
              <span>Loading...</span> :
              <React.Fragment>
                <div className="graph-container">
                  <DonutChart active={data.active} total={data.total} />
                </div>
                <div className="graph-container align-to-bottom">
                  <Bar data={data.lastYear} />
                  <p style={{ color: "white", textAlign: "center" }}>LAST 12 MONTHS</p>
                </div>
                <div className="graph-container increase align-to-bottom" style={{ width: "100px" }}>
                  <div style={{ textAlign: "center", marginBottom: "20px" }}>
                    <i className="fas fa-angle-double-up"></i>
                  </div>
                  <span>
                    {data.increase}
                  </span>
                  <p style={{ color: "white", textAlign: "center" }}>INCREASE</p>
                </div>
              </React.Fragment>
          }
        </div>
      </section>
    )
  }
}
