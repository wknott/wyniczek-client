import React from "react";
import GamesTable from "./GamesTable";
import GameLastResultTable from "./GameLastResultTable";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const Games = () => (
  <div>
    <Tabs defaultActiveKey="lastResults" id="uncontrolled-tab-example">
      <Tab eventKey="gamesTable" title="Spis gier">
        <h2 className="gamesHeader">Spis gier</h2>
        <GamesTable />
      </Tab>
      <Tab eventKey="lastResults" title="Ostatnie wyniki">
        <h2 className="gamesHeader">Liczba dni od ostatniego wyniku</h2>
        <GameLastResultTable />
      </Tab>
      {/* {isAuthenticated && <Tab eventKey="newGame" title="Nowa gra">
          <h2 className="gamesHeader">Nowa gra</h2>
          <NewGameForm isActive={newGameTabIsActive} />
        </Tab>} */}
    </Tabs>
  </div>
);

export default Games;
