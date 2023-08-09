import type { FC } from 'react';
import type { RouteProps } from 'react-router';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RootState } from '~/stores/index';
import { ROLE } from '~/interface/user/user';
import { Page403 } from '~/pages/403';
// import Page404 from '~/pages/404';

export const PrivateRoute: FC<{ role?: ROLE; roles?: ROLE[]; element: React.ReactNode }> = ({ role, element }) => {
  const { logged, currentUser } = useSelector((state: RootState) => state.auth);

  console.log(logged);
  console.log(currentUser);

  if (!logged) {
    return <Page403 role={role} />;
  }
  // if (!currentUser) {
  //   return <Page403 role={role} />;
  // }
  // if (roles && roles.length > 0 && !roles.includes(currentUser.role)) {
  //   return <Page404 />;
  // }
  // if (role && currentUser.role !== role) {
  //   return <Page404 />;
  // }

  return element;
};

export const GuestOnlyRoute: FC<RouteProps> = props => {
  const { logged, currentUser } = useSelector((state: RootState) => state.auth);

  if (!logged) {
    return props.element;
  }
  if (currentUser?.role == ROLE.user) {
    return <Navigate to="home" />;
  } else if (currentUser?.role == ROLE.admin) {
    return <Navigate to="admin" />;
  }

  return props.element;
};

export default PrivateRoute;
