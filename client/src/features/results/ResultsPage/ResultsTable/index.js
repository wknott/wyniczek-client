import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  formatDateString,
  calculateWinners,
} from "../../../../logic/utilities.js";
import { Table, TableHeader, TableRow, TableCell } from "../../../../common/Table";
import { GameQueryParamName, PageQueryParamName, useQueryParameter } from "../../../../common/queryParameters";
import Pager from "../../../../common/Pager";
import { useDispatch, useSelector } from "react-redux";
import { fetchResults, selectResultsState } from "../../resultsSlice";
import { Icon, TableCellThumbnail, Thumbnail, ResultRow, DesktopDate, MobileDate, StyledTableContainer } from "./styled";
import firstPlayer from "../../../../images/firstPlayer.svg";
import dateImage from "../../../../images/date.svg";
import hourglass from "../../../../images/hourglass.svg";
import numberOfPlayersImage from "../../../../images/numberOfPlayers.svg";
import { toResult } from "../../../../common/routes";
import Loading from "../../../../common/Loading";

const ResultsTable = () => {
  const { results, numberOfResults, loading } = useSelector(selectResultsState);
  const page = useQueryParameter(PageQueryParamName) || 1;
  const selectedGameId = useQueryParameter(GameQueryParamName);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchResults({ page, selectedGameId }));
  }, [dispatch, selectedGameId, page]);

  return (
    <StyledTableContainer>
      {
        loading ?
          <Loading message="Trwa ładowanie danych, proszę czekać…" /> :
          <>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader></TableHeader>
                  <TableHeader>Nazwa gry</TableHeader>
                  <TableHeader><Icon src={firstPlayer} /></TableHeader>
                  <TableHeader><Icon src={numberOfPlayersImage} /></TableHeader>
                  <TableHeader><Icon src={dateImage} /></TableHeader>
                  <TableHeader><Icon src={hourglass} /></TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <ResultRow onClick={() => history.push(toResult({ id: result._id }))} key={index}>
                    <TableCellThumbnail>
                      <Thumbnail src={result.game.thumbnailUrl} alt="" />
                    </TableCellThumbnail>
                    <TableCell>
                      {result.game.name}
                    </TableCell>
                    <TableCell>
                      {result.scores.find((score, index) => index === 0).user.name}
                    </TableCell>
                    <TableCell>
                      {result.scores.length}
                    </TableCell>
                    <TableCell>
                      <DesktopDate>{formatDateString(result.date)}</DesktopDate>
                      <MobileDate>{formatDateString(result.date, "short")}</MobileDate>
                    </TableCell>
                    <TableCell>
                      {result.playingTime ? `${result.playingTime}min.` : "-"}
                    </TableCell>
                  </ResultRow>
                ))}
              </tbody>
            </Table>
            {numberOfResults > 10 && <Pager numberOfResults={numberOfResults} />}
          </>
      }
    </StyledTableContainer >
  );
}

export default ResultsTable;
