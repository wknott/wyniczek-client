import React from "react";
import meeple from "../../../images/meeple.svg";
import {
  StyledTile,
  Image,
  DefaultImage,
  DefaultImageContainer,
  GameName,
  StyledParagraph
} from "./styled";
import { Link } from "react-router-dom";
import { toGame } from "../../../routes";
import { formatDateString } from "../../../logic/utilities";

const GameTile = ({ game }) => {
  return (
    game ?
      <StyledTile as={Link} to={toGame({ id: game._id })}>
        {game.imgUrl ?
          <Image src={game.imgUrl} alt="game" /> :
          <DefaultImageContainer>
            <DefaultImage src={meeple} alt="meeple" />
          </DefaultImageContainer>
        }
        <div>
          <GameName>{game.name}</GameName>
          {game.lastResultDate &&
            <StyledParagraph>
              {`Data ostatniego wyniku:
              ${formatDateString(game.lastResultDate)}`}
            </StyledParagraph>
          }
          {game.numberOfResults &&
            <StyledParagraph>
              Liczba wyników:
              <strong>{game.numberOfResults}</strong>
            </StyledParagraph>
          }
        </div>
      </StyledTile> :
      <></>
  );
};

export default GameTile;