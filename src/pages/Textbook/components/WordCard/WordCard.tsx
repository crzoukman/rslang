import { IWordCardProps } from './types';
import { FC } from 'react';
import WordContent from './components/WordContent';
import WordImage from './components/WordImage';
import WordMeaning from './components/WordMeaning';
import WordName from './components/WordName/WordName';
import WordTranslation from './components/WordTranslation/WordTranslation';
import { StyledWordCard } from './WordCard.styles';
import WordControl from './components/WordControl';
import { useTypedSelector } from 'redux/hooks';

const WordCard: FC<IWordCardProps> = ({
  word: {
    audio,
    audioExample,
    audioMeaning,
    id,
    _id,
    image,
    textExample,
    textExampleTranslate,
    textMeaning,
    textMeaningTranslate,
    transcription,
    userWord,
    wordTranslate,
    word,
  },
  player,
  makeDifficult,
  deleteWord,
  makeLearned,
}) => {
  const {
    auth: { authUserData },
    textbook: { mode },
  } = useTypedSelector((state) => state);

  const onDifficultClick = () => {
    makeDifficult(id);
  };

  const onDeleteWord = () => {
    deleteWord(_id!);
  }

  const onLearnedClick = () => {
    makeLearned(id);
  };

  const isUserWord = mode === 'textbook' && userWord;

  return (
    <StyledWordCard
      background={(isUserWord && userWord) || undefined}
    >
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
      </WordContent>
      {authUserData && (
          <WordControl
            mode={mode}
            userWord={userWord}
            onDifficultClick={onDifficultClick}
            onDeleteWord={onDeleteWord}
            onLearnedClick={onLearnedClick}
          />
        )}
    </StyledWordCard>
  );
};

export default WordCard;