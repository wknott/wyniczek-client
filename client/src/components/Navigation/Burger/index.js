import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleClose, handleOpen, selectOpen } from "../navSlice";
import { StyledBurger } from "./styled";

const Burger = () => {
  const open = useSelector(selectOpen);
  const dispatch = useDispatch();

  return (
    <StyledBurger open={open} onClick={() => dispatch(open ? handleClose() : handleOpen())}>
      <div />
      <div />
      <div />
    </StyledBurger >
  );
}

export default Burger;
