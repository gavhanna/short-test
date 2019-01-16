import React, { Component } from 'react'

export default class ClientOptions extends Component {
  onItemClick = (e) => {
    if (e.target.nodeName === "LI") {
      this.props.setSelectedData(e.target.dataset.item);
    }
  }


  render() {
    return (
      <ul className="client-options" onClick={this.onItemClick}>
        {
          this.props.dataSets.map((dataSet, i) =>
            <li key={i} data-item={i}>Dataset {i}</li>
          )
        }
      </ul>
    )
  }
}
