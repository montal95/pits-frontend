import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
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

  const clickHandler = () => {
    props.addNewPlant(newPlant, props.auth.id);
    history.push(`/plants/${props.plants[props.plants.length - 1].id}`);
  };

  return (
    <div id="new-plant-div">
      <h1>New Plant</h1>
      <Form>
        <Form.Group>
          <Form.Label>Nickname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Species</Form.Label>
          <Form.Control
            type="text"
            placeholder="Species"
            value={plantSpecies}
            onChange={(e) => setPlantSpecies(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Watering Interval</Form.Label>
          <Form.Control
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
            type="datetime-local"
            value={lastWatered}
            onChange={(e) => setLastWatered(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={clickHandler}>
          Submit
        </Button>
      </Form>
    </div>
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
