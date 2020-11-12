import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import {
  formatDateStringShort,
  formatDateString,
  calculateWinners,
} from "../../../../logic/utilities.js";
import { theme } from "../../../../theme";
import { Table, TableContainer, TableHeader, TableRow, TableCell } from "../../../../common/Table";
import { GameQueryParamName, PageQueryParamName, useQueryParameter } from "../../../../queryParameters";
import Pager from "../../../../common/Pager";
import { useDispatch, useSelector } from "react-redux";
import { fetchResults, selectResultsState } from "../../resultsSlice";
import { Icon, TableCellThumbnail, Thumbnail, StyledLink } from "./styled";
import firstPlayer from "../../../../images/firstPlayer.svg";
import gameImage from "../../../../images/game.svg";
import dateImage from "../../../../images/date.svg";
import winner from "../../../../images/winner.svg";
import { toResult } from "../../../../routes";

const ResultsTable = () => {
  const { results, numberOfResults, loading } = useSelector(selectResultsState);
  const page = useQueryParameter(PageQueryParamName) || 1;
  const selectedGameId = useQueryParameter(GameQueryParamName);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchResults({ page, selectedGameId }));
  }, [dispatch, selectedGameId, page]);

  return (
    <TableContainer>
      {
        loading ?
          <ReactLoading color={theme.colors.windsor} /> :
          <>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader></TableHeader>
                  <TableHeader><Icon src={gameImage} /></TableHeader>
                  <TableHeader><Icon src={firstPlayer} /></TableHeader>
                  <TableHeader><Icon src={dateImage} /></TableHeader>
                  <TableHeader><Icon src={winner} /></TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <TableRow key={index}>
                    <TableCellThumbnail>
                      <StyledLink to={toResult({ id: result._id })}>
                        <Thumbnail src={result.game.thumbnailUrl} alt="" />
                      </StyledLink>
                    </TableCellThumbnail>
                    <TableCell>
                      <StyledLink to={toResult({ id: result._id })}>
                        {result.game.name}
                      </StyledLink>
                    </TableCell>
                    <TableCell>
                      <StyledLink to={toResult({ id: result._id })}>
                        {result.scores.find((score, index) => index === 0).user.name}
                      </StyledLink>
                    </TableCell>
                    <TableCell>
                      <StyledLink to={toResult({ id: result._id })}>
                        {window.innerWidth > 800 ? formatDateString(result.date) : formatDateStringShort(result.date)}
                      </StyledLink>
                    </TableCell>
                    <TableCell>
                      <StyledLink to={toResult({ id: result._id })}>
                        {calculateWinners(result).join(" ")}
                      </StyledLink>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
            {numberOfResults > 10 && <Pager numberOfResults={numberOfResults} />}
          </>
      }
    </TableContainer >
  );
}

export default ResultsTable;
