import { FC } from "react";
import { StyledHeader } from "./Title.styles"

const Title: FC = ({ children }) => {
  return (
    <StyledHeader>
      {children}
    </StyledHeader>
  )
};

export default Title;