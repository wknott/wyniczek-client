import React from "react";
import { theme } from "../../theme";
import ReactLoading from "react-loading";
import { Container, Message } from "./styled";

const Loading = ({ message, size }) => (
  <Container>
    {message && <Message>{message}</Message>}
    <div>
      <ReactLoading
        type="spinningBubbles"
        color={theme.colors.primary}
        height={`${size || 128}px`}
        width={`${size || 128}px`}
      />
    </div>
  </Container>
);

export default Loading;