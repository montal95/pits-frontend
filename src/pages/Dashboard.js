import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getPlants } from "../actions/plants";
import { connect } from "react-redux";
import { CardGroup } from "react-bootstrap";
import PlantCards from "../components/PlantCard";

import { fetchPlants } from "../api/plants";

const Dashboard = (props) => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  const loadPlants = async () => {
    if (loading && navigator.onLine === true) {
      const data = await fetchPlants(props.auth.id);
      props.getPlants(data);
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

  const plantCards = props.plants.map((plant) => (
    <PlantCards key={plant.id} plant={plant} />
  ));

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
