const URL = `${
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL
    : "http://localhost:3000/api/v1/"
}`;

export const userAuth = async (formData, loginSuccess) => {
  const reqObj = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  const res = await fetch(`${URL}auth`, reqObj);
  const data = await res.json();
  if (data.error) {
    return data;
  } else {
    loginSuccess(data);
    return data;
  }
};

export const checkToken = async (token, history, currentUser) => {
  const userToken = token.auth.token;
  const reqObj = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };
  const res = await fetch(`${URL}current_user`, reqObj);
  const data = await res.json();
  if (data.error) {
    history.push("/");
  } else {
    currentUser(data);
  }
};
