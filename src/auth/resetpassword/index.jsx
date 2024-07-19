import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import InputField from '../../componants/global/InputField';
import SubmitButton from '../../componants/global/SubmitButton';
import {Resetpassword } from '../firebaseMethods';
import { Auth_Data } from '../../constants/auth_constant';

const ResetPassword = () => {
  const { text, button_text} =
  Auth_Data?.reset || {};
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await Resetpassword(email);
      setMessage('Password reset email sent. Please check your inbox.');
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <Box component="form" onSubmit={handleResetPassword} sx={{ maxWidth: 400, margin: 'auto',pb:5, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 ,color:'common.white'}}>{text}</Typography>
      {message && <Typography sx={{ color: 'green' }}>{message}</Typography>}
      {error && <Typography sx={{ color: 'red'}}>{error}</Typography>}
      <InputField
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <SubmitButton text={button_text}
        type={'submit'}
        style={{
          width: '70%',
         mx:"auto",
          height: '40px',
          borderRadius: '10px',
          fontSize: '16px',
          fontWeight: 500,
          mt:1,
          color: '#fff !important',
          backgroundColor: 'button.main',
          '&:hover': {
            backgroundColor: 'button.dark'
          }
        }}
      />
    </Box>
  );
};
export default ResetPassword;



