import React from 'react';
import './Header.scss';

import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.jpg';

export const Header = () => {
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
                <Link to="#">Thông Tin</Link>
              </li>
              <li>
                <Link to="#">FAQ</Link>
              </li>
              <li>
                <Link to="#">Liên Hệ</Link>
              </li>
              <li className="quote-btn hidden-xs hidden-sm">
                <Link className="btn" to="/login">
                  Đăng Nhập Ví
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
