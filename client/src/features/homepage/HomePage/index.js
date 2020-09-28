import React from "react";
import { useSelector } from "react-redux";
import { StyledLink } from "./styled";
import { toNewResult, toResults, toStats } from "../../../routes"
import { selectAuth } from "../../../authSlice";
import Section from "../../../common/Section";

const HomePage = () => {
  const { isAuthenticated } = useSelector(selectAuth);

  return (
    <>
      {isAuthenticated &&
        <Section sectionHeader="Nowy wynik">
          <p>Właśnie rozegrałeś kolejną partię w ulubioną planszówkę?</p>
          <StyledLink to={toNewResult()}>Dodaj nowy wynik</StyledLink>
        </Section>
      }
      <Section sectionHeader="Wyniki">
        <p>Zobacz wyniki gier planszowych:</p>
        <StyledLink to={toResults()}>Przejdź do historii wyników</StyledLink>
      </Section>
      <Section sectionHeader="Statystyki">
        <p>Chcesz wiedzieć kto ma najwięcej zwycięstw?</p>
        <StyledLink to={toStats()}>Zobacz statystyki</StyledLink>
      </Section>
    </>
  )
}

export default HomePage;