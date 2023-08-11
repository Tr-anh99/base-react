import type { MenuProps } from 'antd';
import { Menu, Layout, Tooltip, theme as antTheme, Card } from 'antd';
import { ReactComponent as DashboardIcon } from '~/assets/DashboardMenu.svg';
import { ReactComponent as QuestionIcon } from '~/assets/QuestionMenu.svg';
import { ReactComponent as CreditCardIcon } from '~/assets/CreditCardMenu.svg';
import { ReactComponent as MoonSvg } from '~/assets/moon.svg';
import { ReactComponent as SunSvg } from '~/assets/sun.svg';
import { useDispatch, useSelector } from 'react-redux';
import { createElement } from 'react';
import { AppState } from '~/stores';
import { setGlobalState } from '~/stores/global.store';
import { useLocale } from '~/locales';

const { Sider } = Layout;

const Navigation = (): JSX.Element => {
  const { theme } = useSelector((state: AppState) => state.global);
  const dispatch = useDispatch();

  const { formatMessage } = useLocale();
  const token = antTheme.useToken();
  const items = [
    {
      label: 'Item 1',
      key: 'Item 1',
      icon: (
        <div className="menu-icon">
          <DashboardIcon />
        </div>
      ),
    },
    {
      label: 'Item 2',
      key: 'Item 2',
      icon: (
        <div className="menu-icon">
          <QuestionIcon />
        </div>
      ),
    },
    {
      label: 'Item 3',
      key: 'Item 3',
      icon: (
        <div className="menu-icon">
          <CreditCardIcon />
        </div>
      ),
    },
  ];
  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e.key);
  };

  const onChangeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    localStorage.setItem('theme', newTheme);
    dispatch(
      setGlobalState({
        theme: newTheme,
      }),
    );
  };

  return (
    <Sider className="nav" style={{ backgroundColor: token.token.colorBgContainer }}>
      <Menu style={{ border: 0 }} onClick={onClick} mode="inline" items={items} />
      <Card>
        <Tooltip
          title={formatMessage({
            id: theme === 'dark' ? 'global.tips.theme.lightTooltip' : 'global.tips.theme.darkTooltip',
          })}
        >
          <span className="text-1">
            {createElement(theme === 'dark' ? SunSvg : MoonSvg, {
              onClick: onChangeTheme,
            })}
          </span>
        </Tooltip>
      </Card>
    </Sider>
  );
};

export default Navigation;
