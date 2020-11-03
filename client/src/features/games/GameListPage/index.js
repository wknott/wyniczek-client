import React, { useEffect, useState } from "react";
import { deleteGame } from "../../../proxy/api";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames, selectGames } from "../gamesSlice";
import { Table, TableContainer, TableHeader, TableCell, TableRow } from "../../../common/Table";
import Button from "../../../common/Button";
import List, { ListItem } from "../../../common/List";
import GameTile from "../GameTile";
import { GameTilesContainer } from "./styled";

function GameListPage() {
  const dispatch = useDispatch();
  const games = useSelector(selectGames);

  const [show, setShow] = useState(false);
  const [gameId, setGameId] = useState("");
  const handleDeleteGame = async () => {
    await deleteGame(gameId);
    setShow(false);
  }

  function handleClick(gameId) {
    setShow(true);
    setGameId(gameId);
  }

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <>
      <GameTilesContainer>
        {games?.map((game, index) =>
          <GameTile key={index} game={game} />
        )}
      </GameTilesContainer>
      <TableContainer>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>#</TableHeader>
              <TableHeader>Nazwa</TableHeader>
              <TableHeader>Liczba graczy</TableHeader>
              <TableHeader>Kategorie punktów</TableHeader>
              <TableHeader></TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {games !== [] ? (
              games.map((game, index) => (
                <tr key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{game.name}</TableCell>
                  {game.minPlayers === game.maxPlayers ? (
                    <TableCell>{game.minPlayers}</TableCell>
                  ) : (
                      <TableCell>
                        {game.minPlayers} - {game.maxPlayers}
                      </TableCell>
                    )}
                  <TableCell>
                    {game.pointFields.length > 0 ? (
                      <>
                        <Button>
                          Zobacz kategorie
                      </Button>
                        <List>
                          {game.pointFields.map((field, index) => (
                            <ListItem key={index} eventKey="0">
                              <p>{field}</p>
                            </ListItem>
                          ))}
                        </List>
                      </>
                    ) : (
                        <></>
                      )}
                  </TableCell>
                  <TableCell>
                    {1 ? (
                      <Button
                        disabled
                        size="sm"
                        variant="danger"
                        onClick={() => handleClick(game._id)}
                      >
                        X
                      </Button>
                    ) : (
                        <></>
                      )}
                  </TableCell>
                </tr>
              ))
            ) : (
                <></>
              )}
          </tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default GameListPage;

// <DeleteModal
//         show={show}
//         handleClose={() => setShow(false)}
//         handleDelete={handleDeleteGame}
//         id={gameId}
//         warningText={"Czy chcesz usunąć tą grę?"}
//       />