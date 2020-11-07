import React from "react";
import meeple from "../../../images/meeple.svg";
import { Tile, Image, DefaultImage, DefaultImageContainer, GameName } from "./styled";
import { Link } from "react-router-dom";
import { toGame } from "../../../routes";

const GameTile = ({ game }) => {
  return (
    game ?
      <Tile as={Link} to={toGame({ id: game._id })}>
        {
          game.imgUrl ?
            <Image src={game.imgUrl} alt="game" /> :
            <DefaultImageContainer>
              <DefaultImage src={meeple} alt="meeple" />
            </DefaultImageContainer>
        }
        <div>
          <GameName>{game.name}</GameName>
          <p>Liczba graczy: {game.minPlayers} - {game.maxPlayers}</p>
          <p>{game.pointFields.length > 0 ? "Kategorie punktów: " : ""} {game.pointFields.join(", ")}</p>

        </div>
      </Tile> :
      <>
      </>
  );
};

export default GameTile;