export const checkToken = (props) => {
  const { history } = props;
  const token = JSON.parse(localStorage.getItem("state")).auth.token;
  if (!token) {
    history.push("/login");
  }
};
