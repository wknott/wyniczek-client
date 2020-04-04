import React, {useState, useEffect} from 'react'
function GamesTable() {
  const [games,setGames] = useState([])
  async function loadGames(){
    try {
      const res = await fetch('/api/games')
      const games = await res.json()
      setGames(games)
    } catch (err) {
      return err
    }
  }

  useEffect(()=>{
    loadGames()
  },[])
  return (
    <div>
      {games !== [] ? games.map(
            (game,index) => (
              <p key={index}>
                 {game.name}
              </p>
              )):<></> }
    </div>
  )
}

export default GamesTable