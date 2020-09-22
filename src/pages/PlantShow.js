import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { calcDaysUntil } from "../helpers/index";
import { waterPlant } from "../actions/plants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";

const PlantShow = (props) => {
  const location = useLocation();
  const id = parseInt(location.pathname.split("/")[2]);
  const plant = props.plants.find((plant) => plant.id === id);
  const date = new Date(plant.last_watered);
  const daysUntilWatering = calcDaysUntil(date, plant.watering_interval);
  const daysUntilColor = daysUntilWatering <= 1 ? "text-danger" : "";

  const waterPlantClick = async () => {
    const newDate = new Date().toJSON();
    const updatedPlant = { ...plant, last_watered: newDate };
    props.waterPlant(updatedPlant);
  };

  return (
    <Jumbotron>
      <h1>{plant.nickname}</h1>
      <ul>
        <li>Species: {plant.plant_species}</li>
        <li>Water every {plant.watering_interval} days</li>
        <li>Last watered on: {date.toDateString()}</li>
        <li>
          <span className={daysUntilColor}>
            {daysUntilWatering >= 0
              ? `Days until next watering: ${daysUntilWatering}`
              : `Late for watering by ${-daysUntilWatering} days`}
          </span>
        </li>
      </ul>
      <p>
        <Button variant="primary" className="mr-2" onClick={waterPlantClick}>
          Water now <FontAwesomeIcon icon={faTint} />
        </Button>
        <Button variant="secondary" href={`/plants/edit/${id}`}>
          Edit
        </Button>
      </p>
    </Jumbotron>
  );
};

const mapStateToProps = (state) => {
  return {
    plants: state.plants,
  };
};

const mapDispatchToProps = { waterPlant };

export default connect(mapStateToProps, mapDispatchToProps)(PlantShow);
