import styled from "styled-components";
import Input from "../Input";

export const Container = styled.td`
  display: grid;
  grid-template-columns: auto 30px 30px;
  grid-gap: 10px;
  margin-right: 10px;
`;

export const Button = styled.button`
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  background-image: url("${({ url }) => url}");
  background-repeat: no-repeat;
  transition: 0.3s;
  
  &:hover{
    transform: scale(1.1);
  }
`;

export const StyledInput = styled(Input)`

`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
`;