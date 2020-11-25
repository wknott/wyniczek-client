import React, { useEffect, useRef, useState } from "react";
import Input from "../../../../common/Input";
import Label from "../../../../common/Label";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { handleLogin } from "../../../../common/authSlice";
import { toResults } from "../../../../routes";
import { ErrorMessage, Form, FormContainer, SubmitButton } from "./styled";
import { postLogin } from "../../../../proxy/api";

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = { username: name, password: password };

    try {
      const data = await postLogin(user);
      if (data.token != null) {
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(handleLogin());
        history.push(toResults());
        console.log("zlezlezl")
      }
      else {
        setMessage(data.message)
        setName("")
        setPassword("")
      }
    } catch (err) {
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
          />
        </Label>
        <Label labelText="Hasło">
          <Input
            type="password"
            placeholder="Podaj hasło"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Label>
        {message && <ErrorMessage>{message}</ErrorMessage>}
        <SubmitButton>Zaloguj</SubmitButton>
      </Form>
    </FormContainer>
  );
}

export default LoginForm;