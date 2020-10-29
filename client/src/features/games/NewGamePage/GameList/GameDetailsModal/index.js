import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { fetchGameDetails, selectGameDetails, selectLoading } from "../../../gamesSlice";
import { theme } from "../../../../../theme";
import { GameImage, ButtonsContainer } from "./styled";
import Button from "../../../../../common/Button";
import Label from "../../../../../common/Label";
import Input from "../../../../../common/Input";
import { StyledSelect } from "../../../../../common/Select/styled";
import { nanoid } from "@reduxjs/toolkit";
import { authHeader } from "../../../../../helpers/auth-header";

function GameDetailsModal({ show, handleClose, gameId }) {
  const gameDetails = useSelector(selectGameDetails);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const [pointFields, setPointFields] = useState([]);
  const [selectedName, setSelectedName] = useState("");

  const addField = () => {
    setPointFields([...pointFields, ""]);
  }

  const deleteField = () => {
    setPointFields(
      pointFields.filter((item, index) => index !== pointFields.length - 1)
    );
  }

  async function onSubmit(e) {
    e.preventDefault();
    const name = selectedName;
    const minPlayers = gameDetails.minPlayers;
    const maxPlayers = gameDetails.maxPlayers;

    const newGame = { name, minPlayers, maxPlayers, pointFields };
    const authToken = authHeader()["Authorization"];

    try {
      const res = await fetch("/api/games", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: authToken,
        },
        body: JSON.stringify(newGame),
      });
      const data = await res.json();
      setSelectedName("");
      setPointFields([]);
      handleClose();
      return data;
    } catch (err) {
      return err;
    }
  }

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
            <ButtonsContainer>
              <Button onClick={addField}>
                Dodaj kategorię
                </Button>
              <Button onClick={deleteField}>
                Usuń kategorię
                </Button>
            </ButtonsContainer>
            <form onSubmit={onSubmit}>
              {pointFields.map((field, key) => (
                <Label labelText={`${key + 1}. kategoria`}>
                  <Input
                    key={key}
                    type="text"
                    value={field}
                    onChange={(e) =>
                      setPointFields(
                        pointFields.map((name, index) =>
                          index === key ? e.target.value : name
                        )
                      )
                    }
                  />
                </Label>
              ))}
              <Label labelText="Nazwa gry">
                <StyledSelect
                  value={selectedName}
                  onChange={({ target }) => setSelectedName(target.value)}
                >
                  <option>Wybierz nazwę gry</option>
                  {gameDetails.name.map(name =>
                    <option key={nanoid()} value={name}>
                      {name}
                    </option>)}
                </StyledSelect>
              </Label>
              <Button type="submit">Dodaj do listy gier</Button>
            </form>

          </>
        }
      </Modal.Body>
    </Modal >
  )
};
export default GameDetailsModal;
