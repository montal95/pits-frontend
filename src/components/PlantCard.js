import React from "react";
import { Card, Button } from "react-bootstrap";
import { calcDaysUntil } from "../helpers/index";

export default function PlantCard({ plant }) {
  const date = new Date(plant.last_watered);
  const daysUntilWatering = calcDaysUntil(date, plant.watering_interval);
  const daysUntilColor = daysUntilWatering <= 1 ? "text-danger" : "";

  return (
    <Card bg={"success"}>
      <Card.Body>
        <Card.Title>{plant.nickname}</Card.Title>

        <ul>
          <li>Species: {plant.plant_species}</li>
          <li>Watered every {plant.watering_interval} days</li>
          <li>
            <span className={daysUntilColor}>
              {daysUntilWatering >= 0
                ? `Days until next watering: ${daysUntilWatering}`
                : `Late for watering by ${-daysUntilWatering} days`}
            </span>
          </li>
        </ul>
        <Button variant="primary" className="mr-3">
          Water Now
        </Button>
        <Button variant="secondary" href={`/plants/${plant.id}`}>
          Details
        </Button>
      </Card.Body>
      <Card.Footer bg={"secondary"}>
        <small className="text-dark">Last watered: {date.toDateString()}</small>
      </Card.Footer>
    </Card>
  );
}
