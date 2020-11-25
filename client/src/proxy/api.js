import axios from "axios";
import { xml2js } from "xml-js";
import { authHeader } from "../helpers/auth-header";
import { buildQueryString } from "./buildQueryString";

const fetchFromServerApi = async ({ path, parameters }) => {
  const response = await axios.get(`${path}?${buildQueryString(parameters)}`);
  return response.data;
}

export const getGames = async () => fetchFromServerApi({ path: "/api/games", });
export const getResults = async (page, selectedGameId) =>
  fetchFromServerApi({
    path: "/api/results",
    parameters: { page, gameId: selectedGameId, },
  });
export const getLastResultsOfEachGames = async () => fetchFromServerApi({ path: "/api/games/last", });
export const getNumberOfResultsPerGame = async () =>
  fetchFromServerApi({ path: "/api/games/numberOfResults", });

export const getResult = async (id) =>
  fetchFromServerApi({
    path: `/api/results/${id}`,
  });

export const getLastResultOfGame = async (gameId) =>
  fetchFromServerApi({
    path: `/api/results`,
    parameters: { last: "true", gameId, },
  });

export const getUsers = async (numberOfResults) =>
  fetchFromServerApi({
    path: `/api/users/${numberOfResults}`,
  })

export const postLogin = async (body) => {
  const response = await axios.post("/api/users/authenticate", body);
  return response.data;
}

const BGG_API_URL = "https://api.geekdo.com/xmlapi2";

export const getGamesFromQuery = async (query) => {
  try {
    const response = await fetch(`${BGG_API_URL}/search?${buildQueryString({ query, type: "boardgame" })}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.text();
    const parsedData = await xml2js(data, { compact: true, spaces: 4 });
    switch (+parsedData.items._attributes.total) {
      case 0:
        return [];
      case 1:
        const game = [
          {
            id: parsedData.items.item._attributes.id,
            name: parsedData.items.item.name._attributes.value,
            yearPublished: parsedData.items.item.yearpublished._attributes.value
          }
        ];
        return game;
      default:
        const games = parsedData.items.item.slice(0, 6).map(game => (
          {
            id: game._attributes.id,
            name: game.name._attributes.value,
            yearPublished: game.yearpublished ? game.yearpublished._attributes.value : 0,
          }
        ));
        return games;
    }
  } catch (err) {
    return err;
  }
}

export const getGameDetails = async (id) => {
  try {
    const response = await fetch(`${BGG_API_URL}/thing?id=${id}`);
    const data = await response.text();
    const parsedData = await xml2js(data, { compact: true, spaces: 4 });
    const name = Array.isArray(parsedData.items.item.name) ?
      parsedData.items.item.name.map(name => name._attributes.value) :
      [parsedData.items.item.name._attributes.value];
    const gameDetails = {
      name,
      img: parsedData.items.item.image._text,
      thumbnail: parsedData.items.item.thumbnail._text,
      minPlayers: parsedData.items.item.minplayers._attributes.value,
      maxPlayers: parsedData.items.item.maxplayers._attributes.value,
      id,
    }
    return gameDetails;
  } catch (error) {
    return error;
  }
}
