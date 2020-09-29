const URL = `${
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL
    : "http://localhost:3000/api/v1/"
}auth`;

export const loginSuccess = (user) => {
  return {
    type: "LOGIN_SUCCESS",
    user: user,
  };
};

export const logoutSuccess = () => {
  return {
    type: "LOGOUT_SUCCESS",
  };
};

export const currentUser = (user) => {
  return {
    type: "CURRENT_USER",
    user: user,
  };
};

export const signupSuccessAction = (user, history) => {
  return async function (dispatch) {
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    const url = "http://localhost:3000/api/v1/users";
    const res = await fetch(url, reqObj);
    const newUser = await res.json();
    if (res.status === 200) {
      history.push("/");
      return dispatch({
        type: "SIGNUP_SUCCESS",
        user: newUser,
      });
    }
  };
};
