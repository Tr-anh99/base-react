import { Layout } from 'antd';
import Navigation from './components/navigation/Navigation';
import { Outlet } from 'react-router';
import { Suspense } from 'react';
import './index.less';
import { useSelector } from 'react-redux';
import { AppState } from '~/stores';

const { Header, Content, Footer } = Layout;
const LayoutPage = () => {
  const { device, isMobile, isAndroid } = useSelector((state: AppState) => state.user);

  console.log(device);
  console.log(isMobile);
  // const dispatch = useDispatch();

  return (
    <Layout className="layout-page" style={isAndroid ? { minHeight: '100dvh', maxHeight: '100dvh' } : {}}>
      {isMobile ? <Header>Header</Header> : <Navigation />}
      <Content className="main-content">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Content>
      {isMobile ? <Footer /> : <></>}
    </Layout>
  );
};

export default LayoutPage;
