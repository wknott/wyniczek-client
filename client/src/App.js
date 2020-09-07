import React, { useState, useEffect } from "react";
import { AppContext } from "./libs/contextLib";
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
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export const AuthContext = React.createContext();

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    const isUserInLocalStorage = localStorage.getItem("user") !== null;
    userHasAuthenticated(isUserInLocalStorage);
  }, []);

  function handleLogout() {
    userHasAuthenticated(false);
    localStorage.removeItem("user");
  }

  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Router>
        <Navigation
          isAuthenticated={isAuthenticated}
          handleLogout={handleLogout}
        />
        <div className="appContainer">
          <Route exact path="/" component={ResultsTable} />
          <PrivateRoute path="/nowy-wynik" component={NewResultForm} />
          <Route path="/gry" component={Games} />
          <Route path="/uzytkownicy" component={AllUsersTable} />
          <PrivateRoute path="/moje-statystyki" component={UserStats} />
          <Route path="/statystyki-gier" component={Stats} />
          <Route path="/rejestracja" component={NewUserForm} />
          <Route path="/logowanie" component={LoginForm} />
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
