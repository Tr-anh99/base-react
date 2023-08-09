import RenderRouter from '~/router';
import { IntlProvider } from 'react-intl';
import { localeConfig } from './locales';
import { ConfigProvider, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from './stores';
import { history, HistoryRouter } from '~/router/History';
import enUS from 'antd/locale/en_US';
import './index.css';
import { getInitData } from './stores/auth';

function App() {
  const { loading } = useSelector((state: AppState) => state.global);
  const dispatch = useDispatch<any>();

  dispatch(getInitData());

  return (
    <ConfigProvider locale={enUS}>
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
