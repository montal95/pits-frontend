import React, { Component } from "react";
import { checkToken } from "../helpers/index";

class PlantNew extends Component {
  componentDidMount() {
    checkToken(this.props);
  }

  render() {
    return (
      <div>
        <h1>New Plant Page</h1>
      </div>
    );
  }
}

export default PlantNew;
