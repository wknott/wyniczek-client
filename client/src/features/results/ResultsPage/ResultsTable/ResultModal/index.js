import React from "react";
import Modal from "react-bootstrap/Modal";
import { TableContainer, Table, TableHeader, TableCell } from "../../../../../common/Table/";
import { formatDateString } from "../../../../../logic/utilities.js";

function ResultModal(props) {
  const { show, handleClose, result } = props;
  return result.game !== undefined ? (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        {result.game.name}, {formatDateString(result.date)}
      </Modal.Header>
      <Modal.Body>
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
                  <TableCell>{kategory}</TableCell>
                  {result.scores.map((score, index) => (
                    <TableCell key={index}>{score.points[indexk] || "0"}</TableCell>
                  ))}
                </tr>
              ))}
              <tr>
                <TableCell className="bold">Wynik</TableCell>
                {result.scores.map((score, index) => (
                  <TableCell key={index} className="bold">
                    {Object.values(score.points).reduce((x, y) => x + y, 0)}
                  </TableCell>
                ))}
              </tr>
            </tbody>
          </Table>
        </TableContainer>
      </Modal.Body>
    </Modal>
  ) : (
      <></>
    );
}
export default ResultModal;
