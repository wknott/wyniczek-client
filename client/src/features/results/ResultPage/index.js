import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { formatDateString } from "../../../logic/utilities.js";
import { fetchResult, selectResult } from "../resultsSlice";
import ResultTable from "./ResultTable";
import { Container, Info, Image, GameName, Date } from "./styled.js";
import { toGame } from "../../../routes";

const ResultPage = () => {
  const { id } = useParams();
  const result = useSelector(selectResult);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchResult({ id }));
  }, [dispatch, id])
  return (
    result &&
    <Container>
      <Info>
        <Link to={toGame({ id: result.game._id })}>
          <Image width={150} src={result.game.imgUrl} alt="game" />
        </Link>
        <GameName to={toGame({ id: result.game._id })}>{result.game.name}</GameName>
        <Date>{formatDateString(result.date)}</Date>
      </Info>
      <ResultTable result={result} />
    </Container>
  )
}
export default ResultPage;
