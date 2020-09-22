import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getPlants } from "../actions/plants";
import { connect } from "react-redux";
import { CardGroup } from "react-bootstrap";
import PlantCard from "../components/PlantCard";

const Dashboard = (props) => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  
  const loadPlants = async () => {
    if (loading && navigator.onLine === true) {
      props.getPlants(props.auth.id);
      setLoading(false);
    } else if (!navigator.onLine && props.auth === {}) {
      history.push("/");
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPlants();
  }, [loading]);

  const plantCards = props.plants
    ? props.plants.map((plant) => <PlantCard key={plant.id} plant={plant} />)
    : "";

  return (
    <div>
      <h1>Dashboard</h1>
      <CardGroup>{plantCards}</CardGroup>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth, plants: state.plants };
};

const mapDispatchToProps = {
  getPlants,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
