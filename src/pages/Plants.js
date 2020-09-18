import React, { Component } from "react";
import { checkToken } from "../helpers/index";

class Plants extends Component {
  componentDidMount() {
    checkToken(this.props);
  }

  render() {
    return (
      <div>
        <h1>Plants Page</h1>
      </div>
    );
  }
}

export default Plants;
