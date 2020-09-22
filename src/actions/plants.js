export const getPlants = (plants) => {
  return {
    type: "GET_PLANTS",
    plants: plants,
  };
};
