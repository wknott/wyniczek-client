import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Wyniczek from "./components/Wyniczek"
import EdycjaWynikow from "./components/EdycjaWynikow"
import StworzWynik from "./components/StworzWynik"

function App() {
  return (
    <Router>
      <Route path="/" exact component={Wyniczek}/>
      <Route path="/edit/:id" component={EdycjaWynikow}/>
      <Route path="/create" component={StworzWynik}/>
    </Router>
  );
}

export default App;
