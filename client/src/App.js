import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Games from "./components/Games/Games";
import NewResultForm from "./components/Results/NewResultForm";
import LoginForm from "./components/LoginForm/LoginForm";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ResultsTable from "./components/Results/ResultsTable";
import AllUsersTable from "./components/Users/AllUsersTable";
import Stats from "./components/Stats/Stats";
import UserStats from "./components/Users/UserStats";
import Container from "./components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { toNewResult, toUserStats, toResults, toGames, toUsers, toStats, toLogin } from "./routes";

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Container>
      <Switch>
        <Route exact path={toResults()} >
          <ResultsTable />
        </Route>
        <Route path={toGames()}>
          <Games />
        </Route>
        <Route path={toUsers()}>
          <AllUsersTable />
        </Route>
        <Route path={toStats()}>
          <Stats />
        </Route>
        <Route path={toLogin()}>
          <LoginForm />
        </Route>
        <PrivateRoute path={toNewResult()} component={NewResultForm} />
        <PrivateRoute path={toUserStats()} component={UserStats} />
        <Route>
          <Redirect to={toResults()} />
        </Route>
      </Switch>
    </Container>
  </BrowserRouter >
);

export default App;
