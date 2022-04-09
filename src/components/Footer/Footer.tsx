import { FC } from "react";
import { DevelopersWrapper, MenuWrapper, RSSWrapper, SVGWrapper, Wrapper } from './Footer.styles';
import { ReactComponent as GitSVG } from './assets/images/git.svg';
import { ReactComponent as YoutubeSVG } from './assets/images/youtube.svg';
import { ReactComponent as HomeSVG } from './assets/images/home.svg';
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <Wrapper>
      <RSSWrapper>
        <h2>RSLang</h2>
        <SVGWrapper>
          <a href="https://github.com/rolling-scopes-school/tasks/blob/master/tasks/stage-2/rs-lang/rslang.md">
            <GitSVG />
          </a>
          <a href="https://www.youtube.com/c/RollingScopesSchool">
            <YoutubeSVG />
          </a>
          <a href="https://rs.school/">
            <HomeSVG />
          </a>
        </SVGWrapper>
        <h3>© 2022 RSLang. RS School Stage 2</h3>
      </RSSWrapper>

      <MenuWrapper>
        <h2>Меню</h2>
        <div>
          <Link to='/'>Главная</Link>
          <Link to='/textbook'>Учебник</Link>
          <Link to='/statistics'>Статистика</Link>
        </div>
      </MenuWrapper>

      <DevelopersWrapper>
        <h2>Разработчики</h2>
        <div>
          <a href="https://github.com/crzoukman">crzoukman</a>
          <a href="https://github.com/fgriff">fgriff</a>
          <a href="https://github.com/nina-si">nina-si</a>
        </div>
      </DevelopersWrapper>
    </Wrapper>

  );
};

export default Footer;
