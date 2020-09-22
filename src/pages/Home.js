import React from "react";
import { Jumbotron, Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <Jumbotron className="justify-content-center">
      <div className="mx-auto" style={{ width: "300px" }}>
        <h2>Welome to</h2>
        <h1>
          <FontAwesomeIcon icon={faLeaf} /> PITS
        </h1>
      </div>
      <p className="mx-auto" style={{ minWidth: "310px", maxWidth: "850px" }}>
        PITS (Plant Irrigation Tracking System) is your tool for keeping track
        of your plant's needs. Download the app to your device to keep an eye on
        when to water your plant next!{" "}
      </p>
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
    </Jumbotron>
  );
}
