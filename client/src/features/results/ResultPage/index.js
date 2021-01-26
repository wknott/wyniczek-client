import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { calculateWinners, formatDateString } from "../../../logic/utilities.js";
import { fetchResult, selectResult } from "../resultsSlice";
import ResultTable from "./ResultTable";
import {
  Container,
  Game,
  Details,
  TableContainer,
  Link,
} from "./styled.js";
import GameTile from "../../games/GameTile";
import MetaData from "../../../common/MetaData/index.js";
import { selectAuth } from "../../../common/authSlice.js";
import { toNewResult } from "../../../common/routes.js";
import Header from "../../../common/Header";

const ResultPage = () => {
  const { id } = useParams();
  const result = useSelector(selectResult);
  const { isAuthenticated } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const winners = result && calculateWinners(result).join(" ");
  const firstPlayer = result && result.scores.find((score, index) => index === 0).user.name;

  useEffect(() => {
    dispatch(fetchResult({ id }));
  }, [dispatch, id]);

  const details = [
    {
      key: `Zwycięzc${winners?.indexOf(" ") !== -1 ? "y" : "a"}`,
      value: winners,
    },
    {
      key: "Gracz rozpoczynający",
      value: firstPlayer,
    },
  ];

  const isUserResultAuthor = () => {
    return isAuthenticated && result.author === JSON.parse(localStorage.user).id;
  }

  return (
    result &&
    <>
      <Container>
        <TableContainer>
          <Header>Wynik dodany {formatDateString(result?.date, "long")}</Header>
          <ResultTable isUserResultAuthor={isUserResultAuthor} result={result} />
        </TableContainer>
        <Details>
          <MetaData metaData={details} />
          {isAuthenticated &&
            <Link to={toNewResult({ game: result.game._id })}>Rewanż</Link>
          }
        </Details>
        <Game>
          <GameTile game={result.game} withoutLastResult small />
        </Game>

      </Container>
    </>
  );
};

export default ResultPage;
