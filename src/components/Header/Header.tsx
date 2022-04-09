import axios from "axios";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setAuthUserData } from "redux/features/authSlice";
import { useTypedDispatch, useTypedSelector } from "redux/hooks";
import { BASE_URL } from "redux/thunks";

import ResponsiveHeader from "./components/ResponsiveHeader";

const Header: FC = () => {
  const { authUserData } = useTypedSelector(state => state.auth);
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  function logoutHandler() {
    dispatch(setAuthUserData(null));
    localStorage.removeItem('authUserData-zm');
    navigate('/auth');
  }

  useEffect(() => {
    const authData = localStorage.getItem('authUserData-zm');
    let intervalID: NodeJS.Timer;

    if (authData) {
      const parsedAuthData = JSON.parse(authData);
      const userID = parsedAuthData.userId;
      const refreshToken = parsedAuthData.refreshToken;

      intervalID = setInterval(() => {
        (async () => {
          try {
            const response = await axios.get(
              BASE_URL + `/users/${userID}/tokens`,
              {
                headers: {
                  Authorization: `Bearer ${refreshToken}`,
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
              }
            );
            const newAuthData = {
              ...parsedAuthData,
              token: response.data.token,
              refreshToken: response.data.refreshToken,
            };
            localStorage.removeItem('authUserData-zm');
            localStorage.setItem('authUserData-zm', JSON.stringify(newAuthData));
            dispatch(setAuthUserData(newAuthData));

          } catch (e) {
            if (e instanceof Error) {
              // console.log(e);
              logoutHandler();
            }
          }
        })();

      }, 30000);
    }

    return () => clearInterval(intervalID);
  }, [authUserData]);

  return (
    <ResponsiveHeader />
  );
};

export default Header;

