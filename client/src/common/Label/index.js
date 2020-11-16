import React from "react";
import { Label, LabelText } from "./styled";

const StyledLabel = ({ children, labelText }) => (
  <Label>
    <LabelText>{labelText}: </LabelText>
    {children}
  </Label>
);

export default StyledLabel;