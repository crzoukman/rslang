import { FC, useEffect } from 'react';
import Categories from './components/Categories';
import Container from './components/Container';
import ContentWrapper from './components/ContentWrapper';
import Title from './components/Title';
import CardsWrapper from './components/CardsWrapper';
import { Wrapper } from './Textbook.styles';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { fetchWords, getUserWords } from 'redux/thunks';
import { combineAllWords } from 'redux/features/textbookSlice/textBookSlice';
import Footer from 'components/Footer';

const Textbook: FC = () => {
  const dispatch = useTypedDispatch();

  const { groupNumber, pageNumber, mode } = useTypedSelector(
    (state) => state.textbook
  );

  // When the page is loaded for the first time or after it has been reloaded
  const savedPageNumber = Number(localStorage.getItem('pageNumber-nsv')) || 1;
  const savedGroupNumber = Number(localStorage.getItem('groupNumber-nsv')) || 1;

  const authUser = JSON.parse(localStorage.getItem('authUserData-zm')!);

  useEffect(() => {
    const updateWords = async () => {
      await dispatch(fetchWords({ savedGroupNumber, savedPageNumber }));

      if (authUser) {
        await dispatch(getUserWords({
          userId: authUser.userId,
          token: authUser.token,
        }));
        dispatch(combineAllWords());
      }
    }

    // Только в режиме учебника комбинируем слова
    if (mode === 'textbook') {
      updateWords();
    }
  }, [groupNumber, pageNumber, mode]);



  return (
    <Wrapper>
      <Container>
        <Title>Учебник</Title>
        <ContentWrapper>
          <Categories />
          <CardsWrapper />
        </ContentWrapper>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Textbook;
