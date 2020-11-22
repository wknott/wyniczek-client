import React from "react";
import GameSelect from "../../games/GameSelect";
import NewResultForm from "./NewResultForm";
import { Container } from "./styled";

const NewResultPage = () => (
  <>
    <GameSelect firstOption={"Wybierz grę"} />
    <Container>
      <NewResultForm />
    </Container>
  </>
)

export default NewResultPage;