import { useEffect, useState } from "react";
import { useTypedSelector } from "redux/hooks";
import { getRandomValueFromArray } from "shared/utils";

const usePrepareDataForAnswer = () => {
  const [currentWord, setCurrentWord] = useState<string | null>(null);
  const [translation, setTranslation] = useState<string | null>(null);
  const [enWord, setEnWord] = useState<string | null>(null);
  const [id, setId] = useState<string | null | undefined>(null);
  const {
    currentPlayedCollection,
    currentWordIndex,
  } = useTypedSelector(state => state.sprint);

  useEffect(() => {
    if (currentPlayedCollection.length > 0) {
      const randomWord = getRandomValueFromArray(currentPlayedCollection);
      const enWord = currentPlayedCollection[currentWordIndex].word;
      const ruWord = randomWord && randomWord
        .wordTranslate
        .toLowerCase();
      const translation = currentPlayedCollection[currentWordIndex]
        .wordTranslate
        .toLowerCase();
      const currentWord = Math.random() > 0.5 ? ruWord : translation;
      setCurrentWord(currentWord);
      setTranslation(translation);
      setEnWord(enWord);
      setId(currentPlayedCollection[currentWordIndex]._id);
    }
  }, [currentPlayedCollection, currentWordIndex]);

  return [currentWord, translation, enWord, id];
};

export default usePrepareDataForAnswer;