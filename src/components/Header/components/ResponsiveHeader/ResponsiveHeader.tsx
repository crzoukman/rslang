import { FC, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import avatar from '../../../../assets/images/avatar.svg';
import { Link, useNavigate } from "react-router-dom";
import { useTypedDispatch, useTypedSelector } from "redux/hooks";
import { setAuthUserData } from "redux/features/authSlice";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { Icon } from "@mui/material";
import { setIsGameOver, setIsSprintRunning } from "redux/features/sprintSlice";

const pages = [['Главная', '/'], ['Учебник', '/textbook'], ['Спринт', '/sprint'], ['Аудиовызов', '/audiochallenge'], ['Статистика', '/statistics']];
const settings = ['Выход'];

const ResponsiveHeader: FC = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { authUserData } = useTypedSelector(state => state.auth);
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () => {
    dispatch(setAuthUserData(null));
    localStorage.removeItem('authUserData-zm');
    navigate('/auth');
    dispatch(setIsSprintRunning(false));
    dispatch(setIsGameOver(true));
  };

  const login = () => {
    navigate('/auth');
  };

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            RSLang
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page[0]} onClick={handleCloseNavMenu} component={Link} to={page[1]}>
                  <Typography textAlign="center">{page[0]}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            RSLang
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, mr: 6 }} justifyContent="flex-end">
            {pages.map((page) => (
              <Button
                key={page[0]}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={Link} to={page[1]}
              >
                {page[0]}
              </Button>
            ))}
          </Box>

          {authUserData && (
            <Box sx={{ mr: 2, fontSize: 14, fontWeight: 500 }}>
              {authUserData.name.toUpperCase()}
            </Box>
          )}

          {authUserData && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Kitty" src={avatar} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" onClick={logout}>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}

          {!authUserData && (
            <IconButton onClick={login} sx={{ p: 0 }} style={{ color: 'white' }} size='large'>
              <Icon
                component={LoginOutlinedIcon}
                style={{ cursor: 'pointer' }}
              />
            </IconButton>

          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveHeader;