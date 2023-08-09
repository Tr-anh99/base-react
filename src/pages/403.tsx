import { Button, Result } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

import { FC } from 'react';
import { ROLE } from '~/interface/user/user';
import { useLocale } from '~/locales';

export const Page403: FC<{ role?: ROLE }> = ({ role }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { formatMessage } = useLocale();
  let route_login = '/login';

  if (role === ROLE.admin) {
    route_login = '/login?admin=true';
  }

  return (
    <Result
      status="403"
      title="403"
      subTitle={formatMessage({ id: 'global.tips.unauthorized' })}
      extra={
        <Button
          type="primary"
          onClick={() =>
            navigate(`${route_login}${'?from=' + encodeURIComponent(location.pathname)}`, { replace: true })
          }
        >
          Go To Login
        </Button>
      }
    />
  );
};
