import React from 'react';

import { Link } from 'react-router-dom';

export const Introduce = () => {
  return (
    <div className="section section-pad-sm cta-small light">
      <div className="cta-block">
        <div className="container">
          <div className="row mobile-center">
            <div className="col-md-12">
              <div className="cta-sameline">
                <h3>Mở tài khoản miễn phí và bắt đầu giao dịch AKCoin ngay bây giờ!</h3>
                <Link className="btn btn-outline btn-alt btn-md" to="/register">
                  Đăng Ký
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
