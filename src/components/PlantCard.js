import React from "react";
import { Card } from "react-bootstrap";

export default function PlantCard({ plant }) {
  const date = new Date(plant.last_watered);
  return (
    <Card>
      <Card.Body>
        <Card.Title>{plant.nickname}</Card.Title>
        <Card.Text>
          <ul>
            <li>Species: {plant.species}</li>
            <li>Watered every {plant.watering_interval} days</li>
          </ul>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          Last watered: {date.toDateString()}
        </small>
      </Card.Footer>
    </Card>
  );
}
