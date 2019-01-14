import React, { Component } from 'react'
import ClientSection from './client-section/ClientSection';
import AlertsSection from './alerts-section/AlertsSection';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ClientSection />
        <AlertsSection />
      </div>
    )
  }
}

export default Dashboard;