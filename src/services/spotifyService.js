import config from "../config";
import { TOKEN } from "../utils/constans";

const getAcessToken = async () => {
  let token = localStorage.getItem(TOKEN);

  if (!token) {
    const result = await fetch(`${config.urlAuth}/api/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + btoa(config.clientId + ":" + config.clientScret),
      },
      body: "grant_type=client_credentials",
    });

    const data = await result.json();
    token = data.access_token;

    localStorage.setItem(TOKEN, token);
  }

  return token;
};

export const getTrackByName = async ({ keyWord = "", nextUrl = null }) => {
  const url =
    nextUrl ||
    `${config.urlApi}/v1/search?q=${keyWord}&type=track&limit=${config.limit}`;

  const token = await getAcessToken();

  const result = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return await result.json();
};

export const getTrackById = async ({ id }) => {
  const token = await getAcessToken();
  const result = await fetch(`${config.urlApi}/v1/tracks/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return await result.json();
};
