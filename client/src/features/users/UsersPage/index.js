import React from "react";
import Header from "../../../common/Header";
import UsersTable from "./UsersTable";

const UsersPage = () => {
  return (
    <>
      <Header>Użytkownicy</Header>
      <UsersTable />
    </>
  );
}

export default UsersPage;