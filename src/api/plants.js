export const fetchPlants = async (userId) => {
  const reqObj = {
    method: "GET",
    headers: {
      id: `${userId}`,
    },
  };
  const res = await fetch("http://localhost:3000/api/v1/plants", reqObj);
  const data = await res.json();
  return data;
};
