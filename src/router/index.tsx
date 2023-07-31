import { lazy } from 'react';
import type { FC } from 'react';

import type { RouteObject } from 'react-router';
import { Navigate } from 'react-router';

import { useRoutes } from 'react-router-dom';

import LayoutPage from '~/layout/Layout';
import LoginPageStudent from '~/pages/students/login';
import RegisterStudent from '~/pages/students/register';
import StudentHome from '~/pages/students/home';

import WrapperRouteComponent from './config';

const NotFound = lazy(() => import('~/pages/404'));
const DashboardStudent = lazy(() => import('~/pages/students/dashboard'));

const routeList: RouteObject[] = [
  {
    path: '/login',
    element: <WrapperRouteComponent element={<LoginPageStudent />} />,
  },
  {
    path: '/register',
    element: <WrapperRouteComponent element={<RegisterStudent />} />,
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
