import React, { useState } from "react";
import GamesTable from "./GamesTable";
import GameLastResultTable from "./GameLastResultTable";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import NewGameForm from "./NewGameForm";

function Games() {
  const [newGameTabIsActive, setNewGameTabIsActive] = useState(false);

  function handleSelect(key) {
    setNewGameTabIsActive(key === "newGame")
  }

  return (
    <div>
      <Tabs defaultActiveKey="lastResults" id="uncontrolled-tab-example" onSelect={(e) => handleSelect(e)}>
        <Tab eventKey="gamesTable" title="Spis gier">
          <h2 className="gamesHeader">Spis gier</h2>
          <GamesTable />
        </Tab>
        <Tab eventKey="lastResults" title="Ostatnie wyniki">
          <h2 className="gamesHeader">Liczba dni od ostatniego wyniku</h2>
          <GameLastResultTable />
        </Tab>
        <Tab eventKey="newGame" title="Nowa gra">
          <h2 className="gamesHeader">Nowa gra</h2>
          <NewGameForm isActive={newGameTabIsActive} />
        </Tab>
      </Tabs>
    </div>
  );
}
export default Games;
