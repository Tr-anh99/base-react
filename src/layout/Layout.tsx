import Navigation from './components/navigation/Navigation';
import User from './components/user/User';
import { Outlet } from 'react-router';

const LayoutPage = () => {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="logo_header">
          <img src="images/logo.png" alt="" />
        </div>
        <Navigation />
        <User />
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutPage;
