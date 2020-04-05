import React from 'react'
import GamesTable from './GamesTable'
import NewGameForm from './NewGameForm'
function Games() {
  return(
    <div>
      <NewGameForm/>
      <GamesTable/>
    </div>
  )
}
export default Games