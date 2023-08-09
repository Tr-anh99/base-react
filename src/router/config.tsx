import type { FC, ReactElement } from 'react';
import type { RouteProps } from 'react-router';
import { useSelector } from 'react-redux';

import PrivateRoute, { GuestOnlyRoute } from './PrivateRoute';
import { PageLoading } from '~/pages/Loading';
import { RootState } from '~/stores';
export type WrapperRouteProps = RouteProps & {
  /** authorization？ */
  guest?: boolean;
  auth?: boolean;
};

const WrapperRouteComponent: FC<WrapperRouteProps> = ({ auth, guest, element, ...props }) => {
  const { loadingInfo } = useSelector((state: RootState) => state.auth);

  if (loadingInfo) {
    return <PageLoading />;
  }
  if (guest) return <GuestOnlyRoute {...props} element={element} />;
  if (auth) return <PrivateRoute {...props} element={element} />;

  return element as ReactElement;
};

export default WrapperRouteComponent;
