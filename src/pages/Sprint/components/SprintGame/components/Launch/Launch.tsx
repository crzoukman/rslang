import { FC, useEffect } from "react";
import { setCurrentPlayedCollection, setIsSprintRunning } from "redux/features/sprintSlice";
import { useTypedDispatch, useTypedSelector } from "redux/hooks";
import { getWordsByGroup, shuffleArray } from "shared/utils";
import LevelBtns from "../LevelBtns";
import { Wrapper } from "./Launch.styled";
import { Box, LinearProgress } from "@mui/material";
import { fetchAllWords, fetchUserWords, getStatistic } from "redux/thunks";
import Button from '@mui/material/Button';

const Launch: FC = () => {
  const dispatch = useTypedDispatch();
  const { pickedGroup, isStartedFromTextbook } = useTypedSelector(state => state.sprint);
  const { allWords } = useTypedSelector(state => state.words);
  const isGroupPicked = pickedGroup !== null;
  const wereWordsReceived = !!allWords.length;

  function clickHandler() {
    if (wereWordsReceived && isGroupPicked) {
      if (!isStartedFromTextbook) {
        const response = getWordsByGroup(allWords, pickedGroup);
        const shuffled = shuffleArray(response);
        dispatch(setIsSprintRunning(true));
        dispatch(setCurrentPlayedCollection(shuffled));
      }
    }
  };

  useEffect(() => {
    const authData = localStorage.getItem('authUserData-zm');

    if (authData) {
      (async () => {
        if (!isStartedFromTextbook) {
          await dispatch(getStatistic(JSON.parse(authData)));
          await dispatch(fetchAllWords());
          dispatch(fetchUserWords(JSON.parse(authData)));
        }
      })();
    }
  }, [isStartedFromTextbook]);

  return (
    <Wrapper>
      <h3>Выбери уровень:</h3>
      <LevelBtns />

      <Button
        variant="contained"
        onClick={clickHandler}
        disabled={!isGroupPicked}
      >
        Начать
      </Button>

      {!wereWordsReceived && (
        <Box sx={{ width: '80%', mt: 4 }}>
          <LinearProgress />
        </Box>)
      }

    </Wrapper>
  );
};

export default Launch;