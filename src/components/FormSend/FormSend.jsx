import React from 'react';
import Swal from 'sweetalert2';

import { send } from '../../services';

export const FormSend = () => {
  const privateKey = localStorage.getItem('privateKey');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const amount = e.target[0].value;
    const address = e.target[1].value;
    const fee = e.target[2].value;

    const isSend = await send(privateKey, address, amount);

    if (isSend.data.status) {
      Swal.fire({
        icon: 'success',
        title: 'Gửi thành công',
        text: 'Giao dịch đang khởi tạo!',
      });

      return;
    }

    Swal.fire({
      icon: 'error',
      title: 'Gửi thất bại',
      text: 'Số coin không hợp lệ!',
    });
  };

  return (
    <div className="section section-pad">
      <div className="container">
        <div className="row">
          <div className="col-md-12 res-m-bttm">
            <div className="contact-form">
              <form
                id="contact-form"
                className="form-message"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="form-results" />
                <div className="form-group row">
                  <div className="form-field col-sm-12 form-m-bttm">
                    <input
                      name="amount"
                      type="number"
                      placeholder="Nhập số coin *"
                      className="form-control required"
                      required
                    />
                  </div>
                  <div className="form-field col-sm-12">
                    <input
                      name="address"
                      type="text"
                      placeholder="Nhập Public Key *"
                      className="form-control required"
                      required
                    />
                  </div>
                  <div className="form-field col-sm-12">
                    <input
                      name="fee"
                      type="text"
                      placeholder="Phí nhận *"
                      className="form-control required"
                      readOnly
                    />
                  </div>
                </div>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <button type="submit" className="btn btn-alt">
                    Gửi Coin
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
