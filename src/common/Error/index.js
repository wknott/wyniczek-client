import React from "react";
import errorMeeple from "../../images/errorMeeple.svg";
import Link from "../Link";
import { toResults } from "../routes";
import { Container, Image, SubHeader, StyledHeader } from "./styled";

const Error = () => (
  <Container>
    <Image src={errorMeeple} />
    <StyledHeader>Coś poszło nie tak…</StyledHeader>
    <SubHeader>Sprawdź połączenie internetowe i spróbuj ponownie</SubHeader>
    <Link to={toResults()}>Wróć do strony głównej</Link>
  </Container>
);

export default Error;