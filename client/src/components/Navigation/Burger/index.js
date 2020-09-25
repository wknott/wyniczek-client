import React from "react";
import { StyledBurger } from "./styled";

const Burger = ({ open, setOpen }) => (
  <StyledBurger open={open} onClick={() => setOpen(open => !open)}>
    <div />
    <div />
    <div />
  </StyledBurger >
);

export default Burger;
