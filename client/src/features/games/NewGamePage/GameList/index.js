import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import GameDetailsModal from "./GameDetailsModal";
import { useSelector } from "react-redux";
import { selectFoundGames } from "../../gamesSlice";
import List, { ListItem } from "../../../../common/List";

const GameList = () => {
  const foundGames = useSelector(selectFoundGames);
  const [show, setShow] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState();

  const handleShowGameDetailsModal = (gameId) => {
    setSelectedGameId(gameId);
    setShow(true);
  };
  return (
    <>
      <List>
        {foundGames && foundGames.map(game =>
          <ListItem onClick={() => handleShowGameDetailsModal(game.id)} key={nanoid()} >
            <strong>{game.name}</strong> [{game.yearPublished}]
          </ListItem>
        )}
      </List>
      <GameDetailsModal
        show={show}
        handleClose={() => setShow(false)}
        gameId={selectedGameId}
      />
    </>
  )
};

export default GameList;