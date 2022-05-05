import React from 'react';

import { Link } from 'react-router-dom';

export const BuyCoin = () => {
  return (
    <div className="pricing-tab  section-pad section">
      <div className="container">
        <div className="inline-form text-center">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <h4>Mua AK Coin</h4>
              <div className="clearfix">
                <div className="form-field form-m-bttm" style={{ width: '80%' }}>
                  <input
                    name="number-coin"
                    id="number-coin"
                    placeholder="Nhập số AK Coin"
                    className="form-control required"
                    aria-required="true"
                    type="number"
                    required
                  />
                </div>
                <div className="form-field form-button form-m-bttm">
                  <Link to="#" className="btn btn-alt">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
