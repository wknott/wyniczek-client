import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { compareObjects } from "../../../logic/utilities";
import { theme } from "../../../theme";
import { fetchGames, selectGames, selectLoading } from "../gamesSlice";
import GameTile from "../GameTile";
import { GamePageHeader, GameTilesContainer, StyledLink } from "./styled";
import Header from "../../../common/Header";
import { toNewGameSearch } from "../../../routes";
import { selectAuth } from "../../../authSlice";

function GamesPage() {
  const { isAuthenticated } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const games = useSelector(selectGames);
  const loading = useSelector(selectLoading);
  const sortedGames = [...games].sort(compareObjects("name"));

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return loading ?
    (
      <ReactLoading color={theme.colors.windsor} />
    ) :
    (
      <>
        <GamePageHeader>
          <Header>Lista gier</Header>
          {isAuthenticated &&
            <StyledLink to={toNewGameSearch()}>Dodaj nową grę</StyledLink>
          }
        </GamePageHeader>
        <GameTilesContainer>
          {sortedGames?.map((game, index) =>
            <GameTile key={index} game={game} />
          )}
        </GameTilesContainer>
      </>
    );
}

export default GamesPage;