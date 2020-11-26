import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import LinkToWebsite from "../../../common/LinkToWebsite";
import { useParams } from "react-router-dom";
import { fetchGames, getGameById, selectGames } from "../gamesSlice";
import { theme } from "../../../theme";
import meeple from "../../../images/meeple.svg";
import { Image, DefaultImage, DefaultImageContainer, Tags, Tag, Title, GameTile } from "./styled";
import LastResult from "../LastResult";
import MetaData from "../../../common/MetaData";

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

  const linkToBgg = (
    <LinkToWebsite
      target="_blank"
      rel="noopener noreferrer"
      href={`https://boardgamegeek.com/boardgame/${game?.bggId}`}
    >
      {game?.name}
    </LinkToWebsite>
  );

  const details = [
    {
      key: "Link do BGG",
      value: linkToBgg,
    },
    {
      key: "Liczba wyników",
      value: game?.numberOfResults,
    },
  ];

  return (
    game ?
      <GameTile>
        {
          game.imgUrl ?
            <Image src={game.imgUrl} alt="game" /> :
            <DefaultImageContainer>
              <DefaultImage src={meeple} alt="meeple" />
            </DefaultImageContainer>
        }
        <div>
          <Title>{game.name}</Title>
          <MetaData metaData={details} />
          {game.pointFields.length > 0 &&
            <>
              <p>Kategorie punktów:</p>
              <Tags>
                {game.pointFields.map(field => <Tag key={field}>{field}</Tag>)}
              </Tags>
            </>
          }
          <LastResult lastResultDate={game.lastResultDate} />
        </div>
      </GameTile> :
      <ReactLoading color={theme.colors.windsor} />
  )
}

export default GamePage;