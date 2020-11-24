import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import {
  formatDateString,
  calculateWinners,
} from "../../../../logic/utilities.js";
import { theme } from "../../../../theme";
import { Table, TableContainer, TableHeader, TableRow, TableCell } from "../../../../common/Table";
import { GameQueryParamName, PageQueryParamName, useQueryParameter } from "../../../../common/queryParameters";
import Pager from "../../../../common/Pager";
import { useDispatch, useSelector } from "react-redux";
import { fetchResults, selectResultsState } from "../../resultsSlice";
import { Icon, TableCellThumbnail, Thumbnail, ResultRow, DesktopDate, MobileDate } from "./styled";
import firstPlayer from "../../../../images/firstPlayer.svg";
import gameImage from "../../../../images/game.svg";
import dateImage from "../../../../images/date.svg";
import winner from "../../../../images/winner.svg";
import { toResult } from "../../../../routes";
import { useHistory } from "react-router-dom";

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
                      <DesktopDate>{formatDateString(result.date)}</DesktopDate>
                      <MobileDate>{formatDateString(result.date, "short")}</MobileDate>
                    </TableCell>
                    <TableCell>
                      {calculateWinners(result).join(" ")}
                    </TableCell>
                  </ResultRow>
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
