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

async function getAllSortedUsers() {
  try {
    const res = await fetch("/api/users", {
      headers: authHeader(),
    });
    const users = await res.json();
    const sortedUsers = users.sort(compareObjects("name"));
    setUsers(sortedUsers);
  } catch (err) {
    return err;
  }
}

