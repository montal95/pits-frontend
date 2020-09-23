import React from "react";
import { Jumbotron } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import HomeButtons from "../components/HomeButtons";

const Home = (props) => {
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
      {props.auth === null ? "" : <HomeButtons />}
    </Jumbotron>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, null)(Home);
