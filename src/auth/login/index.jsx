import React, { useState } from 'react';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import InputField from '../../componants/global/InputField';
import SubmitButton from '../../componants/global/SubmitButton';
import { Link, useNavigate } from 'react-router-dom';
import { Auth_Data } from '../../constants/auth_constant';
import theme from '../../theme';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const { text, checkbox_text, reset_link, button_text, fields, link } =
    Auth_Data?.login || {};
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    remember_me: '',
  });
  const [rememberMe, setRememberMe] = useState(false);
  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });

  };
  const handleChangeRemember = (event) => {
    setRememberMe(event.target.checked);
    setUserData({
      ...userData,
      remember_me: event.target.checked,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    setUserData({ email: '', password: '' });
    setRememberMe(false);
    signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then((res) => {
        const user = res.user;
        if (user) {
          localStorage.setItem('token', JSON.stringify(user));
          navigate('/dashboard')
        }
        else {
          navigate('/')
        }
        console.log('User login account:', user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error('Error login user:', errorMessage);
      });
  };
  return (
    <Box sx={{ width: '100%', }} >
      <Box
        action="#"
        component={'form'}
        type={'submit'}
        onSubmit={(e) => handleSubmit(e)}
        sx={{
          width: '90%',
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          mt: 5,
          maxWidth: '380px',
          mx: 'auto',

          color: 'common.white',
        }}
      >
        <Box>
          <Typography
            variant='h5'
          >
            {text}
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {fields?.map(({ type, label, place_holder }) => (
            <InputField
              key={type}
              type={type}
              label={label}
              placeholder={place_holder}
              onChange={handleInputChange}
              name={type}
              value={userData[type]}
              style={{
                fontSize: '13px',
                fontWeight: 400,
                border: '2px solid #E4E4E4',
                height: '40px',
              }}
            />
          ))}
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <FormControlLabel
            sx={{
              fontSize: '14px',
              fontFamily: 400,
              '@media (max-width: 400px)': {
                order: { xs: 2, sm: 1 },
                width: '100%',
              },
              width: 'auto',
            }}
            control={
              <Checkbox
                disableRipple
                checked={rememberMe}
                onChange={handleChangeRemember}
                color="button"
                border='1px solid common.white'
              />
            }
            label={
              <>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 400,
                    color: 'common.white',
                  }}
                >
                  {checkbox_text}
                </Typography>
              </>
            }
          />
          <Link to={link?.href}>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 500,
                color: 'common.white',
                textDecoration: 'underLine',
                pt: 1
              }}
            >
              {link?.text}
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: 5,
            px: 4,
          }}
        >
          <SubmitButton
            disabled={!userData?.email || !userData?.password || !rememberMe}
            text={button_text}
            type={'submit'}
            style={{
              width: '60%',
              height: '40px',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: 500,
              color:
                !userData?.email || !userData?.password || !rememberMe
                  ? '#000 !important'
                  : '#ffffff',
              backgroundColor:
                !userData?.email || !userData?.password || !rememberMe
                  ? '#e6ffe6'
                  : 'button.main',
              '&:hover': {
                backgroundColor: 'button.dark',
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Login;