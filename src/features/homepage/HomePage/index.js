import React from "react";
import { useSelector } from "react-redux";
import Link from "../../../common/Link";
import { toNewResult, toResults, toStats } from "../../../common/routes"
import { selectAuth } from "../../../common/authSlice";
import Section from "../../../common/Section";

const HomePage = () => {
  const { isAuthenticated } = useSelector(selectAuth);

  return (
    <>
      {isAuthenticated &&
        <Section sectionHeader="Nowy wynik">
          <p>Właśnie rozegrałeś kolejną partię w ulubioną planszówkę?</p>
          <Link to={toNewResult()}>Dodaj nowy wynik</Link>
        </Section>
      }
      <Section sectionHeader="Wyniki">
        <p>Zobacz wyniki gier planszowych:</p>
        <Link to={toResults()}>Przejdź do historii wyników</Link>
      </Section>
      <Section sectionHeader="Statystyki">
        <p>Chcesz wiedzieć kto ma najwięcej zwycięstw?</p>
        <Link to={toStats()}>Zobacz statystyki</Link>
      </Section>
    </>
  )
}

export default HomePage;