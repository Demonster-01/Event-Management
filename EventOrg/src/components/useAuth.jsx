import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem("jwt_token"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:8000/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => setUser(response.data))
        .catch((error) => console.log(error));
    }
  }, [token]);

  const login = (username, password) => {
    axios
      .post("http://localhost:8000/api/token/", { username, password })
      .then((response) => {
        setToken(response.data.access);
        localStorage.setItem("jwt_token", response.data.access);
      })
      .catch((error) => console.log(error));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("jwt_token");
  };

  return { token, user, login, logout };
};

export default useAuth;
