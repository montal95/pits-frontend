export function plantsReducer(state = [], action) {
  const { type, data } = action;
  switch (type) {
    case "GET_PLANTS":
      return data;
    case "WATER_PLANT":
      return state.map((plant) =>
        plant.id === data.id ? (plant = data) : plant
      );

    default:
      return state;
  }
}
