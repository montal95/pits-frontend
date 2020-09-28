import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Plants = () => {
  const history = useHistory();

  useEffect(() => {
    history.push("/dashboard");
  });

  return (
    <div>
      <h1>Plants Page</h1>
    </div>
  );
};

export default Plants;
