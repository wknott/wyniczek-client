import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import ResultModal from "./ResultModal";
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
import { Icon, TableCellThumbnail, Thumbnail } from "./styled";
import firstPlayer from "../../../../images/firstPlayer.svg";
import gameImage from "../../../../images/game.svg";
import dateImage from "../../../../images/date.svg";
import winner from "../../../../images/winner.svg";

const ResultsTable = () => {
  const { results, numberOfResults, loading } = useSelector(selectResultsState);
  const [showResultModal, setShowResultModal] = useState(false);
  const [selectedResult, setSelectedResult] = useState({});
  const page = useQueryParameter(PageQueryParamName) || 1;
  const selectedGameId = useQueryParameter(GameQueryParamName);
  const dispatch = useDispatch();

  const handleShowResultModal = (result) => {
    setSelectedResult(result);
    setShowResultModal(true);
  };

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
                  <TableRow key={index} onClick={() => handleShowResultModal(result)}>
                    <TableCellThumbnail>
                      <Thumbnail src={result.game.thumbnailUrl} alt="" />
                    </TableCellThumbnail>
                    <TableCell>{result.game.name}</TableCell>
                    <TableCell>
                      {result.scores.find((score, index) => index === 0).user.name}
                    </TableCell>
                    <TableCell>{window.innerWidth > 800 ? formatDateString(result.date) : formatDateStringShort(result.date)}</TableCell>
                    <TableCell>{calculateWinners(result).join(" ")}</TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
            {numberOfResults > 10 && <Pager numberOfResults={numberOfResults} />}
          </>
      }
      <ResultModal
        show={showResultModal}
        handleClose={() => setShowResultModal(false)}
        result={selectedResult}
      />
    </TableContainer >
  );
}

export default ResultsTable;
