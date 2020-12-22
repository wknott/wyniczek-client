import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../common/authSlice";
import Header from "../../../common/Header";
import PageHeader from "../../../common/PageHeader";
import { toNewUserPage } from "../../../common/routes";
import StyledLink from "../../../common/StyledLink";
import UsersTable from "./UsersTable";

const UsersPage = () => {
  const { isAuthenticated } = useSelector(selectAuth);

  return (
    <>
      <PageHeader>
        <Header>Użytkownicy</Header>
        {isAuthenticated &&
          <StyledLink to={toNewUserPage()}>Dodaj nowego użytkownika</StyledLink>
        }
      </PageHeader>
      <UsersTable />
    </>
  );
}

export default UsersPage;