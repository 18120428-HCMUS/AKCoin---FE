import React, { useState } from 'react';
import './Register.scss';

import { createWallet } from '../../services';

export const Register = () => {
  const [privateKey, setPrivateKey] = useState('');
  const [publicKey, setPublicKey] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();

    const data = await createWallet();

    setPrivateKey(data.data.privateKey);
    setPublicKey(data.data.address);
  };

  return (
    <>
      <div className="section section-pad">
        <div className="container">
          <div>
            <div className="section-head">
              <div className="row text-center">
                <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                  <h2 className="heading-section">Quá trình đăng ký</h2>
                </div>
              </div>
            </div>
            <div className="gaps size-3x" />
            <div className="row text-center">
              <div className="col-md-4 col-sm-6">
                <div className="box box-small-dot box-alt-bg round">
                  <span className="font-icon">
                    <span className="pe pe-7s-lock" />
                  </span>
                  <h4>Nhập Password</h4>
                  <p>Mật khẩu dùng để đăng nhập ví</p>
                </div>
                <div className="gaps size-1-5x" />
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="box box-small-dot box-alt-bg round">
                  <span className="font-icon">
                    <span className="pe pe-7s-repeat" />
                  </span>
                  <h4>Tải hoặc lưu Private Key</h4>
                  <p>Địa chỉ Private Key định danh ví</p>
                </div>
                <div className="gaps size-1-5x" />
              </div>
              <div className="col-md-4 col-sm-6 res-m-bttm">
                <div className="box box-small-dot box-alt-bg round">
                  <span className="font-icon">
                    <span className="pe pe-7s-cash" />
                  </span>
                  <h4>Tải hoặc lưu Public Key</h4>
                  <p>Địa chỉ Public Key dùng để giao dịch</p>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-custom">
            <div className="gaps size-2x" />
            <div className="tab-content no-pd">
              <div className="tab-pane fade in active" id="tab1">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                    <div className="register__btn">
                      <button type="submit" className="btn btn-alt" onClick={handleClick}>
                        Tạo Tài Khoản
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {privateKey && (
        <div className="section section-pad-sm cta-small light">
          <div className="cta-block">
            <div className="container">
              <div className="row mobile-center">
                <div className="col-md-12">
                  <div className="cta-sameline">
                    <h3 style={{ wordWrap: 'break-word' }}>Private key: {privateKey}</h3>
                    <div
                      className="btn btn-outline btn-alt btn-md"
                      onClick={() => {
                        navigator.clipboard.writeText(privateKey);
                      }}
                    >
                      Copy Thông Tin
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
