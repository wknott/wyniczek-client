import React from "react";
import { useSelector } from "react-redux";
import Link from "../../../common/Link";
import { toGameList, toLastGameResults, toNewGame } from "../../../routes"
import Section from "../../../common/Section";
import { selectAuth } from "../../../authSlice";

const GamesPage = () => {
  const { isAuthenticated } = useSelector(selectAuth);

  return (
    <>
      {isAuthenticated &&
        <Section sectionHeader="Nowa gra">
          <p>Twoja kolekcja powiększyła się o nową planszówkę?</p>
          <Link to={toNewGame()}>Dodaj nową grę</Link>
        </Section>
      }
      <Section sectionHeader="Lista gier">
        <p>Lista gier planszowych:</p>
        <Link to={toGameList()}>Przejdź do listy gier</Link>
      </Section>
      <Section sectionHeader="Ostatnia rozgrywka">
        <p>Zastanawiasz się w co ostatnio grałeś, a która gra leży najdłużej na półce?</p>
        <Link to={toLastGameResults()}>Sprawdź ile minęło od ostatniej rozgrywki</Link>
      </Section>
    </>
  )
}

export default GamesPage;