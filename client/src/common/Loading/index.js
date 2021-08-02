import React from "react";
import { Container, Message, StyledReactLoading } from "./styled";

const Loading = ({ message, size }) => (
  <Container>
    {message && <Message>{message}</Message>}
    <div>
      <StyledReactLoading
        type="spin"
        height={`${size || 128}px`}
        width={`${size || 128}px`}
      />
    </div>
  </Container>
);

export default Loading;