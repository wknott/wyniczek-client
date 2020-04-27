import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Wyniczek from "./components/Wyniczek"
import Navigation from "./components/Navigation"
import Users from "./components/Users"
import Games from "./components/Games"
import NewResultForm from './components/NewResultForm'
function App() {
  return (
      <Router>
        <div className="container">
          <Navigation/>
          <Route path="/" exact component={Wyniczek}/>
          <Route path="/createresult" component={NewResultForm}/>
          <Route path="/games" component={Games}/>
          <Route path="/users" component={Users}/>
        </div>
      </Router>
  );
}

export default App
