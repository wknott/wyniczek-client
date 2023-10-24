import styled from "styled-components";

export const Label = styled.label`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary}; 
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center; 
  width: 100%;
`;

export const Icon = styled.img`
  margin-right: 8px;
  width: 24px;
  height: 24px;
  filter: invert(80%);
`;

export const Input = styled.input`
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.primary}; 
  color: ${({ theme }) => theme.colors.brightText}; 
  border: none;
  outline: none;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.brightText}; 
  }
`;