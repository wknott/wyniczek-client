import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import NewUserForm from "./components/Users/NewUserForm";
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

const App = () => (
  <Router>
    <Navigation />
    <Container>
      <Route exact path="/" component={ResultsTable} />
      <Route path="/gry" component={Games} />
      <Route path="/uzytkownicy" component={AllUsersTable} />
      <Route path="/statystyki-gier" component={Stats} />
      <Route path="/rejestracja" component={NewUserForm} />
      <Route path="/logowanie" component={LoginForm} />
      <PrivateRoute path="/nowy-wynik" component={NewResultForm} />
      <PrivateRoute path="/moje-statystyki" component={UserStats} />
    </Container>
  </Router>
);

export default App;
