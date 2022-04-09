import { FC, useEffect, useState } from 'react'
import { setIsGameOver, setIsSprintRunning } from 'redux/features/sprintSlice';
import { useTypedDispatch } from 'redux/hooks';
import timerSVG from './assets/images/timer.svg';
import { HR, TimerWrapper, Wrapper } from './Timer.styles';

const Timer: FC = () => {
  const [count, setCount] = useState(30);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    let intervalID: NodeJS.Timer;

    if (count > 0) {
      intervalID = setInterval(() => {
        setCount(count - 1);
      }, 1000);
    } else {
      dispatch(setIsSprintRunning(false));
      dispatch(setIsGameOver(true));
    }

    return () => clearInterval(intervalID);
  }, [count]);

  return (
    <Wrapper>
      <TimerWrapper>
        <img src={timerSVG} />
        <div>{count}</div>
      </TimerWrapper>
      <HR />
    </Wrapper>
  );
};

export default Timer;