import { lazy } from 'react';
import type { FC } from 'react';

import type { RouteObject } from 'react-router';
import { Navigate } from 'react-router';

import { useRoutes } from 'react-router-dom';

import LayoutPage from '~/layout';
import LoginPageStudent from '~/pages/students/Login/index';
import LoginPage from '~/pages/Login/index';
import RegisterStudent from '~/pages/students/register';
import StudentHome from '~/pages/students/home';

import WrapperRouteComponent from './Config';
import Page from '~/layout/Page';
// import { ROLE } from '~/interface/user/user';

const NotFound = lazy(() => import('~/pages/404'));
const DashboardStudent = lazy(() => import('~/pages/students/dashboard'));

const routeList: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/',
    element: <WrapperRouteComponent element={<Page />} guest />,
    children: [
      {
        path: 'login',
        element: <LoginPageStudent />,
      },
      {
        path: 'a/login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterStudent />,
      },
    ],
  },
  {
    path: '/',
    element: <WrapperRouteComponent element={<LayoutPage />} auth />,
    children: [
      {
        path: '',
        element: <Navigate to="home" />,
      },
      {
        path: 'home',
        element: <WrapperRouteComponent element={<StudentHome />} />,
      },
      {
        path: 'dashboard',
        element: <WrapperRouteComponent element={<DashboardStudent />} />,
      },
      {
        path: '*',
        element: <WrapperRouteComponent element={<NotFound />} />,
      },
    ],
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);

  return element;
};

export default RenderRouter;
