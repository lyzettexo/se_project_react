const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wear2what.crabdance.com"
    : "http://localhost:3001";

export const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

const getAuthorizationHeaders = () => {
  const token = localStorage.getItem("jwt");

  return {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  };
};

export const getItemList = () =>
  fetch(`${baseUrl}/items`).then(handleServerResponse);

export const addItem = ({ name, imageUrl, weather }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: getAuthorizationHeaders(),
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(handleServerResponse);
};

export const updateUser = ({ name, avatar }) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: getAuthorizationHeaders(),
    body: JSON.stringify({
      name,
      avatar,
    }),
  }).then(handleServerResponse);
};

export const removeItem = (itemID) => {
  return fetch(`${baseUrl}/items/${itemID}`, {
    method: "DELETE",
    headers: getAuthorizationHeaders(),
  }).then(handleServerResponse);
};

export const addCardLike = (itemId, token) => {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};

export const removeCardLike = (itemId, token) => {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};
