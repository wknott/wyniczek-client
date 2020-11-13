import React from "react";
import meeple from "../../../images/meeple.svg";
import { StyledTile, Image, DefaultImage, DefaultImageContainer, GameName } from "./styled";
import { Link } from "react-router-dom";
import { toGame } from "../../../routes";
import { formatDateStringLong } from "../../../logic/utilities";

const GameTile = ({ game }) => {
  return (
    game ?
      <StyledTile as={Link} to={toGame({ id: game._id })}>
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
          {game.lastResultDate &&
            <p>
              {`Data ostatniego wyniku:
              ${formatDateStringLong(game.lastResultDate)}`}
            </p>
          }
          {game.numberOfResults && <p>Liczba wyników: {game.numberOfResults}</p>}
        </div>
      </StyledTile> :
      <>
      </>
  );
};

export default GameTile;