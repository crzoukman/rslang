import { FC } from 'react';
import { StyledWordControl } from './WordControl.styles';
import { IWordControlProps } from './types';
import LocalFireDepartmentSharpIcon from '@mui/icons-material/LocalFireDepartmentSharp';
import DoneOutlineSharpIcon from '@mui/icons-material/DoneOutlineSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import Tooltip from '@mui/material/Tooltip';
import Statistics from '../Statistics';

const WordControl: FC<IWordControlProps> = ({
  mode,
  userWord,
  onDifficultClick,
  onDeleteWord,
  onLearnedClick,
}) => {
  const isDisabledDifficultBtn =
    userWord?.difficulty === 'difficult' ? true : false;

  const isDisabledLearnedBtn =
    userWord?.difficulty === 'easy' &&
    userWord.optional.counter >= 3
      ? true
      : false;

  return (
    <StyledWordControl>
      {mode === 'textbook' && (
        <>
          <button
            onClick={onDifficultClick}
            disabled={isDisabledDifficultBtn || isDisabledLearnedBtn}
          >
            <Tooltip title='Сложное слово'>
              <LocalFireDepartmentSharpIcon />
            </Tooltip>
          </button>
          <button onClick={onLearnedClick} disabled={isDisabledLearnedBtn}>
            <Tooltip title='Изученное слово'>
              <DoneOutlineSharpIcon />
            </Tooltip>
          </button>
        </>
      )}
      {mode === 'dictionary' && (
        <button onClick={onDeleteWord}>
          <Tooltip title='Удалить слово'>
            <DeleteSharpIcon />
          </Tooltip>
        </button>
      )}
      <Statistics
        sprintStat={userWord?.optional?.sprint}
        audiochallengeStat={userWord?.optional?.audiochallenge}
      />
    </StyledWordControl>
  );
};

export default WordControl;