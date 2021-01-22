import React, { useState } from "react";
import { StyledInput, Button, Image, Container } from "./styled";
import confirmImage from "./confirm.svg";
import denyImage from "./deny.svg";
import { changeResult, selectResult } from "../../features/results/resultsSlice";
import { useDispatch, useSelector } from "react-redux";

const Edit = ({ setEditCell, score, indexk }) => {
  const [newScore, setNewScore] = useState(score);
  const result = useSelector(selectResult);
  const dispatch = useDispatch();

  const onChange = (event) => {
    const editedScore = {
      ...newScore, points: newScore.points.map(
        (point, index) => index === indexk ? +event.target.value : point)
    };
    setNewScore(editedScore);
  }

  const onSubmit = () => {
    console.log(newScore)
    const newResult = {
      ...result,
      scores: result.scores.map(score => score._id === newScore._id ? newScore : score),
    };
    dispatch(changeResult(newResult));
    setEditCell(null)
  }

  return (
    <Container>
      <StyledInput type="number" onChange={(event) => onChange(event)} value={newScore.points[indexk] || "0"} />
      <Button onClick={onSubmit}><Image src={confirmImage} /></Button>
      <Button onClick={() => setEditCell(null)}><Image src={denyImage} /></Button>
    </Container>
  );
};

export default Edit;
