import React from 'react';
import './HeaderDashboard.scss';

import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.jpg';

export const HeaderDashboard = () => {
  const handleLogout = () => {
    localStorage.setItem('isWallet', '');
    localStorage.setItem('wallet', '');
    localStorage.setItem('privateKey', '');
  };

  return (
    <header className="site-header header-s1 is-sticky">
      <div className="navbar navbar-primary">
        <div className="container relative">
          <Link className="navbar-brand" to="/">
            <img className="logo logo-dark" alt="logo" src={Logo} />
          </Link>
          <nav className="navbar-collapse collapse" id="mainnav">
            <ul className="nav navbar-nav" style={{ display: 'contents' }}>
              <li>
                <Link to="/dashboard">Tài Khoản</Link>
              </li>
              <li>
                <Link to="/send">Gửi Coin</Link>
              </li>
              <li>
                <Link to="/history">Lịch Sử</Link>
              </li>
              <li>
                <Link to="/history" onClick={handleLogout}>
                  Đăng xuất
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
