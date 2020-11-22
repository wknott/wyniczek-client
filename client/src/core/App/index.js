import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navigation from "../Navigation"
import NewResultForm from "../../features/results/NewResultPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Container from "../../common/Container";
import {
  toNewResult,
  toResults,
  toGames,
  toLogin,
  toHomePage,
  toNewGame,
  toGame,
  toNewGameSearch,
  toResult
} from "../../routes";
import ResultsPage from "../../features/results/ResultsPage";
import NewGameSearchPage from "../../features/games/NewGameSearchPage";
import GamesPage from "../../features/games/GamesPage";
import GamePage from "../../features/games/GamePage";
import NewGamePage from "../../features/games/NewGamePage";
import ResultPage from "../../features/results/ResultPage";
import LoginPage from "../../features/users/LoginPage";

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Container>
      <Switch>
        <PrivateRoute path={toNewResult()} component={NewResultForm} />
        <PrivateRoute path={toNewGameSearch()} component={NewGameSearchPage} />
        <PrivateRoute path={toNewGame()} component={NewGamePage} />
        <Route path={toResult()} >
          <ResultPage />
        </Route>
        <Route path={toResults()} >
          <ResultsPage />
        </Route>
        <Route path={toGame()}>
          <GamePage />
        </Route>
        <Route path={toGames()}>
          <GamesPage />
        </Route>
        <Route path={toLogin()}>
          <LoginPage />
        </Route>
        <Route exact path={toHomePage()}>
          <ResultsPage />
        </Route>
        <Route>
          <Redirect to={ResultsPage()} />
        </Route>
      </Switch>
    </Container>
  </BrowserRouter >
);

export default App;
