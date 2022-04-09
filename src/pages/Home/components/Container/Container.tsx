import { FC } from "react";
import { StyledContainer } from "./Container.styles"

const Container: FC<{ mt: string }> = ({ children, mt }) => {
  return (
    <StyledContainer mt={mt}>
      {children}
    </StyledContainer>
  )
};

export default Container;