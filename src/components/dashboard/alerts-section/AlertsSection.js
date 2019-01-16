import React, { Component } from 'react'
import AlertsList from './alerts-list/AlertsList';

export default class AlertsSection extends Component {
  constructor() {
    super();
    this.state = {
      numToRender: 3,
      order: "Importance"
    }
  }

  onOrderChange = (e) => {
    this.setState({ order: e.target.value })
  }

  onSeeMoreButtonClick = () => {
    this.setState({
      numToRender: this.state.numToRender + 3
    })
  }

  onViewAllClick = () => {
    this.setState({
      numToRender: this.props.data.length
    })
  }

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
          <select
            onChange={this.onOrderChange}
            className="select-dropdown menu-right hover-animation"
            style={{ marginTop: "20px", padding: "5px", cursor: "pointer", borderRadius: "3px" }}>
            <option value="Importance">IMPORTANCE</option>
            <option value="Name">NAME</option>
          </select>
        </div>

        {
          this.props.loading ?
            <span>Loading...</span> :
            <AlertsList numToRender={this.state.numToRender} data={this.props.data} order={this.state.order} />
        }
        {
          this.props.loading ?
            null :
            <div className="see-more" style={{ textAlign: "center" }}>
              <button onClick={this.onSeeMoreButtonClick}>
                {this.state.numToRender < this.props.data.length ? "SEE MORE" : "THATS ALL FOLKS!"} {this.state.numToRender < this.props.data.length ? <i className="fas fa-caret-down"></i> : null}</button>
            </div>
        }

        <div style={{ margin: "10px 0" }}>
          <span onClick={this.onViewAllClick} className=" hover-animation" style={{ padding: "5px", cursor: "pointer", borderRadius: "3px" }}><strong>VIEW ALL</strong></span>
        </div>
      </section>
    )
  }
}
