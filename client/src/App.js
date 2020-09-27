import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navigation from "./features/navigation/Navigation"
import Games from "./components/Games/Games";
import NewResultForm from "./features/results/NewResultPage/NewResultForm";
import LoginForm from "./components/LoginForm/LoginForm";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ResultsTable from "./components/Results/ResultsTable";
import AllUsersTable from "./components/Users/AllUsersTable";
import Stats from "./components/Stats/Stats";
import UserStats from "./components/Users/UserStats";
import Container from "./components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { toNewResult, toUserStats, toResults, toGames, toUsers, toStats, toLogin, toHomePage } from "./routes";
import HomePage from "./features/homepage/HomePage";

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Container>
      <Switch>
        <Route path={toResults()} >
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
        <Route exact path={toHomePage()}>
          <HomePage />
        </Route>
        <Route>
          <Redirect to={toHomePage()} />
        </Route>
      </Switch>
    </Container>
  </BrowserRouter >
);

export default App;
