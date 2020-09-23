import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { calcDaysUntil } from "../helpers/index";
import { connect } from "react-redux";
import { waterPlant } from "../actions/plants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";

const PlantCard = ({ plant, waterPlant }) => {
  const date = new Date(plant.last_watered);
  const daysUntilWatering = calcDaysUntil(date, plant.watering_interval);
  const daysUntilColor = daysUntilWatering <= 1 ? "text-danger" : "";

  const waterPlantClick = async () => {
    const newDate = new Date().toJSON();
    const updatedPlant = { ...plant, last_watered: newDate };
    waterPlant(updatedPlant);
  };

  return (
    <Col md={"4"}>
      <Card bg={"success"} style={{ flex: 1 }}>
        <Card.Body>
          <Card.Title>{plant.nickname}</Card.Title>

          <ul>
            <li>Species: {plant.plant_species}</li>
            <li>Watered every {plant.watering_interval} days</li>
            <li>
              <span className={daysUntilColor}>
                {daysUntilWatering >= 0
                  ? `Water in ${daysUntilWatering} days`
                  : `Late by ${-daysUntilWatering} days`}
              </span>
            </li>
          </ul>
          <Button variant="primary" className="mr-2" onClick={waterPlantClick}>
            Water Now <FontAwesomeIcon icon={faTint} />
          </Button>
          <Button variant="secondary" href={`/plants/${plant.id}`}>
            Details
          </Button>
        </Card.Body>
        <Card.Footer bg={"secondary"}>
          <small className="text-dark">
            Last watered: {date.toDateString()}
          </small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

const mapDispatchToProps = { waterPlant };

export default connect(null, mapDispatchToProps)(PlantCard);
