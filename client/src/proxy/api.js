import { compareObjects } from "../logic/utilities";

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

