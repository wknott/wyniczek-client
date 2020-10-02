import React from "react";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import { formatDateString } from "../../../../../logic/utilities.js";
function ResultModal(props) {
  const { show, handleClose, result } = props;
  return result.game !== undefined ? (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <h2>
          {result.game.name}, {formatDateString(result.date)}
        </h2>
      </Modal.Header>
      <Modal.Body>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Kategoria</th>
              {result.scores.map((score, index) => (
                <td key={index}>{score.user.name}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {result.game.pointFields.map((kategory, indexk) => (
              <tr key={indexk}>
                <td>{kategory}</td>
                {result.scores.map((score, index) => (
                  <td key={index}>{score.points[indexk] || "0"}</td>
                ))}
              </tr>
            ))}
            <tr>
              <td className="bold">Wynik</td>
              {result.scores.map((score, index) => (
                <td key={index} className="bold">
                  {Object.values(score.points).reduce((x, y) => x + y, 0)}
                </td>
              ))}
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  ) : (
      <></>
    );
}
export default ResultModal;
