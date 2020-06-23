import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";

function LoginForm() {
  const { userHasAuthenticated } = useAppContext();
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const inputRef = useRef();
  
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    const newUser = { username: name, password: password };

    try {
      const res = await fetch("/api/users/authenticate", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const data = await res.json();

      if (data.token != null) {
        localStorage.setItem("user", JSON.stringify(data));
        userHasAuthenticated(true);
      }
      history.push("/");
    } catch (err) {
      return err;
    }
  }
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <h3>Logowanie</h3>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="formNewUserName">
              <Form.Label>Nazwa</Form.Label>
              <Form.Control
                type="text"
                placeholder="Podaj nazwę"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                ref={inputRef}
              />
            </Form.Group>
            <Form.Group controlId="formNewUserPassword">
              <Form.Label>Hasło</Form.Label>
              <Form.Control
                type="password"
                placeholder="Podaj hasło"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Zaloguj
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
