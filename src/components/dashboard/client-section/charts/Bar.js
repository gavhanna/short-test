import React, { Component } from 'react'

// Note:
// This component renders a tall thin div with a grey backround,
// it then overlays a smaller div whose height depends on the values 
// passed in by the props
export default class Bar extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        {this.props.data.map((i, n) => (
          <div key={n} title={i} style={{ width: "10%", height: "80px", background: "#596169", margin: "4px", opacity: "1", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <div style={{ width: "100%", height: i * 10 + "%", background: "#67A3E7" }}></div>
          </div>
        ))}
      </div>
    )
  }
}


