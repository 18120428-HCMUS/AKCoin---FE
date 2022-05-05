import React from 'react';

export const FeaturesBox = () => {
  return (
    <div className="section section-pad">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4 res-m-bttm-lg">
            <div className="box-alt box-dot box-direction box-direction-one">
              <div className="image-icon">
                <img
                  src="http://demo.themenio.com/cryptocoin/images/box-icon-i.png"
                  alt="box-icon"
                />
              </div>
              <h5>Tạo tài khoản</h5>
            </div>
          </div>
          <div className="col-md-4 res-m-bttm-lg">
            <div className="box-alt box-dot box-direction box-direction-two">
              <div className="image-icon">
                <img
                  src="http://demo.themenio.com/cryptocoin/images/box-icon-j.png"
                  alt="box-icon"
                />
              </div>
              <h5>Thêm AKCoin vào ví</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box-alt box-dot">
              <div className="image-icon">
                <img
                  src="http://demo.themenio.com/cryptocoin/images/box-icon-k.png"
                  alt="box-icon"
                />
              </div>
              <h5>Gửi/Nhận bằng ví</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
