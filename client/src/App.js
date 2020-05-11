import React, {useState} from 'react'
import { AppContext } from "./libs/contextLib";
import { BrowserRouter as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Wyniczek from "./components/Wyniczek"
import Navigation from "./components/Navigation"
import Users from "./components/Users"
import Games from "./components/Games"
import NewResultForm from './components/NewResultForm'
import LoginForm from './components/LoginForm'
import PrivateRoute from './components/PrivateRoute'
import ResultsTable from './components/ResultsTable'
import './App.css'
function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  
  function handleLogout() {
    userHasAuthenticated(false);
    localStorage.removeItem("user")
  }
  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <div className="container">
        <Router>
          <div className="container">
            <Navigation isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>
            <PrivateRoute exact path="/" component={Wyniczek} />
            <PrivateRoute path="/createresult" component={NewResultForm}/>
            <PrivateRoute path="/games" component={Games}/>
            <PrivateRoute path="/results" component={ResultsTable}/>
            <Route path="/users" component={Users}/>
            <Route path="/signup" component={LoginForm}/>
          </div>
        </Router>
      </div> 
    </AppContext.Provider>
  );
}

export default App
