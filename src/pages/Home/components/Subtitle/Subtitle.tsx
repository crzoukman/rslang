import { FC } from "react";
import { StyledSubtitle } from "./Subtitle.styles"

const Subtitle: FC<{ mt: string }> = ({ children, mt }) => {
  return (
    <StyledSubtitle mt={mt}>
      {children}
    </StyledSubtitle>
  )
};

export default Subtitle;