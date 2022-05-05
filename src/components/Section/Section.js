import React from 'react';

export const Section = () => {
  return (
    <div className="section section-pad bg-grey">
      <div className="container">
        <div className="row row-vm">
          <div className="col-md-5 text-center">
            <div className="round res-m-bttm">
              <img
                src="http://demo.themenio.com/cryptocoin/images/illustration-md-b.png"
                alt="section"
              />
            </div>
          </div>
          <div className="col-md-6 col-md-offset-1">
            <div className="text-block">
              <h2>Hãy tham gia ngay ví điện tử AK Coin</h2>
              <p>Bạn không tin vào tiền điện tử vì sự mạo hiểm của sự lên xuống.</p>
              <p>Nhưng đây sẽ là câu trả lời cho bạn về mức tăng bền vững. Hãy tham gia ngay!!!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
