import React from "react";
import Form from "react-bootstrap/Form";
function GameSelect({ selectedGame, selectGame, games, firstOption }) {
  return (
    <Form.Control
      value={selectedGame !== undefined ? selectedGame._id : ""}
      onChange={(e) => selectGame(e)}
      as="select"
    >
      <option value="">{firstOption}</option>
      {games.map((game) => (
        <option key={game._id} value={game._id}>
          {game.name}
        </option>
      ))}
    </Form.Control>
  );
}
export default GameSelect;
