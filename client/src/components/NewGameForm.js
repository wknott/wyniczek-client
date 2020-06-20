import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { authHeader } from "../helpers/auth-header";
import { ButtonGroup } from "react-bootstrap";

function NewGameForm() {
  const [name, setName] = useState("");
  const [minPlayers, setMinPlayers] = useState(2);
  const [maxPlayers, setMaxPlayers] = useState(4);
  const [pointFields, setPointFields] = useState([]);

  function addField() {
    setPointFields([...pointFields, ""]);
  }

  function deleteField() {
    setPointFields(
      pointFields.filter((item, index) => index !== pointFields.length - 1)
    );
  }

  async function onSubmit(e) {
    e.preventDefault();
    const newGame = { name, minPlayers, maxPlayers, pointFields };
    const authToken = authHeader()["Authorization"];

    try {
      const res = await fetch("/api/games", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: authToken,
        },
        body: JSON.stringify(newGame),
      });
      const data = await res.json();
      setName("");
      setMinPlayers(2);
      setMaxPlayers(4);
      setPointFields([]);
      return data;
    } catch (err) {
      return err;
    }
  }
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Nazwa</Form.Label>
        <Form.Control
          type="text"
          placeholder="Podaj nazwę"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="minPlayers">
        <Form.Label>Minimalna liczba graczy</Form.Label>
        <Form.Control
          type="number"
          required
          value={minPlayers}
          onChange={(e) => setMinPlayers(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="maxPlayers">
        <Form.Label>Maksymalna liczba graczy</Form.Label>
        <Form.Control
          type="number"
          required
          value={maxPlayers}
          onChange={(e) => setMaxPlayers(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="pointFields">
        <Form.Label>Kategorie punktów</Form.Label>
        <ButtonGroup>
          <Button variant="primary" onClick={addField}>
            Dodaj kategorię
          </Button>
          <Button variant="danger" onClick={deleteField}>
            Usuń kategorię
          </Button>
        </ButtonGroup>
        {pointFields.map((field, key) => (
          <Form.Control
            key={key}
            type="text"
            required
            value={field}
            onChange={(e) =>
              setPointFields(
                pointFields.map((name, index) =>
                  index === key ? e.target.value : name
                )
              )
            }
          />
        ))}
      </Form.Group>
      <Button variant="primary" type="submit">
        Dodaj grę
      </Button>
    </Form>
  );
}
export default NewGameForm;
