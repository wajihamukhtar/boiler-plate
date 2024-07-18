import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const FormSection = () => {
  return (
    <Box
      sx={{
        flexDirection: 'column',
        display: 'flex',
        margin: 'auto',
        alignItems: 'center',
        width: '95%',
        height: '95%',
        maxWidth: '500px',
        maxHeight: '550px',
        borderRadius: '3px',
        boxShadow: 15 ,
        backgroundColor: 'primary.main',
      }}
    >
      <Outlet />
    </Box>
  )
}

export default FormSection
