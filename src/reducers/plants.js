export function plantsReducer(state = [], action) {
  const { type, data } = action;
  switch (type) {
    case "GET_PLANTS":
      return data;
    case "WATER_PLANT":
    case "UPDATE_PLANT":
      return state.map((plant) =>
        plant.id === data.id ? (plant = data) : plant
      );
    case "NEW_PLANT":
      return [...state, data];
    case "DELETE_PLANT":
      return state.map((plant) => (plant.id !== data ? true : false));
    default:
      return state;
  }
}
