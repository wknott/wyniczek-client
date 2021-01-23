import React, { useState } from "react";
import Edit from "../../../../common/Edit";
import { TableContainer, TableHeader, TableCell, TableRow } from "../../../../common/Table/";
import { StyledTable, StyledTableCell } from "./styled";

const ResultTable = ({ result, isUserResultAuthor }) => {
  const [editCell, setEditCell] = useState(null);

  const handleCellChange = (index, indexk) => {
    if (isUserResultAuthor()) {
      setEditCell({ index, indexk });
    };
  };

  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <TableRow>
            <TableHeader>Kategoria</TableHeader>
            {result.scores.map((score, index) => (
              <TableHeader key={index}>{score.user.name}</TableHeader>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {result.game.pointFields.map((kategory, indexk) => (
            <TableRow key={indexk}>
              <TableHeader>{kategory}</TableHeader>
              {result.scores.map((score, index) => (
                editCell?.index === index && editCell?.indexk === indexk ?
                  <Edit
                    key={index}
                    setEditCell={setEditCell}
                    score={score}
                    indexk={indexk}
                  /> :
                  <TableCell key={index} onClick={() => handleCellChange(index, indexk)}>
                    {score.points[indexk] || "0"}
                  </TableCell>
              ))}
            </TableRow>
          ))}
          <TableRow>
            <StyledTableCell>Wynik</StyledTableCell>
            {result.scores.map((score, index) => (
              editCell?.index === index && editCell?.indexk === 0 ?
                <Edit
                  key={index}
                  setEditCell={setEditCell}
                  score={score}
                  indexk={0}
                /> :
                <StyledTableCell key={index} onClick={() => handleCellChange(index, 0)}>
                  {Object.values(score.points).reduce((x, y) => x + y, 0)}
                </StyledTableCell>
            ))}
          </TableRow>
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default ResultTable;