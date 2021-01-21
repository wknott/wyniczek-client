import React from "react";
import { StyledInput, Button, Image, Container } from "./styled";
import confirmImage from "./confirm.svg";
import denyImage from "./deny.svg";
import { selectResult } from "../../features/results/resultsSlice";
import { useDispatch, useSelector } from "react-redux";

const Edit = ({ setEditCell, score, indexk }) => {
  const result = useSelector(selectResult);
  const dispatch = useDispatch();
  const onChange = (event) => {
    console.log(event.target.value);
    const newResult = {
      ...result, scores: result.scores.map(
        oldScore => oldScore === score ?
          {
            ...oldScore, points: score.points.map(
              (point, index) => index === indexk ? !!event.target.value : point)
          } : oldScore
      )
    };
    console.log(newResult);

  }
  return (
    <Container>
      <StyledInput type="number" onChange={(event) => onChange(event)} value={score.points[indexk] || "0"} />
      <Button><Image src={confirmImage} /></Button>
      <Button onClick={() => setEditCell(null)}><Image src={denyImage} /></Button>
    </Container>
  );
};

export default Edit;
