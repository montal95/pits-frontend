export const checkToken = (props, history) => {
  const token = JSON.parse(localStorage.getItem("state"));
  if (!token) {
    history.push("/login");
  }
};
