import RenderRouter from '~/router';
import { IntlProvider } from 'react-intl';
import { localeConfig } from './locales';
import { ConfigProvider, Spin } from 'antd';
import { useSelector } from 'react-redux';
import { AppState } from './stores';
import { history, HistoryRouter } from '~/router/History';

function App() {
  const { loading } = useSelector((state: AppState) => state.global);

  return (
    <ConfigProvider>
      <IntlProvider locale={'en'} messages={localeConfig['en']}>
        <HistoryRouter history={history}>
          <Spin spinning={loading} className="app-loading-wrapper"></Spin>
          <RenderRouter />
        </HistoryRouter>
      </IntlProvider>
    </ConfigProvider>
  );
}
export default App;
