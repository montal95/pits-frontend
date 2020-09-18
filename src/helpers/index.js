export const checkToken = (props) => {
  const { history } = props;
  const token = localStorage.getItem("pitsToken");
  if (!token) {
    history.push("/login");
  }
};
