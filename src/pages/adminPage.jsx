import React, { Component } from "react";
import DashboardComponents from "../components/dashboardComponents";
import SideBar from "../components/sideBar";

class AdminPage extends Component {
  render() {
    return (
      <div id="admin-page">
        <SideBar />
        <DashboardComponents />
      </div>
    );
  }
}

export default AdminPage;
