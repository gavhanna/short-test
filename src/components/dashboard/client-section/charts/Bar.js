import React, { Component } from 'react'

export default class Bar extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        {this.props.data.map(i => (
          <div style={{ width: "10%", height: "80px", background: "#596169", margin: "4px", opacity: "1", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <div style={{ width: "100%", height: i * 10 + "%", background: "#67A3E7" }}></div>
          </div>
        ))}
      </div>
    )
  }
}


