import React, { useState, useEffect } from "react";
import { Form, Button, Jumbotron } from "react-bootstrap";
import { connect } from "react-redux";
import { addNewPlant } from "../actions/plants";
import { useHistory } from "react-router-dom";

const PlantNew = (props) => {
  const [nickname, setNickname] = useState("");
  const [plantSpecies, setPlantSpecies] = useState("");
  const [wateringInterval, setWateringInterval] = useState("");
  const [lastWatered, setLastWatered] = useState("");
  const history = useHistory();

  const newPlant = {
    nickname: nickname,
    plant_species: plantSpecies,
    watering_interval: parseInt(wateringInterval),
    last_watered: new Date(lastWatered).toJSON(),
  };

  const clickHandler = (e) => {
    e.preventDefault();
    props.addNewPlant(newPlant, props.auth.id, history);
  };

  useEffect(() => {
    if (props.auth === null) {
      history.push("/");
    }
  });

  return (
    <Jumbotron id="new-plant-div">
      <h1>New Plant</h1>
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
  addNewPlant,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlantNew);
