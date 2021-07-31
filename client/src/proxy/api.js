import axios from "axios";
import { xml2js } from "xml-js";
import { authHeader } from "../helpers/auth-header";
import { buildQueryString } from "./buildQueryString";

const authToken = authHeader()["Authorization"];

const fetchFromServerApi = async ({ path, parameters }) => {
  const response = await axios.get(`${path}?${buildQueryString(parameters)}`);
  return response.data;
}

export const getGames = async () => fetchFromServerApi({ path: "/api/games", });

export const getGame = async (id) => fetchFromServerApi({ path: `/api/games/${id}`, });

export const getResults = async (page, selectedGameId) =>
  fetchFromServerApi({
    path: "/api/results",
    parameters: { page, gameId: selectedGameId, },
  });
export const getLastResultsOfEachGames = async () => fetchFromServerApi({ path: "/api/games/last", });
export const getNumberOfResultsPerGame = async () =>
  fetchFromServerApi({ path: "/api/games/numberOfResults", });

export const getNumberOfResults = async (id) =>
  fetchFromServerApi({ path: `/api/games/numberOfResults/${id}` });

export const getResult = async (id) =>
  fetchFromServerApi({
    path: `/api/results/${id}`,
  });

export const getLastResultOfGame = async (gameId) =>
  fetchFromServerApi({
    path: `/api/results`,
    parameters: { last: "true", gameId, },
  });

export const getUsers = async (numberOfResults, gameId) =>
  fetchFromServerApi({
    path: `/api/users/${numberOfResults}`,
    parameters: { gameId },
  })

export const postLogin = async (body) => {
  const response = await axios.post("/api/users/authenticate", body);
  return response.data;
}

export const postRegister = async (body) => {
  const response = await axios.post("/api/users/register", body);
  return response.data;
}

export const addGame = async (newGame) => {
  const headers = {
    "Content-Type": "application/json",
    "Authorization": authToken,
  };
  const response = await axios.post("/api/games", newGame, { headers: headers });
  return response;
}

export const addResult = async (newResult) => {
  const headers = {
    "Content-Type": "application/json",
    "Authorization": authToken,
  };
  const response = await axios.post("/api/results", newResult, { headers: headers });
  return response;
}

export const updateResult = async (updatedResult) => {
  const headers = {
    "Content-Type": "application/json",
    "Authorization": authToken,
  };
  const response = await axios.patch(
    `/api/results/${updatedResult._id}`,
    { scores: updatedResult.scores.map(({ _id, points, user }) => ({ _id, points, user: user.id })) },
    { headers: headers }
  );
  return response;
}

const BGG_API_URL = "https://api.geekdo.com/xmlapi2";

export const getNewGamesFromQuery = async (query) => {
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
        const games = parsedData.items.item.slice(0, 10).map(game => (
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

export const getNewGameDetails = async (id) => {
  try {
    const response = await fetch(`${BGG_API_URL}/thing?id=${id}`);
    const data = await response.text();
    const parsedData = await xml2js(data, { compact: true, spaces: 4 });
    const name = Array.isArray(parsedData.items.item.name) ?
      parsedData.items.item.name.map(name => name._attributes.value) :
      [parsedData.items.item.name._attributes.value];
    const newGameDetails = {
      name,
      img: parsedData.items.item.image._text,
      thumbnail: parsedData.items.item.thumbnail._text,
      minPlayers: parsedData.items.item.minplayers._attributes.value,
      maxPlayers: parsedData.items.item.maxplayers._attributes.value,
      id,
    }
    return newGameDetails;
  } catch (error) {
    return error;
  }
}

export const getGameDetailsFromBGG = async (id) => {
  try {
    const response = await fetch(`${BGG_API_URL}/thing?id=${id}&stats=1`);
    const data = await response.text();
    const parsedData = await xml2js(data, { compact: true, spaces: 4 });
    const bggRank = parseInt(parsedData.items.item.statistics.ratings.ranks.rank[0]._attributes.value) || 99999;
    const weight = parsedData.items.item.statistics.ratings.averageweight._attributes.value || 0;
   
    const gameStats = { bggRank, weight };
    return gameStats;
  } catch (error) {
    return {bggRank: 99999, weight: 0};
  }
}
