import React from "react";
import { StyledSection, SectionHeader } from "./styled";

const Section = ({ sectionHeader, children }) => (
  <StyledSection>
    {sectionHeader && <SectionHeader>{sectionHeader}</SectionHeader>}
    {children}
  </StyledSection>
);

export default Section;