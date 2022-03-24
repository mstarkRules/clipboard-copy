import React, { ReactNode } from "react";

import { Container } from "./styles";

interface WrapperProps {
  children: ReactNode;
  fontSize?: string;
  padding?: boolean | string;
  color?: string;
  strong?: boolean;
  title?: string;
}

export const Wrapper = ({ children, ...props }: WrapperProps) => {
  return (
    <Container {...props} title={props.title}>
      {children}
    </Container>
  );
};
