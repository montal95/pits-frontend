import React, { useState, useEffect } from "react";
import { Form, Button, Jumbotron } from "react-bootstrap";
import { connect } from "react-redux";
import { updatePlantAction } from "../actions/plants";
import { useHistory, useLocation } from "react-router-dom";

const PlantEdit = (props) => {
  const location = useLocation();
  const history = useHistory();
  const id = parseInt(location.pathname.split("/")[3]);
  const plant = props.plants.find((plant) => plant.id === id);
  const [nickname, setNickname] = useState("");
  const [plantSpecies, setPlantSpecies] = useState("");
  const [wateringInterval, setWateringInterval] = useState("");
  const [lastWatered, setLastWatered] = useState("");

  const setInitialFormState = () => {
    setNickname(plant.nickname);
    setPlantSpecies(plant.plant_species);
    setWateringInterval(plant.watering_interval);
  };

  useEffect(() => {
    if (props.auth === null) {
      history.push("/");
    } else {
      setInitialFormState();
    }
  });

  const updatedPlant = {
    nickname: nickname,
    plant_species: plantSpecies,
    watering_interval: parseInt(wateringInterval),
    last_watered: new Date(lastWatered).toJSON(),
  };

  const clickHandler = async (e) => {
    e.preventDefault();
    await props.updatePlantAction(updatedPlant, id);
    history.push(`/plants/${id}`);
  };

  return (
    <Jumbotron id="edit-plant-div" className="mt-3">
      <h1>Edit Plant</h1>
      <Form onSubmit={clickHandler}>
        <Form.Group>
          <Form.Label>Nickname</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Species</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Species"
            value={plantSpecies}
            onChange={(e) => setPlantSpecies(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Watering Interval</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="How Many Days Between Watering"
            value={wateringInterval}
            onChange={(e) => setWateringInterval(e.target.value)}
            step="1"
            min="0"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date Last Watered</Form.Label>
          <Form.Control
            required
            type="datetime-local"
            value={lastWatered}
            onChange={(e) => setLastWatered(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Jumbotron>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    plants: state.plants,
  };
};

const mapDispatchToProps = {
  updatePlantAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlantEdit);
