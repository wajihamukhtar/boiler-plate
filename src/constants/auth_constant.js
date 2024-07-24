import PersonIcon from '@mui/icons-material/Person';

export const Auth_Data = {
    login: {
      text: 'LOGIN',
      checkbox_text: 'Remember me',
      reset_link: { text: 'Resetpassword?', href: '/resetpassword' },
      button_text: 'Login',
      link: { text: 'Sign up', href: '/signup', signin:'/google' },
      fields: [
        { type: 'email', label: 'Email:', place_holder: 'Enter your email' },
        {
          type: 'password',
          label: 'Password:',
          place_holder: 'Enter your password',
        },
      ],
    },
    reset: {
      text: 'RESET PASSWORD',
      button_text: 'Send Current Email',
    },
    signup: {
      text: 'SIGN UP',
      button_text: 'Sign Up',
      link: { text: 'Already have a profile?', href: '/' },
      fields: [
        {
          name: 'first_name',
          type: 'text',
          label: 'First name:',
          place_holder: 'Enter your first name',
        },
        {
          name: 'last_name',
          type: 'text',
          label: 'Last name:',
          place_holder: 'Enter your last name',
        },
        {
          name: 'email',
          type: 'email',
          label: 'Email:',
          place_holder: 'Enter your email',
        },
        {
          name: 'password',
          type: 'password',
          label: 'Password:',
          place_holder: 'Enter your password',
        },
      ],
    },
    navbar: {
      text: 'Nav',
      logo: 'logo',
      link: { text: 'Already have a profile?', href: '/' },
    },

    sidebarLinks: [
    
      {
        icon: <PersonIcon/>,
        text: 'Students',
        link: '#',
        sublinks: [
          {
            text: 'StudentRegistration',
            link: '/students/student-add',
          },
          {
            text: 'Table',
            link: '/table',
          },
  
        ],
      },
    ]
}

