import { FC, useEffect } from 'react';
import Categories from './components/Categories';
import Container from './components/Container';
import ContentWrapper from './components/ContentWrapper';
import Title from './components/Title';
import CardsWrapper from './components/CardsWrapper';
import { Wrapper } from './Textbook.styles';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { fetchWords } from 'redux/thunks';

const Textbook: FC = () => {
  const dispatch = useTypedDispatch();

  const { groupNumber, pageNumber } = useTypedSelector(
    (state) => state.textbook
  );

  // When the page is loaded for the first time or after it has been reloaded
  const savedPageNumber = Number(localStorage.getItem('pageNumber-nsv')) || 1;
  const savedGroupNumber = Number(localStorage.getItem('groupNumber-nsv')) || 1;

  useEffect(() => {
    dispatch(fetchWords({ savedGroupNumber, savedPageNumber }));
  }, [groupNumber, pageNumber]);
  
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
