import { loginSuccess } from "../actions/auth";

export const userAuth = async (formData) => {
  const reqObj = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  const res = await fetch("http://localhost:3000/api/v1/auth", reqObj);
  const data = await res.json();
  if (data.error) {
    return data.error;
  } else {
    localStorage.setItem("pitsToken", data.token);
    loginSuccess(data);
    return "success";
  }
};
