import React, { Component } from 'react'
import BarChart from './charts/BarChart';
import DonutChart from './charts/DonutChart';
import ClientOptions from './client-options/ClientOptions';

export default class ClientSection extends Component {
  constructor() {
    super();
    this.state = {
      selectedDataSet: {},
      optionsMenuOpen: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data && !nextProps.loading) {
      this.setState({ selectedDataSet: nextProps.data[0] })
    }
  }

  onOptionsClick = (e) => {
    this.setState({ optionsMenuOpen: !this.state.optionsMenuOpen })
  }

  setSelectedData = (i) => {
    const id = parseInt(i)
    this.setState({ selectedDataSet: this.props.data[id] });
  }

  render() {
    const data = this.state.selectedDataSet;
    const { loading } = this.props;

    return (
      <section id="client-section">
        <div className="menu" style={{ flexDirection: "row" }}>
          <div className="menu-left">
            <h2>CLIENTS <i className="fas fa-caret-right"></i></h2>
          </div>
          <div className="menu-right">
            <div className="options">
              <span
                onClick={this.onOptionsClick}
                title="Switch data sets"
                style={{ position: "relative" }}
              ><i className="fas fa-cog" style={{ color: "#747F86" }}></i>
                {
                  this.state.optionsMenuOpen ?
                    <ClientOptions dataSets={this.props.data} setSelectedData={this.setSelectedData} /> :
                    null
                }
              </span>
            </div>
          </div>
        </div>
        <div className="graphs">
          {
            loading ?
              <span className="loading">Loading...</span> :
              <React.Fragment>
                <div className="graph-container">
                  <DonutChart active={data.active} total={data.total} />
                </div>
                <div className="graph-container align-to-bottom">
                  <BarChart data={data.lastYear} />
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
