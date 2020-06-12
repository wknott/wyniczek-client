import React from 'react'
import GamesTable from './GamesTable'
import NewGameForm from './NewGameForm'
import GameLastResultTable from "./GameLastResultTable";
function Games() {
  return(
    <div>
      <NewGameForm/>
      <h2 className="gamesHeader">Spis dodanych gier</h2>
      <GamesTable/>
      <h2 className="gamesHeader" id={"ostatnieWyniki"}>Liczba dni od ostatniej rozgrywki</h2>
      <GameLastResultTable />
    </div>
  )
}
export default Games