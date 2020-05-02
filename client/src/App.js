import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Wyniczek from "./components/Wyniczek"
import Navigation from "./components/Navigation"
import Users from "./components/Users"
import Games from "./components/Games"
import NewResultForm from './components/NewResultForm'
import LoginForm from './components/LoginForm'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div className="container">
      <Router>
        <div className="container">
          <Navigation/>
          <PrivateRoute exact path="/" component={Wyniczek} />
          <PrivateRoute path="/createresult" component={NewResultForm}/>
          <PrivateRoute path="/games" component={Games}/>
          <Route path="/users" component={Users}/>
          <Route path="/signup" component={LoginForm}/>
        </div>
      </Router>
    </div> 
  );
}

export default App
