import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Wyniczek from "./components/Wyniczek";
import EdycjaWynikow from "./components/EdycjaWynikow";
import StworzWynik from "./components/StworzWynik";
import Menu from "./components/Menu";
function App() {
  return (
      <Router>
        <div className="container">
          <Menu/>
          <Route path="/" exact component={Wyniczek}/>
          <Route path="/edit/:id" component={EdycjaWynikow}/>
          <Route path="/create" component={StworzWynik}/>
        </div>
      </Router>
  );
}

export default App;
