import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import addButton from "./add-user-button.png";
import deleteButton from "./delete-user-button.png";
import { getLastResultOfGame } from "../../../../proxy/api";
import { GameQueryParamName, useQueryParameter } from "../../../../common/queryParameters";
import { fetchGames, selectGames } from "../../../games/gamesSlice";
import { selectUsers, fetchUsers, selectLoading } from "../../../users/usersSlice";
import Input from "../../../../common/Input";
import Select from "../../../../common/Select";
import { toResults } from "../../../../common/routes";
import { compareObjects } from "../../../../logic/utilities";
import {
  FieldName,
  Form,
  StyledButton,
  SubmitButton,
  Result,
  ButtonsContainer,
  GridContainer,
  Checkbox,
} from "./styled";
import { addResult } from "../../../../proxy/api";
import Label from "../../../../common/Label";

function NewResultForm() {
  const [lastUsers, setLastUsers] = useState([]);
  const [numberOfPlayers, setNumberOfPlayers] = useState(2);
  const [scores, setScores] = useState([]);
  const [lastResultLoading, setLastResultLoading] = useState(false);
  const [playingTime, setPlayingTime] = useState("");
  const [hideResults, setHideResults] = useState(true);
  const users = useSelector(selectUsers);
  const sortedUsers = [...users].sort(compareObjects("numberOfResults", "desc"));
  const loading = useSelector(selectLoading);
  const selectedGameId = useQueryParameter(GameQueryParamName);
  const games = useSelector(selectGames);
  const selectedGame = games.find((game) => game._id === selectedGameId);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    if (!games) {
      dispatch(fetchGames());
    }
  }, [dispatch, games]);

  useEffect(() => {
    (async () => {
      setLastResultLoading(true);
      if (selectedGame !== undefined) {
        const { results: lastResult } = await getLastResultOfGame(selectedGame._id);
        if (lastResult?.scores !== undefined) {
          const lastResultUsers = lastResult.scores.map((score) => score.user);
          const reversedUsers = await lastResultUsers.slice().reverse();
          setLastUsers(reversedUsers);

          createScores(2, selectedGame.pointFields.length, reversedUsers);
        } else {
          createScores(2, selectedGame.pointFields.length);
        }
      }
      setLastResultLoading(false);
      setNumberOfPlayers(2);
    })();
    // eslint-disable-next-line
  }, [selectedGame])

  function createScores(numberOfScores, numberOfFields, reversedUsers) {
    const emptyScores = Array.from({ length: numberOfScores }, (x, index) => ({
      user:
        reversedUsers !== undefined
          ? reversedUsers.length > index
            ? reversedUsers[index].id
            : null
          : null,
      points: Array.from({ length: numberOfFields }, () => null),
    }));
    if (reversedUsers === undefined || reversedUsers.length < 2) {
      setScores(scores.concat(emptyScores).slice(0, numberOfScores));
    } else {
      setScores(emptyScores.slice(0, numberOfScores));
    }
  }

  function onChangePoints(e, index, selectedScore) {
    const newValue = parseInt(e.target.value, 10) || null;
    const newPoints = selectedScore.points.map((s, i) =>
      i === index ? newValue : s
    );
    const newScore = { user: selectedScore.user, points: newPoints };
    const newScores = scores.map((s) => (s === selectedScore ? newScore : s));
    setScores(newScores);
  }

  function onChangeResult(e, selectedScore) {
    const newValue = parseInt(e.target.value, 10) || null;
    const newScore = { user: selectedScore.user, points: [newValue] };
    const newScores = scores.map((s) => (s === selectedScore ? newScore : s));
    setScores(newScores);
  }

  function addPlayer() {
    if (lastUsers.length > numberOfPlayers)
      createScores(numberOfPlayers + 1, selectedGame.pointFields.length, [
        lastUsers[numberOfPlayers],
      ]);
    else createScores(numberOfPlayers + 1, selectedGame.pointFields.length);
    setNumberOfPlayers(numberOfPlayers + 1);
  }

  function deletePlayer() {
    setScores(scores.slice(0, numberOfPlayers - 1));
    setNumberOfPlayers(numberOfPlayers - 1);
  }

  function isValid() {
    const users = scores.map((score) => score.user);
    return (
      users.length > 0 &&
      JSON.stringify(users) === JSON.stringify([...new Set(users)]) &&
      scores.every((score) => score.user) &&
      !scores.every(
        (score) => Object.values(score.points).reduce((x, y) => x + y, 0) === 0
      )
    );
  }

  async function onSubmit(e) {
    e.preventDefault();
    const newResult = {
      game: selectedGame._id,
      scores: hideResults ? scores.map(score => ({ user: score.user })) : scores,
      author: JSON.parse(localStorage.user).id,
      playingTime,
    };

    try {
      const response = await addResult(newResult);
      const data = response.data;
      history.push(toResults());
      return data;
    } catch (err) {
      return err;
    }
  }

  const onUserSelect = (UserId, score) => {
    const newScore = { user: UserId, points: score.points };
    const newScores = scores.map((s) => (s === score ? newScore : s));
    setScores(newScores);
  }

  return (
    !loading && !lastResultLoading && selectedGame ?
      <Form onSubmit={(e) => onSubmit(e)}>
        <GridContainer columns={scores.length + 1}>
          <ButtonsContainer>
            <StyledButton
              type="button"
              color="green"
              onClick={() => addPlayer()}
              disabled={numberOfPlayers === selectedGame.maxPlayers}
            >
              <img src={addButton} width="auto" height="15" alt="" />
            </StyledButton>
            <StyledButton
              type="button"
              color="red"
              onClick={() => deletePlayer()}
              disabled={numberOfPlayers === selectedGame.minPlayers}
            >
              <img src={deleteButton} width="auto" height="15" alt="" />
            </StyledButton>
          </ButtonsContainer>
          {scores.map((score, index) => (
            <Select
              key={index}
              value={users.find((user) => user._id === score.user)}
              onChange={(UserId) => onUserSelect(UserId, score)}
              options={sortedUsers}
              firstOption={`${index + 1}. Gracz`}
            />
          ))}
          {selectedGame.pointFields.map((field, pointFieldIndex) => (
            <React.Fragment key={pointFieldIndex}>
              <FieldName>{field}</FieldName>
              {scores.map((score, index) => (
                <Input
                  type="number"
                  key={index}
                  value={score.points[pointFieldIndex] || ""}
                  onChange={(e) => onChangePoints(e, pointFieldIndex, score)}
                />
              ))}
            </React.Fragment>
          ))}

          {selectedGame.pointFields.length === 0 ? (
            <>
              <FieldName>Wynik</FieldName>
              {scores.map((score, index) => (
                <Input
                  type="number"
                  value={score.points[0] || ""}
                  key={index}
                  onChange={(e) => onChangeResult(e, score)}
                />
              ))}
            </>
          ) : (
            <>
              <FieldName>Wynik</FieldName>
              {scores.map((score, index) => (
                <Result key={index}>{Object.values(score.points).reduce((x, y) => x + y, 0)}</Result>
              ))}
            </>
          )}
        </GridContainer>
        <GridContainer columns={2}>
          <FieldName>Ukryj wyniki</FieldName>
          <Checkbox
            name="hideResults"
            type="checkbox"
            checked={hideResults}
            onChange={({ target }) => setHideResults(target.checked)}
          />
          <FieldName>Czas rozgrywki (w&nbsp;minutach)</FieldName>
          <Input
            type="number"
            value={playingTime}
            onChange={({ target }) => setPlayingTime(+target.value)}
          />
        </GridContainer>
        <SubmitButton disabled={!isValid()} variant="primary" type="submit">
          Dodaj wynik
        </SubmitButton>
      </Form > :
      <></>
  );
}
export default NewResultForm;
