import { IWordProps } from './types';
import { FC } from 'react';
import WordContent from './components/WordContent';
import WordImage from './components/WordImage';
import WordMeaning from './components/WordMeaning';
import WordName from './components/WordName/WordName';
import WordTranslation from './components/WordTranslation/WordTranslation';
import { StyledWordCard } from './WordCard.styles';
import DictionaryControl from './components/DictionaryControl';
import { useTypedSelector } from 'redux/hooks';

const WordCard: FC<IWordProps> = (props) => {
  const {
    audio,
    audioExample,
    audioMeaning,
    image,
    textExample,
    textExampleTranslate,
    textMeaning,
    textMeaningTranslate,
    transcription,
    wordTranslate,
    word,
  } = props.word;

  const { player } = props;

  const { authUserData } = useTypedSelector((state) => state.auth);

  return (
    <StyledWordCard>
      <WordImage image={image} />
      <WordContent>
        <WordName word={word} />
        <WordTranslation
          audio={audio}
          audioExample={audioExample}
          audioMeaning={audioMeaning}
          player={player}
          transcription={transcription}
          translation={wordTranslate}
        />
        <WordMeaning
          textExample={textExample}
          textExampleTranslate={textExampleTranslate}
          textMeaning={textMeaning}
          textMeaningTranslate={textMeaningTranslate}
        />
        {authUserData && <DictionaryControl />}
      </WordContent>
    </StyledWordCard>
  );
};

export default WordCard;