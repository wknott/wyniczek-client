import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { handleLogin } from "../../../common/authSlice";
import { toResults } from "../../../common/routes";
import { postLogin } from "../../../proxy/api";
import UserForm from "../UserForm";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = { username: name, password: password };

    try {
      const data = await postLogin(user);
      if (data.token != null) {
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(handleLogin());
        history.push(toResults());
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
    <UserForm
      onSubmit={onSubmit}
      message={message}
      name={name}
      setName={setName}
      password={password}
      setPassword={setPassword}
      showPassword
      buttonText="Zaloguj"
    />
  );
}

export default LoginPage;