import React, { Component } from "react";
import { checkToken } from "../helpers/index";

class PlantEdit extends Component {
  componentDidMount() {
    checkToken(this.props);
  }

  render() {
    return (
      <div>
        <h1>Plant Edit Page</h1>
      </div>
    );
  }
}

export default PlantEdit;
