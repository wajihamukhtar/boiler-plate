import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormSection from '../components/authentication/FormSection';
import LogoSection from '../components/authentication/LogoSection';

export default function AuthLayout() {
  return (
    <Grid container component="main" sx={{ height: '100vh', overflow: 'auto' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        md={6}
      >
        <LogoSection />
      </Grid>
      <Grid item xs={12} md={6} component={Paper} >
        <Box
          sx={{
            py: 4,
            px: 4,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '	#F5F5F5',
          }}
        >
          <FormSection />
        </Box>
      </Grid>
    </Grid>
  );
}
