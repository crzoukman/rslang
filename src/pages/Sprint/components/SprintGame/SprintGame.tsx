import { FC } from "react";
import { useTypedSelector } from "redux/hooks";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import Intro from "./components/Intro";
import { Wrapper } from "./SprintGame.styled";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const SprintGame: FC = () => {
  const {
    isSprintRunning,
    isGameOver,
    isStartedFromTextbook,
    currentPlayedCollection,
  } = useTypedSelector(state => state.sprint);

  if (isGameOver) {
    return (
      <Wrapper>
        <GameOver />
      </Wrapper>
    )
  } {
    return (
      <Wrapper>
        {isSprintRunning && !isStartedFromTextbook && <Game />}
        {!isSprintRunning && !isStartedFromTextbook && <Intro />}
        {isSprintRunning && isStartedFromTextbook && currentPlayedCollection.length > 0 && <Game />}
        {!isSprintRunning && isStartedFromTextbook && (
          <section>
            <Box sx={{ width: '80%' }}>
              <LinearProgress />
            </Box>
          </section>
        )}
      </Wrapper>
    );
  }

};

export default SprintGame;