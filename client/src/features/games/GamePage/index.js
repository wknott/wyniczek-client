import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LinkToWebsite from "../../../common/LinkToWebsite";
import { useParams } from "react-router-dom";
import { fetchGame, selectGame, selectLoading } from "../gamesSlice";
import meeple from "../../../images/meeple.svg";
import { Image, DefaultImage, DefaultImageContainer, Tags, Tag, Title, GameTile, Subtitle } from "./styled";
import LastResult from "../LastResult";
import MetaData from "../../../common/MetaData";
import UsersTable from "../../users/UsersPage/UsersTable";
import Loading from "../../../common/Loading";

const GamePage = () => {
  const { id } = useParams();
  const game = useSelector(selectGame);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGame(id))
  }, [dispatch, id]);

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
    {
      key: "Ranking BGG",
      value: game?.bggRank,
    },
    {
      key: "Poziom trudności",
      value: parseFloat(game?.weight).toFixed(2),
    }
  ];

  return (
    !loading && game ?
      <>
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
                <Subtitle>Kategorie punktów:</Subtitle>
                <Tags>
                  {game.pointFields.map(field => <Tag key={field}>{field}</Tag>)}
                </Tags>
              </>
            }
            <LastResult lastResultDate={game.lastResultDate} gameId={game._id} />
          </div>
        </GameTile>
        <Subtitle>Statystyki wyników <q>{game.name}</q></Subtitle>
        <UsersTable gameId={game._id} />
      </> :
      <Loading />
  )
}

export default GamePage;