import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import { formatDateString } from "../../../../logic/utilities.js";
import { Table, TableHeader, TableRow, TableCell } from "../../../../common/Table";
import { GameQueryParamName, PageQueryParamName, useQueryParameter } from "../../../../common/queryParameters";
import Pager from "../../../../common/Pager";
import { useDispatch, useSelector } from "react-redux";
import { fetchResults, selectResultsState } from "../../resultsSlice";
import { Icon, TableCellThumbnail, Thumbnail, ResultRow, DesktopDate, MobileDate, StyledTableContainer } from "./styled";
import firstPlayerImage from "../../../../images/firstPlayer.svg";
import numberOfPlayersImage from "../../../../images/numberOfPlayers.svg";
import dateImage from "../../../../images/date.svg";
import hourglassImage from "../../../../images/hourglass.svg";
import { toResult } from "../../../../common/routes";
import Loading from "../../../../common/Loading";

const ResultsTable = () => {
  const { results, numberOfResults, loading } = useSelector(selectResultsState);
  const page = useQueryParameter(PageQueryParamName) || 1;
  const selectedGameId = useQueryParameter(GameQueryParamName);
  const dispatch = useDispatch();
  const history = useHistory();
  const tableHeadersIcons = [
    { icon: firstPlayerImage, description: "Pierwszy gracz" },
    { icon: numberOfPlayersImage, description: "Liczba graczy" },
    { icon: dateImage, description: "Data wyniku" },
    { icon: hourglassImage, description: "Czas rozgrywki" },
  ];

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
                  {tableHeadersIcons.map(tableHeader => (
                    <TableHeader key={tableHeader.description}>
                      <Icon src={tableHeader.icon} data-tip={tableHeader.description} />
                      <ReactTooltip place="top" type="info" effect="solid" />
                    </TableHeader>
                  ))}
                </TableRow>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <ResultRow onClick={() => history.push(toResult({ id: result._id }))} key={result._id}>
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
                      {result.playingTime ? `${result.playingTime} min.` : "-"}
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
