import axios from "axios";
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

export const getResults = async (numberOfResults, selectedGame) => {
  try {
    const url = `/api/results${numberOfResults ? '?numberOfResults=' + numberOfResults : ''}` +
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

