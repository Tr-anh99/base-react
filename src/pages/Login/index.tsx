import type { LoginParams } from '~/interface/user/login';
import type { FC } from 'react';

import './index.less';

import { Alert, Button, Form, Input, Layout, Typography } from 'antd';
// import { useLocation, useNavigate } from 'react-router-dom';

import { LocaleFormatter, useLocale } from '~/locales';
import { AppState } from '~/stores';
import { useAppSelector, useAppDispatch } from '~/stores/hooks';
import { authLoading, loginAction, authErrorMessage } from '~/stores/auth';
// import { formatSearch } from '~/utils/formatSearch';

// import { loginAsync } from '../../stores/user.action';

// const initialValues: LoginParams = {
//   username: 'guest',
//   password: 'guest',
//   // remember: true
// };

const LoginForm: FC = () => {
  const { isMobile, isAndroid } = useAppSelector((state: AppState) => state.auth);

  const { Title } = Typography;
  // const navigate = useNavigate();
  // const location = useLocation();
  const { formatMessage } = useLocale();
  const isLoading = useAppSelector(authLoading);
  const errorMessage = useAppSelector(authErrorMessage);
  const dispatch = useAppDispatch();
  const onFinish = (values: LoginParams) => {
    dispatch(loginAction({ ...values, extend: 'student' }));
  };

  return (
    <Layout className="login-page" style={isAndroid ? { minHeight: '100dvh', maxHeight: '100dvh' } : {}}>
      <Form<LoginParams> onFinish={onFinish} className="login-page-form">
        <Title level={2}>
          {formatMessage({
            id: 'global.tips.logIn',
          })}
        </Title>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: formatMessage({
                id: 'global.tips.enterUsernameMessage',
              }),
            },
          ]}
        >
          <Input
            placeholder={formatMessage({
              id: 'global.tips.username',
            })}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: formatMessage({
                id: 'global.tips.enterPasswordMessage',
              }),
            },
          ]}
        >
          <Input
            type="password"
            placeholder={formatMessage({
              id: 'global.tips.password',
            })}
          />
        </Form.Item>
        {/* <Form.Item name="remember" valuePropName="checked">
          <Checkbox>
            <LocaleFormatter id="global.tips.rememberUser" />
          </Checkbox>
        </Form.Item> */}
        <Form.Item>
          <Button loading={isLoading} htmlType="submit" type="primary" className="login-page-form_button">
            <LocaleFormatter id="global.tips.logIn" />
          </Button>
        </Form.Item>
        {errorMessage && <Alert message={errorMessage} type="error" />}
      </Form>
    </Layout>
  );
};

export default LoginForm;
