import React from 'react';
import './Login.scss';

import { accessWallet } from '../../services';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Login = () => {
  const history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const privateKey = e.target[0].value;
    const isWallet = await accessWallet(privateKey);

    if (isWallet.data.status) {
      localStorage.setItem('isWallet', isWallet.data.status);
      localStorage.setItem('wallet', isWallet.data.wallet.address);
      localStorage.setItem('privateKey', privateKey);
      history('/dashboard');

      return;
    }

    Swal.fire({
      icon: 'error',
      title: 'Sai Private Key',
      text: 'Ví không tồn tại!',
    });
  };

  return (
    <div className="section section-pad">
      <div className="container">
        <div>
          <div className="section-head">
            <div className="row text-center">
              <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                <h2 className="heading-section">Hình thức đăng nhập</h2>
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
                <h4>Hardware</h4>
              </div>
              <div className="gaps size-1-5x" />
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="box box-small-dot box-alt-bg round">
                <span className="font-icon">
                  <span className="pe pe-7s-repeat" />
                </span>
                <h4>AK CX</h4>
              </div>
              <div className="gaps size-1-5x" />
            </div>
            <div className="col-md-4 col-sm-6 res-m-bttm">
              <div className="box box-small-dot box-alt-bg round">
                <span className="font-icon">
                  <span className="pe pe-7s-cash" />
                </span>
                <h4>Software</h4>
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
                  <form className="form-signup" method="post" onSubmit={handleSubmit}>
                    <div className="form-results" />
                    <div className="form-group">
                      <div className="form-field">
                        <input
                          name="private-key"
                          id="private-key"
                          type="password"
                          placeholder="Nhập Private Key *"
                          className="form-control required"
                          aria-required="true"
                          required
                        />
                      </div>
                    </div>
                    <div className="register__btn">
                      <button type="submit" className="btn btn-alt">
                        Vào Ví
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
