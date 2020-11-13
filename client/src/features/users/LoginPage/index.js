import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleLogin } from "../../../authSlice";
import { toResults } from "../../../routes";
import Label from "../../../common/Label";
import Input from "../../../common/Input";
import Button from "../../../common/Button";

const LoginPage = () => {
  const dispatch = useDispatch();
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
        dispatch(handleLogin());
        history.push(toResults());
      }
      else {
        setName('')
        setPassword('')
      }
    } catch (err) {
      return err;
    }
  }
  return (
    <>
      <h3>Logowanie</h3>
      <form onSubmit={onSubmit}>
        <Label labelText="Nazwa">
          <Input
            type="text"
            placeholder="Podaj nazwę"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Label>
        <Button>
          Zaloguj
        </Button>
      </form>
    </>
  );
}

export default LoginPage;
