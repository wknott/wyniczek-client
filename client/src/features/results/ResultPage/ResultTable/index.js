import React from "react";
import { TableContainer, Table, TableHeader, TableCell } from "../../../../common/Table/";
import { StyledTableCell } from "./styled";

const ResultTable = ({ result }) => (
  <TableContainer>
    <Table>
      <thead>
        <tr>
          <TableHeader>Kategoria</TableHeader>
          {result.scores.map((score, index) => (
            <TableHeader key={index}>{score.user.name}</TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {result.game.pointFields.map((kategory, indexk) => (
          <tr key={indexk}>
            <TableHeader>{kategory}</TableHeader>
            {result.scores.map((score, index) => (
              <TableCell key={index}>{score.points[indexk] || "0"}</TableCell>
            ))}
          </tr>
        ))}
        <tr>
          <StyledTableCell>Wynik</StyledTableCell>
          {result.scores.map((score, index) => (
            <StyledTableCell key={index}>
              {Object.values(score.points).reduce((x, y) => x + y, 0)}
            </StyledTableCell>
          ))}
        </tr>
      </tbody>
    </Table>
  </TableContainer>
)

export default ResultTable;