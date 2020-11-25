import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { calculateWinners, formatDateString } from "../../../logic/utilities.js";
import { fetchResult, selectResult } from "../resultsSlice";
import ResultTable from "./ResultTable";
import {
  Container,
  Term,
  DescriptionList,
  Description,
  Game, Details,
  TableContainer
} from "./styled.js";
import GameTile from "../../games/GameTile";
import Header from "../../../common/Header";

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
    <>
      <Header>Tabela wyniku</Header>
      <Container>
        <TableContainer>
          <ResultTable result={result} />
        </TableContainer>
        <Details>
          <DescriptionList>
            <Term>Data:</Term>
            <Description>{formatDateString(result.date, "long")}</Description>
          </DescriptionList>
          <DescriptionList>
            <Term>{`Zwycięzc${winners?.indexOf(" ") !== -1 ? "y" : "a"}:`}</Term>
            <Description>{winners}</Description>
          </DescriptionList>
          <DescriptionList>
            <Term>Rozpoczynający:</Term>
            <Description>{firstPlayer}</Description>
          </DescriptionList>
        </Details>
        <Game>
          <GameTile game={result.game} withoutLastResult small />
        </Game>
      </Container>
    </>
  );
};

export default ResultPage;
