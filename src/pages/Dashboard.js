import React, { Component } from "react";
import { getPlants } from "../actions/plants";
import { connect } from "react-redux";
import { CardDeck, Row, Alert, Jumbotron } from "react-bootstrap";
import PlantCard from "../components/PlantCard";

class Dashboard extends Component {
  loadPlants = async () => {
    if (navigator.onLine === true && this.props.auth !== null) {
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
    console.log(this.props.plants.length);
    const plantCards =
      this.props.plants.length !== 0 ? (
        this.props.plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))
      ) : (
        <Alert variant={"info"} style={{ width: "100%" }}>
          Please click new plant to start tracking!
        </Alert>
      );

    return (
      <Jumbotron className="mt-3">
        <h1>Dashboard</h1>
        <CardDeck>
          <Row>{plantCards}</Row>
        </CardDeck>
      </Jumbotron>
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
