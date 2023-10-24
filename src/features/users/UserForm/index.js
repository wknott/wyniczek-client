import React, { useEffect, useRef } from "react";
import Input from "../../../common/Input";
import Label from "../../../common/Label";
import { ErrorMessage, Form, FormContainer, SubmitButton } from "./styled";

const UserForm = ({
  onSubmit,
  message,
  showPassword,
  buttonText,
  name,
  setName,
  password,
  setPassword
}) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
        {showPassword &&
          <Label labelText="Hasło">
            <Input
              type="password"
              placeholder="Podaj hasło"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Label>
        }
        {message && <ErrorMessage>{message}</ErrorMessage>}
        <SubmitButton>{buttonText}</SubmitButton>
      </Form>
    </FormContainer>
  );
}

export default UserForm;