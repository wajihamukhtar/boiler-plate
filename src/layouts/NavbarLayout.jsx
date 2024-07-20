import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import { Auth_Data } from '../constants/auth_constant';
import { useNavigate } from 'react-router-dom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { doSignOut } from '../auth/firebaseMethods';
import Search from '../componants/global/Search';
const settings = ['Logout'];

export const NavbarLayout = ({ onNavOpen }) => {
  const { text, button_text, link } = Auth_Data?.navbar || {};
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate()
  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    doSignOut().then(()=>{
      navigate('/')
      localStorage.removeItem('token');
    })
  };
  return (
    <>
      <Box
        component="header"
        sx={{
          height: 'auto',
          position: 'sticky',
          left: {
            lg: `${0}px`,
          },
          top: 0,
          width: {
            lg: `calc(100% - ${0}px)`,
          },
          zIndex: 500,
        }}
      >
        <AppBar position="static" sx={{ px: 2 ,backgroundColor:'primary.dark'}}>
        
          <Toolbar sx={{ height: '65px',display:'flex' ,justifyContent:'space-between'  }}>
            <SchoolRoundedIcon sx={{ mr: 1 }} />
            
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'sans-serif',
                fontWeight: 500,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
            </Typography>
            <SchoolRoundedIcon sx={{ display: { xs: 'none' }, mr: 1 }} />
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
                
              }}
              >
            </Typography>
            <Box sx={{ flexGrow: 0 ,mr:'0',display:'flex'}}>
            <Box sx={{display:'flex', flexGrow: 0 ,pt:1,pr:2 }}>
              <Search/>
            </Box>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="wa" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px',}}
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
                  <MenuItem key={setting} onClick={handleLogout}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <IconButton onClick={onNavOpen} sx={{ display: { xs: 'flex', md: 'none' }, ml: 1, color: 'common.white', '&:hover': { color: 'common.white', backgroundColor: 'transparent' } }} disableRipple>
              <MenuOpenIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};