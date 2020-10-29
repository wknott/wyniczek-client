import React from "react";
import { Label, LabelText } from "./styled";

export default ({ children, labelText }) => (
  <Label>
    <LabelText>{labelText}: </LabelText>
    {children}
  </Label>
);