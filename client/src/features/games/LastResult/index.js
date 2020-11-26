import React from "react";
import { toResults } from "../../../routes";
import { StyledParagraph } from "./styled";

const LastResult = ({ lastResultDate, gameId }) => {
  const calculateDaysDifference = (date) => {
    if (!date) return 0;
    const today = new Date();
    const lastDate = new Date(date);
    const differenceInDays = Math.round(
      (today.getTime() - lastDate.getTime()) / (1000 * 3600 * 24)
    );

    return differenceInDays === 0 ? 0.5 : differenceInDays;
  };

  const differenceInDays = calculateDaysDifference(lastResultDate);
  let lastResultString;
  switch (differenceInDays) {
    case 0:
      lastResultString = "Brak wpisanych wyników!";
      break;
    case 0.5:
      lastResultString = "Ostatni wynik: dzisiaj";
      break;
    case 1:
      lastResultString = `Ostatni wynik:  ${differenceInDays}. dzień temu`;
      break;
    default:
      lastResultString = `Ostatni wynik:  ${differenceInDays}. dni temu`;
  };

  function selectColor(days) {
    switch (true) {
      case 0:
        return "red";
      case days < 21:
        return "green";
      case days < 42:
        return "amber";
      default:
        return "red";
    }
  }

  return (
    <StyledParagraph to={toResults({ gameId })} color={selectColor(differenceInDays)}>
      {lastResultString}
    </StyledParagraph>
  )
}

export default LastResult;