import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectFoundGames } from "../../gamesSlice";
import List, { ListItem } from "../../../../common/List";
import LinkToWebsite from "../../../../common/LinkToWebsite";
import { Link } from "react-router-dom";
import { toNewGame } from "../../../../routes";

const GameList = () => {
  const foundGames = useSelector(selectFoundGames);

  return (
    <>
      <List>
        {foundGames && foundGames.map(game =>
          <ListItem as={Link} to={toNewGame({ id: game.id })} key={nanoid()} >
            <strong>{game.name}</strong> ({game.yearPublished})
          </ListItem>
        )}
      </List>
      {foundGames.length > 0 && <p>
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