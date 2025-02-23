import axios from "axios";
const URL_API = import.meta.env.VITE_URL_BE;

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${URL_API}/users/login`, {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    return { error: error.message };
  }
};
