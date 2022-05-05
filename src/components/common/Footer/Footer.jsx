import React from 'react';
import './Footer.scss';

import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="copyright light">
      <div className="container">
        <div className="row">
          <div className="site-copy col-sm-7">
            <p>Copyright © 2022 AKCoin</p>
          </div>
          <div className="col-sm-5 text-right mobile-left">
            <ul className="social">
              <li>
                <Link to="#">
                  <em className="fa fa-facebook" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <em className="fa fa-twitter" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <em className="fa fa-linkedin" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <em className="fa fa-google-plus" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
