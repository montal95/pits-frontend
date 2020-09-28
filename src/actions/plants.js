const URL = "http://localhost:3000/api/v1/plants";

export const getPlants = (userId) => {
  return async function (dispatch) {
    const reqObj = {
      method: "GET",
      headers: {
        id: `${userId}`,
      },
    };
    const res = await fetch(URL, reqObj);
    const data = await res.json();
    return dispatch({
      type: "GET_PLANTS",
      data: data,
    });
  };
};

export const waterPlant = (plant) => {
  return async function (dispatch) {
    const url = `${URL}/${plant.id}`;
    const reqObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ last_watered: plant.last_watered }),
    };
    const res = await fetch(url, reqObj);
    const updatedPlant = await res.json();
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

export const addNewPlant = (plant, userId, history) => {
  return async function (dispatch) {
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        id: userId,
      },
      body: JSON.stringify(plant),
    };
    const res = await fetch(URL, reqObj);
    const newPlant = await res.json();
    if (res.status === 200) {
      history.push(`/dashboard`);
      return dispatch({
        type: "NEW_PLANT",
        data: newPlant,
      });
    }
  };
};

export const deletePlant = (id, history) => {
  return async function (dispatch) {
    const res = await fetch(`${URL}/${id}`, { method: "DELETE" });
    if (res.status === 200) {
      history.push("/dashboard");
      return dispatch({
        type: "DELETE_PLANT",
        data: id,
      });
    }
  };
};

export const updatePlantAction = (plant, id) => {
  return async function (dispatch) {
    const reqObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plant),
    };
    const url = `${URL}/${id}`;
    const res = await fetch(url, reqObj);
    const updatedPlant = await res.json();
    if (res.status === 200) {
      return dispatch({
        type: "UPDATE_PLANT",
        data: updatedPlant,
      });
    }
  };
};
