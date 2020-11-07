import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import LinkToWebsite from "../../../common/LinkToWebsite";
import Section from "../../../common/Section";
import { selectAuth } from "../../../authSlice";
import { useParams } from "react-router-dom";
import { fetchGames, getGameById, selectGames } from "../gamesSlice";
import { theme } from "../../../theme";
import meeple from "../../../images/meeple.svg";
import { Image, DefaultImage, DefaultImageContainer } from "./styled";

const GamePage = () => {
  const { isAuthenticated } = useSelector(selectAuth);
  const { id } = useParams();
  const games = useSelector(selectGames);
  const dispatch = useDispatch();
  const game = useSelector(state => getGameById(state, id));
  console.log(games);
  useEffect(() => {
    if (games.length < 1) {
      dispatch(fetchGames())
    }
  }, [dispatch, games]);
  return (
    game ?
      <Section>
        {
          game.imgUrl ?
            <Image src={game.imgUrl} alt="game" /> :
            <DefaultImageContainer>
              <DefaultImage src={meeple} alt="meeple" />
            </DefaultImageContainer>
        }
        <h1>{game.name}</h1>
        <p>Link do opisu gry w serwisie BGG:
        {game.bggId ? <LinkToWebsite
            target="_blank"
            rel="noopener noreferrer"
            href={`https://boardgamegeek.com/boardgame/${game.bggId}`}
          >
            game.name
          </LinkToWebsite> : "brak linku"}
        </p>
      </Section> :
      <ReactLoading color={theme.colors.windsor} />
  )
}

export default GamePage;