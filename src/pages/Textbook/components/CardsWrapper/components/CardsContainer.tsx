import { FC } from "react";
import { StyledCardsContainer } from "./CardsContainer.styles"
import { ICardsContainerProps } from "./types";

const CardsContainer: FC<ICardsContainerProps> = ({ children, learnedWordCount }) => {
  return (
    <StyledCardsContainer learnedWordCount={learnedWordCount}>
      {children}
    </StyledCardsContainer>
  )
};

export default CardsContainer;