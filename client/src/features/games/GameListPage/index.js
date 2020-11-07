import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames, selectGames } from "../gamesSlice";
import GameTile from "../GameTile";
import { GameTilesContainer } from "./styled";

function GameListPage() {
  const dispatch = useDispatch();
  const games = useSelector(selectGames);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <GameTilesContainer>
      {games?.map((game, index) =>
        <GameTile key={index} game={game} />
      )}
    </GameTilesContainer>
  );
}

export default GameListPage;