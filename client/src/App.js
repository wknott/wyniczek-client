import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Wyniczek from "./components/Wyniczek"
import CreateResult from "./components/CreateResult"
import Navigation from "./components/Navigation"
import UsersTable from "./components/UsersTable"
function App() {
  return (
      <Router>
        <div className="container">
          <Navigation/>
          <Route path="/" exact component={Wyniczek}/>
          <Route path="/create" component={CreateResult}/>
          <Route path="/users" component={UsersTable}/>
        </div>
      </Router>
  );
}

export default App
