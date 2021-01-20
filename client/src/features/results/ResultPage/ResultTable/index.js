import React from "react";
import { TableContainer, TableHeader, TableCell, TableRow } from "../../../../common/Table/";
import { StyledTable, StyledTableCell } from "./styled";

const ResultTable = ({ result }) => (
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
              <TableCell key={index}>{score.points[indexk] || "0"}</TableCell>
            ))}
          </TableRow>
        ))}
        <TableRow>
          <StyledTableCell>Wynik</StyledTableCell>
          {result.scores.map((score, index) => (
            <StyledTableCell key={index}>
              {Object.values(score.points).reduce((x, y) => x + y, 0)}
            </StyledTableCell>
          ))}
        </TableRow>
      </tbody>
    </StyledTable>
  </TableContainer>
)

export default ResultTable;