import { FC } from "react";
import { Wrapper } from "./LevelBtns.styled";
import { useTypedDispatch, useTypedSelector } from "redux/hooks";
import { setPickedGroup } from "redux/features/sprintSlice";
import Button from '@mui/material/Button';

const LevelBtns: FC = () => {
  const dispatch = useTypedDispatch();
  const { allWords } = useTypedSelector(state => state.words);
  const { pickedGroup } = useTypedSelector(state => state.sprint);
  const names = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const wereWordsReceived = !!allWords.length;

  function clickHandler(group: number) {
    dispatch(setPickedGroup(group));
  };

  return (
    <Wrapper>
      {names.map((name, idx) =>
        <Button
          variant="outlined"
          key={idx}
          onClick={() => clickHandler(idx)}
          disabled={!wereWordsReceived}
          style={{
            background: pickedGroup === idx ? '#91bde9' : 'inherit',
            color: pickedGroup === idx ? 'white' : 'inherit',
            border: pickedGroup === idx ? 'unset' : '1px solid rgba(25, 118, 210, 0.5)',
          }}
        >
          {name}
        </Button>
      )}
    </Wrapper>
  );
};

export default LevelBtns;