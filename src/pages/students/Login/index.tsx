import './index.less';
import { Alert, Button, Col, ColProps, Form, Input, Layout, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authLoading, loginAction, authErrorMessage } from '~/stores/auth';
import { AppState } from '~/stores';
import { LoginParams } from '~/interface/user/login';
import { useAppDispatch } from '~/stores/hooks';

const StudentLogin = () => {
  const { isMobile, isAndroid } = useSelector((state: AppState) => state.auth);

  const { Title } = Typography;
  const isLoading = useSelector(authLoading);
  const errorMessage = useSelector(authErrorMessage);
  const wrapperCol: ColProps = {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 12,
  };
  const dispatch = useAppDispatch();
  const onFinish = (values: LoginParams) => {
    dispatch(loginAction({ ...values, extend: 'student' }));
  };
  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  return (
    <Layout className="login-page" style={isAndroid ? { minHeight: '100dvh', maxHeight: '100dvh' } : {}}>
      <Row gutter={[{ xs: 8, sm: 8, md: 16, lg: 24 }, 0]} className="wrapper">
        <Col {...wrapperCol} className="form-container" style={!isMobile ? { justifyContent: 'center' } : {}}>
          {isMobile ? (
            <div className="art-mobile">
              <img src="/images/Login-Art-Mobile.png" className="mobile" alt="" />
            </div>
          ) : (
            <></>
          )}
          <div className="form " style={!isMobile ? { maxWidth: '400px' } : {}}>
            <Form
              {...formItemLayout}
              wrapperCol={{ span: 24 }}
              layout="vertical"
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <div className="form__logo">
                <img src="images/Logo.png" alt=""></img>
              </div>
              <Title className="form__title" level={4}>
                Welcome Back
              </Title>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    type: 'email',
                    message: 'Invalid e-mail format!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input type="email" placeholder="Example@email.com" />
              </Form.Item>
              <Form.Item label="Password" name="password" rules={[{ required: true }, { type: 'string', min: 8 }]}>
                <Input type="password" placeholder="at least 8 character" />
              </Form.Item>
              <Form.Item>
                <Button loading={isLoading} className="regis_btn" type="primary" htmlType="submit" block>
                  LOGIN
                </Button>
              </Form.Item>
              {errorMessage && <Alert message={errorMessage} type="error" />}
              <div className="alert">
                Not a member ? <a href="/register"> Register here</a>
                <div>
                  <a href="/forgot-password"> Forgot password ?</a>
                </div>
              </div>
              <div className="other-login">
                <Link to="/tutor/login">Login Tutor</Link>
                <Link to="/admin/login">Login Admin</Link>
              </div>
            </Form>
          </div>
          <p className="title-footer">© 2023 ALL RIGHTS RESERVED</p>
        </Col>
        {!isMobile && (
          <Col {...wrapperCol}>
            <div className="art">
              <img className="desktop" src="/images/loginArt.png" alt="" />
            </div>
          </Col>
        )}
      </Row>
    </Layout>
  );
};

export default StudentLogin;
