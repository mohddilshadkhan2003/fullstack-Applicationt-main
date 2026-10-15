const BASE_URL = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
  ? "http://localhost:8080"
  : "https://fullstack-backend-rxst.onrender.com";

const API = {
  PROJECTS: `${BASE_URL}/projects`,
  CLIENTS: `${BASE_URL}/clients`,
  CONTACT: `${BASE_URL}/contact`,
  SUBSCRIBE: `${BASE_URL}/subscribe`
};

async function request(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`Request failed (${response.status})`);
  return response.status === 204 ? null : response.json();
}
