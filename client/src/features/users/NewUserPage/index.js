import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toUsers } from "../../../common/routes";
import { postRegister } from "../../../proxy/api";
import UserForm from "../UserForm";

const NewUserPage = () => {
  const history = useHistory();
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

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
    };
  };

  return (
    <UserForm
      onSubmit={onSubmit}
      message={message}
      name={name}
      setName={setName}
      showPassword={false}
      buttonText="Dodaj nowego użytkownika"
    />
  );
}

export default NewUserPage;