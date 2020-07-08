import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function NewUserForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const newUser = { name: name, password: password };
    try {
      const res = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const data = await res.json();

      setName("");
      return data;
    } catch (err) {
      return err;
    }
  }
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formNewUserName">
        <Form.Label>Nazwa</Form.Label>
        <Form.Control
          type="text"
          placeholder="Podaj nazwę"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formNewUserPassword">
        <Form.Label>Hasło</Form.Label>
        <Form.Control
          type="password"
          placeholder="Podaj hasło"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Dodaj użytkownika
      </Button>
    </Form>
  );
}

export default NewUserForm;
