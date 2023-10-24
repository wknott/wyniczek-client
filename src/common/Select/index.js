import React from "react";
import { StyledSelect } from "./styled";

const Select = ({ value, options, onChange, firstOption }) => (
  <StyledSelect
    value={value !== undefined ? value._id : ""}
    onChange={(event) => onChange(event.target.value)}
  >
    <option value="">{firstOption}</option>
    {options.map((option) => (
      <option key={option._id} value={option._id}>
        {option.name}
      </option>
    ))}
  </StyledSelect>
)
export default Select;