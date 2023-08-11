import RenderRouter from '~/router';
import { IntlProvider } from 'react-intl';
import { localeConfig } from './locales';
import { ConfigProvider, Spin, theme as a } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from './stores';
import { history, HistoryRouter } from '~/router/History';
import enUS from 'antd/locale/en_US';
import './index.css';
import { getInitData } from './stores/auth';
import { Suspense, useEffect } from 'react';
import { setGlobalState } from './stores/global.store';

function App() {
  const { theme, loading } = useSelector((state: AppState) => state.global);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    //get current user
    dispatch(getInitData());
  }, []);

  const setTheme = (dark = true) => {
    dispatch(
      setGlobalState({
        theme: dark ? 'dark' : 'light',
      }),
    );
  };

  /** initial theme */
  useEffect(() => {
    setTheme(theme === 'dark');

    // watch system theme change
    if (!localStorage.getItem('theme')) {
      const mql = window.matchMedia('(prefers-color-scheme: dark)');

      function matchMode(e: MediaQueryListEvent) {
        setTheme(e.matches);
      }

      mql.addEventListener('change', matchMode);
    }
  }, []);

  return (
    <ConfigProvider
      locale={enUS}
      theme={{ token: {}, algorithm: theme === 'dark' ? a.darkAlgorithm : a.defaultAlgorithm }}
    >
      <IntlProvider locale={'en'} messages={localeConfig['en']}>
        <HistoryRouter history={history}>
          <Suspense fallback={null}>
            <Spin spinning={loading} className="app-loading-wrapper"></Spin>
            <RenderRouter />
          </Suspense>
        </HistoryRouter>
      </IntlProvider>
    </ConfigProvider>
  );
}
export default App;
