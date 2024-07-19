import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import InputField from '../../componants/global/InputField';
import SubmitButton from '../../componants/global/SubmitButton';
import { Link, useNavigate } from 'react-router-dom';
import { Auth_Data } from '../../constants/auth_constant';
import { getAuth } from 'firebase/auth';
import { app } from '../firebaseConfig';
import { signUp } from '../firebaseMethods';


const Signup = () => {
  const { text, button_text, fields, link } = Auth_Data?.signup || {};
  const navigate = useNavigate()
  const [disbled, setDisabled] = useState(true);
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (
      userData?.first_name &&
      userData?.last_name &&
      userData?.email &&
      userData?.password
    ) {
      return setDisabled(false);
    } else {
      return setDisabled(true);
    }
  }, [userData]);
  const auth = getAuth(app)
  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(userData.email.trim(), userData.password.trim())
    .then((user) => {
      if (user) {
        navigate('/');
      } else {
        navigate('/');
      }
    })
    .catch((error) => {
      console.error('Error create user:', error.message);
    });
    setUserData({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <Box
        action="#"
        component={'form'}
        onSubmit={(e) => handleSubmit(e)}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          maxWidth: '500px',
          px: 4,
        }}
      >
        <Box>
          <Typography variant='typography.h5'
            sx={{
              color: 'common.white',
            }}
          >
            {text}
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
          }}
        >
          {fields?.map(({ type, label, place_holder, name }, index) => (
            <InputField
              key={index}
              type={type}
              label={label}
              placeholder={place_holder}
              onChange={handleInputChange}
              name={name}
              value={userData[name]}
              style={{
                fontSize: '13px',
                fontWeight: 400,
                color: '#888888',
                border: '1px solid #E4E4E4',
                height: '40px',
              }}
            />
          ))}
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 1.4,
            alignItems: 'center',
            pt: 5,
          }}
        >
          <SubmitButton
            disabled={disbled}
            text={button_text}
            type={'submit'}
            style={{
              width: '100%',
              height: '40px',
              border: '1px solid #FAFAFA',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: 500,
              color: disbled ? '#008000 !important' : '#FAFAFA',
              backgroundColor: disbled ? '#FAFAFA' : '#008000',
              '&:hover': {
                backgroundColor: '#006600',
              },
            }}
          />
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 400,
              color: '#404040',
            }}
          >
            {'Or'}
          </Typography>
          <Link to={link?.href}>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 400,
                color: '#008000',
                textDecoration: 'underLine',
              }}
            >
              {link?.text}
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
