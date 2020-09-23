import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export default function HomeButtons() {
  return (
    <div className="mx-auto" style={{ minWidth: "310px", maxWidth: "850px" }}>
      <ButtonGroup
        className="mx-auto"
        style={{
          backgroundColor: "#e2725b",
          padding: "12px",
          borderRadius: "5px",
        }}
      >
        <Button
          variant="success"
          size="lg"
          style={{ marginRight: "10px" }}
          href="/plants/new"
        >
          New Plant
        </Button>{" "}
        <Button variant="success" size="lg" href="/plants">
          All Plants
        </Button>
      </ButtonGroup>
    </div>
  );
}
