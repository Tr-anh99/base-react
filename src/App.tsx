import RenderRouter from '~/router';
import { ConfigProvider, Spin } from 'antd';
import { useSelector } from 'react-redux';
import { AppState } from './stores';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  const { loading } = useSelector((state: AppState) => state.global);

  return (
    <ConfigProvider>
      <Router>
        <Spin spinning={loading} className="app-loading-wrapper"></Spin>
        <RenderRouter />
      </Router>
    </ConfigProvider>
  );
}
export default App;
