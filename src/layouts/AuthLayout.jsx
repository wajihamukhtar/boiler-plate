import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormSection from '../componants/authantication/FormSection';
import bgimg from '../images/img_2.jpg'
export default function AuthLayout() {
  return (
    <Grid item xs={12} md={12} component="main" sx={{ height: '100vh', overflow: 'auto' }}>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundImage: `url(${bgimg})`,
          backgroundSize: 'cover',
        }}
      >
        <FormSection />
      </Box>
    </Grid>
  )
}
AuthLayout();
