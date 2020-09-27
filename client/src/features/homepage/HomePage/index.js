import React from "react";
import { useSelector } from "react-redux";
import { Section, SectionHeader, StyledLink } from "./styled";
import { toNewResult, toResults, toStats } from "../../../routes"
import { selectAuth } from "../../../authSlice";

const HomePage = () => {
  const { isAuthenticated } = useSelector(selectAuth);

  return (
    <>
      {isAuthenticated &&
        <Section>
          <SectionHeader>Nowy wynik</SectionHeader>
          <p>Właśnie rozegrałeś kolejną partię w ulubioną planszówkę?</p>
          <StyledLink to={toNewResult()}>Dodaj nowy wynik</StyledLink>
        </Section>
      }
      <Section>
        <SectionHeader>Wyniki</SectionHeader>
        <p>Zobacz wyniki gier planszowych:</p>
        <StyledLink to={toResults()}>Przejdź do historii wyników</StyledLink>
      </Section>
      <Section>
        <SectionHeader>Statystyki</SectionHeader>
        <p>Chcesz wiedzieć kto ma najwięcej zwycięstw?</p>
        <StyledLink to={toStats()}>Zobacz statystyki</StyledLink>
      </Section>
    </>
  )
}

export default HomePage;