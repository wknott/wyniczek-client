import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import LinkToWebsite from "../../../common/LinkToWebsite";
import Tile from "../../../common/Tile";
import { useParams } from "react-router-dom";
import { fetchGames, getGameById, selectGames } from "../gamesSlice";
import { theme } from "../../../theme";
import meeple from "../../../images/meeple.svg";
import { Image, DefaultImage, DefaultImageContainer, Tags, Tag, Title } from "./styled";

const GamePage = () => {
  const { id } = useParams();
  const games = useSelector(selectGames);
  const dispatch = useDispatch();
  const game = useSelector(state => getGameById(state, id));
  useEffect(() => {
    if (games.length < 1) {
      dispatch(fetchGames())
    }
  }, [dispatch, games]);
  return (
    game ?
      <Tile>
        {
          game.imgUrl ?
            <Image src={game.imgUrl} alt="game" /> :
            <DefaultImageContainer>
              <DefaultImage src={meeple} alt="meeple" />
            </DefaultImageContainer>
        }
        <div>
          <Title>{game.name}</Title>
          <p>Link do opisu gry w serwisie BGG:
          {game.bggId ? <LinkToWebsite
              target="_blank"
              rel="noopener noreferrer"
              href={`https://boardgamegeek.com/boardgame/${game.bggId}`}
            >
              {" "}{game.name}
            </LinkToWebsite> : "brak linku"}
          </p>
          <Tags>
            {game.pointFields.map(field => <Tag>{field}</Tag>)}
          </Tags>
        </div>
      </Tile> :
      <ReactLoading color={theme.colors.windsor} />
  )
}

export default GamePage;