import React from 'react'
import GamesTable from './GamesTable'
import NewGameForm from './NewGameForm'
import LastResultTable from "./LastResultTable";
function Games() {
  return(
    <div>
      <NewGameForm/>
      <h2 className="gamesHeader">Spis dodanych gier</h2>
      <GamesTable/>
      <h2 className="gamesHeader" id={"ostatnieWyniki"}>Liczba dni od ostatniej rozgrywki</h2>
      <LastResultTable />
    </div>
  )
}
export default Games