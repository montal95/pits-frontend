import React, { useEffect } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { calcDaysUntil } from "../helpers/index";
import { waterPlant, deletePlant } from "../actions/plants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const PlantShow = (props) => {
  const location = useLocation();
  const id = parseInt(location.pathname.split("/")[2]);
  const plant = props.auth
    ? props.plants.find((plant) => plant.id === id)
    : { nickname: "", watering_interval: 1 };
  const history = useHistory();
  const date = props.auth ? new Date(plant.last_watered) : new Date();
  const daysUntilWatering = props.auth
    ? calcDaysUntil(date, plant.watering_interval)
    : 1;
  const daysUntilColor = daysUntilWatering <= 1 ? "text-danger" : "";

  const waterPlantClick = async () => {
    const newDate = new Date().toJSON();
    const updatedPlant = { ...plant, last_watered: newDate };
    props.waterPlant(updatedPlant);
  };

  const deletePlantClick = () => {
    props.deletePlant(id);
    history.push("/dashboard");
  };

  useEffect(() => {
    if (props.auth === null) {
      history.push("/");
    }
  });

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
        <Button
          variant="secondary"
          className="mr-2"
          href={`/plants/edit/${id}`}
        >
          Edit
        </Button>
        <Button variant="danger" onClick={deletePlantClick}>
          Delete <FontAwesomeIcon icon={faTrash} />
        </Button>
      </p>
    </Jumbotron>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    plants: state.plants,
  };
};

const mapDispatchToProps = { waterPlant, deletePlant };

export default connect(mapStateToProps, mapDispatchToProps)(PlantShow);
