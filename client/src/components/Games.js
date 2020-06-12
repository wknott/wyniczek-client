import React from "react";
import GamesTable from "./GamesTable";
import GameLastResultTable from "./GameLastResultTable";
import NewGameModal from "./NewGameModal";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
function Games() {
  return (
    <div>
      <Tabs defaultActiveKey="lastResults" id="uncontrolled-tab-example">
        <Tab eventKey="gamesTable" title="Spis gier">
          <h2 className="gamesHeader">Spis gier</h2>
          <GamesTable />
        </Tab>
        <Tab eventKey="lastResults" title="Ostatnie wyniki">
          <h2 className="gamesHeader">Liczba dni od ostatniej rozgrywki</h2>
          <GameLastResultTable />
        </Tab>
        <Tab eventKey="newGame" title="Dodaj grę">
          <h2 className="gamesHeader">Nowa gra</h2>
          <p>
            Jeśli chcesz dodać nową grę, kliknij poniżej:
          </p>
          <NewGameModal />
        </Tab>
      </Tabs>
    </div>
  );
}
export default Games;
