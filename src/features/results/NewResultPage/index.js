import React from "react";
import GameSelect from "../../games/GameSelect";
import NewResultForm from "./NewResultForm";
import { Container, Wrapper } from "./styled";

const NewResultPage = () => (
  <Wrapper>
    <GameSelect firstOption={"Wybierz grę"} />
    <Container>
      <NewResultForm />
    </Container>
  </Wrapper>
)

export default NewResultPage;