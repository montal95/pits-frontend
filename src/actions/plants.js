export const getPlants = (plants) => {
  return {
    type: "GET_PLANTS",
    plants: plants,
  };
};

export const waterPlant = (plant) => {
  return async function (dispatch) {
    console.log("waterPlant action");
    const url = `http://localhost:3000/api/v1/plants/${plant.id}`;
    const reqObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ last_watered: plant.last_watered }),
    };
    const res = await fetch(url, reqObj);
    const updatedPlant = await res.json();
    console.log(updatedPlant);
    if (res.status === 200) {
      return dispatch({
        type: "WATER_PLANT",
        data: updatedPlant,
      });
    } else {
      return dispatch({
        type: "WATER_PLANT",
        data: plant,
      });
    }
  };
};
