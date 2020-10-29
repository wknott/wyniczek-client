import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { fetchGameDetails, selectGameDetails, selectLoading } from "../../../gamesSlice";
import { theme } from "../../../../../theme";
import { GameImage } from "./styled";

function GameDetailsModal({ show, handleClose, gameId }) {
  const gameDetails = useSelector(selectGameDetails);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (gameId) {
      dispatch(fetchGameDetails(gameId))
    }
  }, [dispatch, gameId])

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        {loading || !gameDetails ?
          <ReactLoading color={theme.colors.violet} /> :
          <>
            <GameImage src={gameDetails.img} alt="game-image" />
            <h2>{gameDetails.name[0]}</h2>
            <p>
              <strong>Liczba graczy:</strong> {gameDetails.minPlayers} - {gameDetails.maxPlayers}
            </p>
            <p>
              <strong>Link do BGG:</strong>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://boardgamegeek.com/boardgame/${gameDetails.id}`}
              >
                {" "}{gameDetails.name[0]}
              </a>
            </p>
          </>
        }
      </Modal.Body>
    </Modal>
  )
};
export default GameDetailsModal;
