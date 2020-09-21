import React, { useEffect } from "react";
import { checkToken } from "../helpers/index";

const Dashboard = (props) => {
  useEffect(() => {
    checkToken(props);
  });

  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  );
};

export default Dashboard;
