import React from "react";
import { Description, DescriptionList, Term } from "./styled";

const MetaData = ({ metaData = [] }) => (
  <div>
    {metaData.map(({ key, value }) => (
      <DescriptionList key={key}>
        {key && <Term>{key}:</Term>}
        <Description>{value}</Description>
      </DescriptionList>
    ))}
  </div>
)

export default MetaData