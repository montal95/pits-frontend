import React, { Component } from "react";
import { checkToken } from "../helpers/index";

class Dashboard extends Component {
  componentDidMount() {
    checkToken(this.props);
  }
  render() {
    return (
      <div>
        <h1>Dashboard Page</h1>
      </div>
    );
  }
}

export default Dashboard;
