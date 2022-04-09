import { FC } from "react"
import { Wrapper } from "./Alerts.styles";
import { Alert, AlertTitle } from "@mui/material";
import { useTypedSelector } from "redux/hooks";

const Alerts: FC = () => {
  const { signingInError, enteringFlag } = useTypedSelector(state => state.auth);

  const isSuccess = !signingInError && enteringFlag;
  const isError = signingInError && enteringFlag;

  return (
    <Wrapper>
      {isSuccess && (
        <Alert severity="success">
          <AlertTitle>Успех</AlertTitle>
          Вы успешно авторизировались!
        </Alert>)
      }
      {isError && (
        <Alert severity="error">
          <AlertTitle>Ошибка</AlertTitle>
          {signingInError}
        </Alert>)
      }
    </Wrapper>
  )
};

export default Alerts;