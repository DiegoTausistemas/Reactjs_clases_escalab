// Conexiones con el backend, referentes a la autentifiación
import { API } from "../config"

// Funciones que consumen las API (banckend)
export const signup = user => {
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};


export const signin = user => {
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "Application/json",
      "Content-type": "applicaction/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};


export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};


export const signout = next => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();
    return fetch(`${API}` / signout, {
      method: "GET"
    })
      .then(response => {
        console.log("signout", response);
      })
      .catch(err => console.log(err));
  }
};

export const isAuthenticated = () => {
  if (typeof window !== "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.stringify(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};