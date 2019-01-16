import React, { Component } from 'react'
import ClientSection from './client-section/ClientSection';
import AlertsSection from './alerts-section/AlertsSection';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      clientData: [],
      alertsData: [],
      loading: true
    }
  }

  componentDidMount() {
    this.fetchData().then(data => {
      this.setState({
        clientData: data.clientData,
        alertsData: data.alertsData,
        loading: false
      })
    })
  }

  fetchData = () => {
    return new Promise((resolve, regect) => {
      setTimeout(() => {
        resolve({
          // TODO: fill this stuff in
          clientData: [
            { active: 203, total: 300, lastYear: [1, 4, 3, 5, 6, 7, 3, 8, 4, 5, 3, 7], increase: 104 },
            { active: 250, total: 300, lastYear: [5, 4, 7, 8, 6, 2, 6, 5, 4, 2, 1, 5], increase: 156 },
            { active: 160, total: 300, lastYear: [5, 8, 2, 5, 5, 3, 7, 5, 6, 7, 1, 9], increase: 600 },
          ],
          alertsData: [
            { name: "Adam Compton", content: "Adam's End of Year review", status: "coming up", date: "Feb 03", importance: { num: 1, desc: "Very" } },
            { name: "Emma O'Sullivan", content: "Emma's End of Year review", status: "coming up", date: "Feb 03", importance: { num: 3, desc: "Low" } },
            { name: "Brandon Walsh", content: "Brandon's End of Year review", status: "coming up", date: "Feb 15", importance: { num: 3, desc: "Low" } },
            { name: "David O'Brien", content: "David's End of Year review", status: "coming up", date: "Feb 15", importance: { num: 2, desc: "Mid" } },
            { name: "Sophie O'Connor", content: "Sophie's End of Year review", status: "coming up", date: "Feb 15", importance: { num: 1, desc: "Very" } },
            { name: "Steve Wright", content: "Steve's End of Year review", status: "coming up", date: "Mar 12", importance: { num: 2, desc: "Mid" } },
            { name: "Alan Turing", content: "Alan's End of Year review", status: "coming up", date: "Mar 12", importance: { num: 2, desc: "Mid" } },
            { name: "Peter Parker", content: "Adam's End of Year review", status: "coming up", date: "Mar 12", importance: { num: 1, desc: "Very" } },
            { name: "Neils Bohr", content: "Neils's End of Year review", status: "coming up", date: "Apr 21", importance: { num: 1, desc: "Very" } },
            { name: "Marie Curie", content: "Marie's End of Year review", status: "coming up", date: "Apr 21", importance: { num: 3, desc: "Low" } },
            { name: "Enrico Fermi", content: "Enrico's End of Year review", status: "coming up", date: "Apr 21", importance: { num: 1, desc: "Very" } },
          ]
        });
      }, 1000);
    });
  }

  render() {
    return (
      <div>
        <ClientSection data={this.state.clientData} loading={this.state.loading} />
        <AlertsSection data={this.state.alertsData} loading={this.state.loading} />
      </div>
    )
  }
}

export default Dashboard;