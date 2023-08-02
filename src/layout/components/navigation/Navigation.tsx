import type { MenuProps } from 'antd';
import { Menu, Layout } from 'antd';
import { ReactComponent as DashboardIcon } from '~/assets/DashboardMenu.svg';
import { ReactComponent as QuestionIcon } from '~/assets/QuestionMenu.svg';
import { ReactComponent as CreditCardIcon } from '~/assets/CreditCardMenu.svg';

const { Sider } = Layout;

const Navigation = (): JSX.Element => {
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

  return (
    <Sider className="nav">
      <Menu style={{ border: 0 }} onClick={onClick} mode="inline" items={items} />
    </Sider>
  );
};

export default Navigation;
