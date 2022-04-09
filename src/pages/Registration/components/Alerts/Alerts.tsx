import { FC } from "react"
import { Wrapper } from "./Alerts.styles";
import { Alert, AlertTitle } from "@mui/material";
import { useTypedSelector } from "redux/hooks";

const Alerts: FC = () => {
  const { userCreationError, registeringFlag } = useTypedSelector(state => state.registration);

  const isSuccess = !userCreationError && registeringFlag;
  const isError = userCreationError && registeringFlag;

  return (
    <Wrapper>
      {isSuccess && (
        <Alert severity="success">
          <AlertTitle>Успех</AlertTitle>
          Новый пользователь был создан!
        </Alert>)
      }
      {isError && (
        <Alert severity="error">
          <AlertTitle>Ошибка</AlertTitle>
          {userCreationError}
        </Alert>)
      }
    </Wrapper>
  )
};

export default Alerts;