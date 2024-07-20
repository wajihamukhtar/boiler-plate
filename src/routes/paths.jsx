// Auth
import Login from '../auth/login';
import ResetPassword from '../auth/resetpassword';
import Signup from '../auth/signup';
import Search from '../componants/global/Search';
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import { NavbarLayout } from '../layouts/NavbarLayout';

export const routes = {
  dashboard:'/dashboard',
    login: '/',
    signup: '/signup',
    search:'/search',
    resetpassword:'/resetpassword',
    error: '*',
    navbar:'/'

  };
  export const publicRoutes = [
    {
      element: <AuthLayout />,
      children: [
        {
          path: routes.login,
          element: <Login />,
        },
        {
          path: routes.signup,
          element: <Signup />,
        },
        {
          path: routes.resetpassword,
          element: <ResetPassword/>,
        },
        {
          path: routes.navbar,
          element: <NavbarLayout />,
        },
        {
          path: routes.search,
          element: <Search/>,
        },
        // {
        //   path: routes.sidebar,
        //   element: <SidebarLayout />,
        // },
      ],
    },
  ];
  
  export const privateRoutes = [
    {path:routes.dashboard,
      element: <DashboardLayout />,
      // children: [
        // students routes
        // {
        //   path: routes.students,
        //   element: <NavbarLayout />,
        // },
      // ],
    },
  ];
  