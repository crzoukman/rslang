import { IWord } from 'model/IWord';
import { FC } from 'react';
import WordContent from './components/WordContent';
import WordImage from './components/WordImage';
import WordMeaning from './components/WordMeaning';
import WordName from './components/WordName/WordName';
import WordTranslation from './components/WordTranslation/WordTranslation';
import { StyledWordCard } from './WordCard.styles';

const WordCard: FC<IWord> = (props) => {
  const {
    image,
    textExample,
    textExampleTranslate,
    textMeaning,
    textMeaningTranslate,
    transcription,
    wordTranslate,
    word,
  } = props

  return (
    <StyledWordCard>
      <WordImage image={image} />
      <WordContent>
        <WordName word={word} />
        <WordTranslation
          transcription={transcription}
          translation={wordTranslate}
        />
        <WordMeaning
          textExample={textExample}
          textExampleTranslate={textExampleTranslate}
          textMeaning={textMeaning}
          textMeaningTranslate={textMeaningTranslate}
        />
      </WordContent>
    </StyledWordCard>
  );
};

export default WordCard;