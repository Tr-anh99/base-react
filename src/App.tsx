import RenderRouter from '~/router';
import { ConfigProvider, Spin } from 'antd';
import { useSelector } from 'react-redux';
import { AppState } from './stores';
import { history, HistoryRouter } from '~/router/History';

function App() {
  const { loading } = useSelector((state: AppState) => state.global);

  return (
    <ConfigProvider>
      <HistoryRouter history={history}>
        <Spin spinning={loading} className="app-loading-wrapper"></Spin>
        <RenderRouter />
      </HistoryRouter>
    </ConfigProvider>
  );
}
export default App;
