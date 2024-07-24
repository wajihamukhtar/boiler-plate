import React from 'react';
import { Box } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import { NavbarLayout } from './NavbarLayout';
import { SidebarLayout } from './SidebarLayout';

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 0,
  },
}));
const LayoutBodyRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  overflowX: 'hidden',
  margin: 'auto',
  [theme.breakpoints.up('md')]: {
    paddingLeft: 270,
  },
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280,
  },
  [theme.breakpoints.up('xl')]: {
    paddingLeft: 350,
  },
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%',
});

const DashboardLayout = () => {
  const [openNav, setOpenNav] = useState(true);
  const handlePathnameChange = useCallback(() => {
    if (openNav) {
      setOpenNav(false);
    }
  }, [openNav]);
  useEffect(() => {
    handlePathnameChange();
  }, []);
  return (
    <>
      <NavbarLayout onNavOpen={() => setOpenNav(true)} />
      <SidebarLayout onClose={() => setOpenNav(false)} open={openNav} />
      <LayoutRoot>
        <LayoutBodyRoot>
          <LayoutContainer>
            <Box
              sx={{
                // backgroundColor:'red',
                px: { xs: 2, sm: 2, md: 3 },
                py: { xs: 2, sm: 2.5, md: 3, lg: 5 },
              }}
            >
              <Outlet />
            </Box>
          </LayoutContainer>
        </LayoutBodyRoot>
      </LayoutRoot>
    </>
  );
};

export default DashboardLayout;