import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';

export default class DonutChart extends Component {
  render() {
    const { active, total } = this.props;

    const data = {
      labels: ["Active Clients", "Inactive Clients"],
      datasets: [{
        label: '# of Votes',
        data: [active, total - active],
        text: "ff",
        backgroundColor: [
          '#67A3E7',
          "#596169"
        ],
        borderColor: [
          'rgba(0,0,0,0)'
        ],
        borderWidth: 0
      }]
    };

    const options = {
      cutoutPercentage: 70,
      rotation: 1 * Math.PI,
      circumference: 1 * Math.PI,
      legend: {
        display: false
      }
    }

    return (
      <React.Fragment>
        <Doughnut
          data={data}
          options={options}
          height={200}
        />
        <div class="client-count">
          <span>203</span>
        </div>
        <div class="info">
          <span>ACTIVE CLIENTS</span>
        </div>
      </React.Fragment>
    )
  }
}


