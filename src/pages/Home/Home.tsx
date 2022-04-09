import { FC } from "react";
import Container from "./components/Container";
import Title from "./components/Title";
import { Wrapper } from "./Home.styles";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import textbookImg from '../../assets/images/textbook.png';
import dictionaryImg from '../../assets/images/dictionary.png';
import gamesImg from '../../assets/images/games.png';
import statisticsImg from '../../assets/images/statistics.png';
import womanAva from '../../assets/images/woman.png';
import man1 from '../../assets/images/man1.png';
import man2 from '../../assets/images/man2.png';
import Subtitle from "./components/Subtitle";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import Footer from "components/Footer";

const Home: FC = () => {
  return (
    <Wrapper>
      <section>
        <Title>RSLang</Title>
        <Subtitle mt='10px'>Изучай английский язык. Открывай новые возможности</Subtitle>
        <Subtitle mt='100px'>Возможности приложения</Subtitle>
        <Container mt='50px'>
          <Card
            sx={{
              paddingTop: "15px",
              maxWidth: 275,
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            <CardMedia
              sx={{
                backgroundPosition: "center",
                objectFit: "contain",
              }}
              component="img"
              height="140"
              image={textbookImg}
              alt="textbook"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Учебник
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Пополни свой словарный запас. У нас более 3500 слов из разных
                категорий и разной сложности
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              paddingTop: "15px",
              maxWidth: 275,
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            <CardMedia
              sx={{
                backgroundPosition: "center",
                objectFit: "contain",
              }}
              component="img"
              height="140"
              image={dictionaryImg}
              alt="textbook"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Словарь трудных слов
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Не можешь выучить слово? Добавь его в словарь и оно никуда не
                денется
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              paddingTop: "15px",
              maxWidth: 275,
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            <CardMedia
              sx={{
                backgroundPosition: "center",
                objectFit: "contain",
              }}
              component="img"
              height="140"
              image={gamesImg}
              alt="textbook"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Игры
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Проверь свои знания в играх. Развивай аудирование и скорость
                мышления
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              paddingTop: "15px",
              maxWidth: 275,
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            <CardMedia
              sx={{
                backgroundPosition: "center",
                objectFit: "contain",
              }}
              component="img"
              height="140"
              image={statisticsImg}
              alt="textbook"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Статистика
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Статистика позволит тебе отслеживать уровень твоих знаний и
                скорость их получения
              </Typography>
            </CardContent>
          </Card>
        </Container>
        <Subtitle mt='100px'>Наша команда</Subtitle>
        <Container mt='50px'>
          <Card
            sx={{
              paddingTop: "15px",
              width: 275,
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            <CardMedia
              sx={{
                backgroundPosition: "center",
                objectFit: "contain",
              }}
              component="img"
              height="140"
              image={man1}
              alt="textbook"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Виталий Кошелев
              </Typography>
              <Link
                href="https://github.com/crzoukman"
                underline="hover"
                variant="body1"
                target="_blank"
                rel="noopener"
              >
                crzoukman
              </Link>
              <List>
                <ListItem>Тимлид</ListItem>
                <ListItem>Авторизация, регистрация</ListItem>
                <ListItem>Мини-игра "Спринт"</ListItem>
                <ListItem>Блок статистики</ListItem>
              </List>
            </CardContent>
          </Card>
          <Card
            sx={{
              paddingTop: "15px",
              width: 275,
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            <CardMedia
              sx={{
                backgroundPosition: "center",
                objectFit: "contain",
              }}
              component="img"
              height="140"
              image={womanAva}
              alt="textbook"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Нина Ситаева
              </Typography>
              <Link
                href="https://github.com/nina-si"
                underline="hover"
                variant="body1"
                target="_blank"
                rel="noopener"
              >
                nina-si
              </Link>
              <List>
                <ListItem>Мини-игра "Аудиовызов"</ListItem>
                <ListItem>Методы для сохранения и обновления статистики</ListItem>
                <ListItem>Блок ежедневной статистики</ListItem>
              </List>
            </CardContent>
          </Card>
          <Card
            sx={{
              paddingTop: "15px",
              width: 275,
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            <CardMedia
              sx={{
                backgroundPosition: "center",
                objectFit: "contain",
              }}
              component="img"
              height="140"
              image={man2}
              alt="textbook"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Вячеслав Розов
              </Typography>
              <Link
                href="https://github.com/fgriff"
                underline="hover"
                variant="body1"
                target="_blank"
                rel="noopener"
              >
                fgriff
              </Link>
              <List>
                <ListItem>Главная страница</ListItem>
                <ListItem>Электронный учебник</ListItem>
                <ListItem>Список слов</ListItem>
              </List>
            </CardContent>
          </Card>
        </Container>
      </section>
      <Footer />
    </Wrapper>
  );

};

export default Home;
