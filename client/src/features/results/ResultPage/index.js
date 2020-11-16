import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { calculateWinners, formatDateString } from "../../../logic/utilities.js";
import { fetchResult, selectResult } from "../resultsSlice";
import ResultTable from "./ResultTable";
import { Container, Info, Image, GameName, Date, FirstPlayer, Winner, Icon, Game } from "./styled.js";
import { toGame } from "../../../routes";
import firstPlayerUrl from "../../../images/firstPlayer.svg";
import winnerUrl from "../../../images/winner.svg";

const ResultPage = () => {
  const { id } = useParams();
  const result = useSelector(selectResult);
  const dispatch = useDispatch();
  const winners = result && calculateWinners(result).join(" ");
  const firstPlayer = result && result.scores.find((score, index) => index === 0).user.name;

  useEffect(() => {
    dispatch(fetchResult({ id }));
  }, [dispatch, id]);

  return (
    result &&
    <Container>
      <Info>
        <Game>
          <Link to={toGame({ id: result.game._id })}>
            <Image width={150} src={result.game.imgUrl} alt="game" />
          </Link>
          <GameName to={toGame({ id: result.game._id })}>{result.game.name}</GameName>
        </Game>
        <div>
          <Winner><Icon src={winnerUrl} />1. Miejsce - {winners}</Winner>
          <Date>{formatDateString(result.date, "long")}</Date>
          <FirstPlayer><Icon src={firstPlayerUrl} />{firstPlayer}</FirstPlayer>
        </div>
      </Info>
      <ResultTable result={result} />
    </Container>
  )
}

export default ResultPage;
