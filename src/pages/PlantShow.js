import React, { Component } from "react";
import { checkToken } from "../helpers/index";

class PlantShow extends Component {
  componentDidMount() {
    checkToken(this.props);
  }

  render() {
    return (
      <div>
        <h1>Plant Show Page</h1>
      </div>
    );
  }
}

export default PlantShow;
