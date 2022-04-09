import { FC } from "react";
import Launch from "../Launch";
import { H1SprintWrapper, Wrapper } from "./Intro.styled";
import sprintSVG from './assets/images/sprint.svg';

const Intro: FC = () => {
  return (
    <Wrapper>
      <H1SprintWrapper>
        <img src={sprintSVG} alt="спринт" />
        <h1>Спринт</h1>
      </H1SprintWrapper>
      <h2>Угадай как можно больше слов за 30 секунд</h2>
      <Launch />
    </Wrapper>
  )
}

export default Intro;