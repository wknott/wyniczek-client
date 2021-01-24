import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { fetchNewGameDetails, selectGameDetails, selectLoading } from "../gamesSlice";
import { theme } from "../../../theme";
import {
  GameImage,
  ButtonsContainer,
  GameDetails,
  StyledTile,
  ErrorMessage,
  GameHeader,
} from "./styled";
import Button from "../../../common/Button";
import Label from "../../../common/Label";
import Input from "../../../common/Input";
import { StyledSelect } from "../../../common/Select/styled";
import { nanoid } from "@reduxjs/toolkit";
import { useHistory, useParams } from "react-router-dom";
import { toGames } from "../../../common/routes";
import { addGame } from "../../../proxy/api";
import MetaData from "../../../common/MetaData";

const NewGamePage = () => {
  const { id: gameId } = useParams();
  const gameDetails = useSelector(selectGameDetails);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const [pointFields, setPointFields] = useState([]);
  const [selectedName, setSelectedName] = useState(gameDetails?.name[0]);
  const [newGameLoading, setNewGameLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const history = useHistory();

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
    const { minPlayers, maxPlayers, img: imgUrl, thumbnail: thumbnailUrl } = gameDetails;

    const newGame = {
      name: selectedName || gameDetails?.name[0],
      minPlayers,
      maxPlayers,
      pointFields,
      bggId: gameId,
      imgUrl,
      thumbnailUrl,
    };
    try {
      setNewGameLoading(true);
      const response = await addGame(newGame);
      setNewGameLoading(false);
      if (response.status === 201) {
        history.push(toGames());
      } else {
        const errorMessage = `Nie udało się dodać gry!
        Sprawdź, czy nie dodałeś jej wcześniej…`
        setErrorMessage(errorMessage);
      }
      return response.data;
    } catch (err) {
      return err;
    }
  }

  useEffect(() => {
    if (gameId) {
      dispatch(fetchNewGameDetails(gameId))
    }
  }, [dispatch, gameId])

  const linkToBgg = (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://boardgamegeek.com/boardgame/${gameDetails?.id}`}
    >
      {gameDetails?.name[0]}
    </a>
  );

  const details = [
    {
      key: "Liczba graczy",
      value: `${gameDetails?.minPlayers} - ${gameDetails?.maxPlayers}`,
    },
    {
      key: "Link do opisu gry na BGG",
      value: linkToBgg,
    },
    {
      key: "",
      value: `Jeśli chcesz dodać kategorie punktów kliknij przycisk "Dodaj kategorię", a następnie wpisz nazwę kategorii w odpowiednim polu formularza.`
    },
  ];

  return (
    <div>
      {loading || !gameDetails ?
        <ReactLoading color={theme.colors.windsor} /> :
        <StyledTile>
          <GameImage src={gameDetails.img} alt="game-image" />
          <GameDetails>
            <GameHeader>{gameDetails.name[0]}</GameHeader>
            <MetaData metaData={details} />
            <ButtonsContainer>
              <Button onClick={addField}>
                Dodaj kategorię
              </Button>
              <Button disabled={pointFields.length === 0} onClick={deleteField}>
                Usuń kategorię
              </Button>
            </ButtonsContainer>
            <form onSubmit={onSubmit}>
              {pointFields.map((field, key) => (
                <Label key={key} labelText={`${key + 1}. kategoria`}>
                  <Input
                    type="text"
                    placeholder={`Nazwa ${key + 1}. kategorii...`}
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
                  required
                  value={selectedName}
                  onChange={({ target }) => setSelectedName(target.value)}
                >
                  {gameDetails.name.map(name =>
                    <option key={nanoid()} value={name}>
                      {name}
                    </option>)}
                </StyledSelect>
              </Label>
              <Button disabled={newGameLoading} type="submit">Dodaj do listy gier</Button>
              {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </form>
          </GameDetails>
        </StyledTile >
      }
    </div >
  )
};
export default NewGamePage;
