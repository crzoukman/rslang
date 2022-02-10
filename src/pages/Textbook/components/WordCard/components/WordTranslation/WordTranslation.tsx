import { FC } from 'react';
import { ITranslationProps } from './types';
import { StyledWordTranslation } from './WordTranslation.styles';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { BASE_URL } from 'redux/thunks';

const WordTranslation: FC<ITranslationProps> = (props) => {
  const {
    audio,
    audioExample,
    audioMeaning,
    player,
    transcription,
    translation,
  } = props;

  const playWordAudio = () => {
    player.pause();
    player.currentTime = 0;

    const audios = [`${BASE_URL}/${audio}`, `${BASE_URL}/${audioMeaning}`, `${BASE_URL}/${audioExample}`];

    let audioNumber = 0;

    player.src = audios[audioNumber];
    player.play();
    player.onended = () => {
      audioNumber++;

      if (audioNumber < audios.length) {
        player.src = audios[audioNumber];
        player.play();
      }
    }
  }

  return (
    <StyledWordTranslation>
      <span>{transcription}</span>
      <span>{translation}</span>
      <button onClick={playWordAudio}><VolumeUpIcon /></button>
    </StyledWordTranslation>
  )
};

export default WordTranslation;