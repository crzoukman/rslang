import { FC } from 'react';
import WordContent from './components/WordContent';
import WordImage from './components/WordImage';
import WordMeaning from './components/WordMeaning';
import WordName from './components/WordName/WordName';
import WordTranslation from './components/WordTranslation/WordTranslation';
import { StyledWordCard } from './WordCard.styles';

const WordCard: FC = () => {
  return (
    <StyledWordCard>
      <WordImage/>
      <WordContent>
        <WordName/>
        <WordTranslation/>
        <WordMeaning/>
      </WordContent>
    </StyledWordCard>
  );
};

export default WordCard;