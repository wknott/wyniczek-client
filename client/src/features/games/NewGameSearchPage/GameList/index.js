import React, { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewGamesByQuery, selectFoundGames } from "../../gamesSlice";
import List, { ListItem } from "../../../../common/List";
import LinkToWebsite from "../../../../common/LinkToWebsite";
import { Link } from "react-router-dom";
import { toNewGame } from "../../../..//common/routes";
import { useQueryParameter } from "../../../../common/queryParameters";

const GameList = () => {
  const newGamesFromQuery = useSelector(selectFoundGames);
  const dispatch = useDispatch();
  const query = useQueryParameter("query") || "";

  useEffect(() => {
    if (query.length > 2) {
      dispatch(fetchNewGamesByQuery(query))
    }
  }, [dispatch, query])

  return (
    <>
      <List>
        {newGamesFromQuery && newGamesFromQuery.map(game =>
          <ListItem as={Link} to={toNewGame({ id: game.id })} key={nanoid()} >
            <strong>{game.name}</strong> ({game.yearPublished})
          </ListItem>
        )}
      </List>
      {newGamesFromQuery.length > 0 && <p>
        Tytuły wyszukiwanych gier pochodzą z serwisu{" "}
        <LinkToWebsite
          target="_blank"
          rel="noopener noreferrer"
          href="https://boardgamegeek.com/"
        >
          BoardGameGeek
      </LinkToWebsite>.
    </p>}
    </>
  )
};

export default GameList;