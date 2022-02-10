import { FC, useEffect } from "react";
import Categories from "./components/Categories";
import Container from "./components/Container";
import ContentWrapper from "./components/ContentWrapper";
import Title from "./components/Title";
import CardsWrapper from "./components/CardsWrapper";
import { Wrapper } from "./Textbook.styles";
import { useTypedDispatch } from "redux/hooks";
import { fetchWords } from "redux/thunks";

const Textbook: FC = () => {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchWords());
  }, []);
  
  return (
    <Wrapper>
      <Container>
        <Title>Учебник</Title>
        <ContentWrapper>
          <Categories />
          <CardsWrapper />
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default Textbook;
