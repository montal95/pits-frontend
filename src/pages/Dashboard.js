import React, { Component } from "react";
import { getPlants } from "../actions/plants";
import { connect } from "react-redux";
import { CardDeck, Row } from "react-bootstrap";
import PlantCard from "../components/PlantCard";

class Dashboard extends Component {
  loadPlants = async () => {
    if (navigator.onLine === true) {
      this.props.getPlants(this.props.auth.id);
    } else if (!navigator.onLine && this.props.auth === null) {
      this.props.history.push("/");
    }
  };

  componentDidMount() {
    if (this.props.auth === null) this.props.history.push("/");
    this.loadPlants();
  }

  render() {
    const plantCards = this.props.plants
      ? this.props.plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))
      : "";

    return (
      <div>
        <h1>Dashboard</h1>
        <CardDeck>
          <Row>{plantCards}</Row>
        </CardDeck>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth, plants: state.plants };
};

const mapDispatchToProps = {
  getPlants,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
