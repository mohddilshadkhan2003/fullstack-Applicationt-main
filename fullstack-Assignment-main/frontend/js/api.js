const BASE_URL = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
  ? "http://localhost:8080"
  : "https://fullstack-backend-rxst.onrender.com";

const API = {
  PROJECTS: `${BASE_URL}/projects`,
  CLIENTS: `${BASE_URL}/clients`,
  CONTACT: `${BASE_URL}/contact`,
  SUBSCRIBE: `${BASE_URL}/subscribe`
};

// Keep public reads fresh while avoiding duplicate requests during navigation.
const GET_CACHE_TTL_MS = 30_000;
const getCache = new Map();
const inFlightGets = new Map();

async function request(url, options = {}) {
  const method = (options.method || "GET").toUpperCase();
  const cacheable = method === "GET";

  if (cacheable) {
    const cached = getCache.get(url);
    if (cached && cached.expiresAt > Date.now()) return cached.data;
    if (cached) getCache.delete(url);
    if (inFlightGets.has(url)) return inFlightGets.get(url);
  }

  const fetchPromise = (async () => {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`Request failed (${response.status})`);
    const data = response.status === 204 ? null : await response.json();

    if (cacheable) {
      getCache.set(url, { data, expiresAt: Date.now() + GET_CACHE_TTL_MS });
    } else {
      // A write can change any collection displayed by this small application.
      getCache.clear();
    }

    return data;
  })();

  if (cacheable) inFlightGets.set(url, fetchPromise);
  try {
    return await fetchPromise;
  } finally {
    if (cacheable) inFlightGets.delete(url);
  }
}
