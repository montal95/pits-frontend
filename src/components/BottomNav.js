import React from "react";
import { Navbar, Button } from "react-bootstrap";

const BottomNav = () => {
  return (
    <Navbar
      sticky="bottom"
      style={{ marginBottom: "20px", marginTop: "-10px" }}
    >
      <Button
        href="https://www.buymeacoffee.com/sammontalvojr"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto"
        style={{
          padding: "0",
          maxBlockSize: "fit-content",
          background: "rgba(0%, 0%, 0%, 0)",
          border: "rgba(0%, 0%, 0%, 0)",
        }}
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png"
          alt="Buy Me A Coffee"
          style={{ height: "4em" }}
        />
      </Button>
    </Navbar>
  );
};

export default BottomNav;
