import axios from "axios";
import { xml2js } from "xml-js";
import { compareObjects } from "../logic/utilities";
import { authHeader } from "../helpers/auth-header";

export const getGames = async () => {
  try {
    const response = await axios.get("/api/games");
    return await response.data;
  }
  catch (err) {
    return err;
  }
};

export const getAllSortedGames = async () => {
  try {
    const res = await fetch("/api/games");
    const games = await res.json();
    const sortedGames = await games.sort(compareObjects("name"));
    return sortedGames;
  } catch (err) {
    return err;
  }
}

export const deleteGame = async (gameId) => {
  try {
    const res = await fetch("/api/games/" + gameId, {
      method: "DELETE",
      headers: authHeader(),
    });
    return res;
  } catch (err) {
    return err;
  }
}

export const getAllSortedUsers = async () => {
  try {
    const res = await fetch("/api/users");
    const users = await res.json();
    const sortedUsers = users.sort(compareObjects("name"));
    return sortedUsers;
  } catch (err) {
    return err;
  }
}

export const getUser = async (userId) => {
  try {
    const res = await fetch("/api/users");
    const users = await res.json();
    const user = users.filter(({ id }) => id === userId)[0];
    return user;
  } catch (err) {
    return err;
  }
}

export const getResults = async (page, selectedGame) => {
  try {
    const url = `/api/results${page ? '?page=' + page : ''}` +
      `${selectedGame ? '&gameId=' + selectedGame._id : ''}`;
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    return err;
  }
}

export const getLastResults = async () => {
  try {
    const res = await fetch("/api/games/last", {
      headers: authHeader(),
    });
    const lastResults = await res.json();
    return lastResults;
  } catch (err) {
    return err;
  }
}

export const getNumberOfResultsPerGame = async () => {
  try {
    const res = await fetch("/api/games/numberOfResults", {
      headers: authHeader(),
    });
    const numberOfResults = await res.json();
    return numberOfResults;
  } catch (err) {
    return err;
  }
}

export const getGamesFromQuery = async (query) => {
  try {
    const response = await fetch(`https://api.geekdo.com/xmlapi2/search?query=${query}&type=boardgame`);
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
    const response = await fetch(`https://api.geekdo.com/xmlapi2/thing?id=${id}`);
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