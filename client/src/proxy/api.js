import { compareObjects } from "../logic/utilities";
import { authHeader, getCurrentUserId } from "../helpers/auth-header";

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

export const getResults = async () => {
  try {
    const currentUserId = getCurrentUserId()
    const url = `/api/results${currentUserId ? '?users=' + currentUserId : ''}`
    const res = await fetch(url);
    const results = await res.json();
    return results;
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

