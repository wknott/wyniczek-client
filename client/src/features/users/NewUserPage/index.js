import React, { useEffect, useRef, useState } from "react";
import Input from "../../../common/Input";
import Label from "../../../common/Label";
import { useHistory } from "react-router-dom";
import { toUsers } from "../../../common/routes";
import { ErrorMessage, Form, FormContainer, SubmitButton } from "../LoginPage/LoginForm/styled";
import { postRegister } from "../../../proxy/api";

const NewUserPage = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = { name };

    try {
      const data = await postRegister(user);
      history.push(toUsers());
      return data;
    } catch (err) {
      setName("");
      setMessage(`Użytkownik o nazwie ${name} już istnieje.`);
      return err;
    }
  }

  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <Label labelText="Login">
          <Input
            type="text"
            placeholder="Podaj login"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={inputRef}
            minLength={3}
          />
        </Label>
        {message && <ErrorMessage>{message}</ErrorMessage>}
        <SubmitButton>Dodaj nowego użytkownika</SubmitButton>
      </Form>
    </FormContainer>
  );
}

export default NewUserPage;