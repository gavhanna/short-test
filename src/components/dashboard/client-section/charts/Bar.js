import React, { Component } from 'react'

// Note:
// This component renders a tall thin div with a grey backround,
// it then overlays a smaller div whose height depends on the values 
// passed in by the props
export default class Bar extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        {this.props.data && this.props.data.map((i, n) => (
          <div className="barchart-bar" key={n} title={i}>
            <div style={{ height: i * 10 + "%" }}></div>
          </div>
        ))}
      </div>
    )
  }
}


