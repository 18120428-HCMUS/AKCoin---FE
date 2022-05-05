import React, { useState, useEffect } from 'react';

import BoxIconAddress from '../../assets/images/box-icon-b.png';
import BoxIconMoney from '../../assets/images/box-icon-e.png';
import BoxIconNetword from '../../assets/images/box-icon-h.png';

import { getBalance, getPendingTransactions } from '../../services';

export const Information = () => {
  const publicKey = localStorage.getItem('wallet');

  const [balance, setBalance] = useState(0);
  const [pendingTransactions, setPendingTransactions] = useState([]);

  const getBalanceWallet = async () => {
    const balance = await getBalance({ publicKey });
    setBalance(balance.data.balance);
  };

  const getPendingTransactionsWallet = async () => {
    const transactions = await getPendingTransactions({ publicKey });
    setPendingTransactions(transactions.data.transactions);
  };

  useEffect(() => {
    getBalanceWallet();
    getPendingTransactionsWallet();
  }, []);

  return (
    <div className="features-box section section-pad no-pb">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2 res-m-bttm">
            <div className="box round shadow-alt">
              <img src={BoxIconAddress} alt="box-icon" className="box-icon" />
              <h6 className="ucap">Thông Tin Ví</h6>
              <p className="small" style={{ wordWrap: 'break-word' }}>
                Public key: {publicKey}
              </p>
            </div>
          </div>
          <div className="col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2 res-m-bttm">
            <div className="box round shadow-alt">
              <img src={BoxIconMoney} alt="box-icon" className="box-icon" />
              <h6 className="ucap">Số Coin</h6>
              <p className="small">
                {balance} <b>AKCoin</b>
              </p>
            </div>
          </div>
          <div className="col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2">
            <div className="box round shadow-alt">
              <img src={BoxIconNetword} alt="box-icon" className="box-icon" />
              <h6 className="ucap">Network</h6>
              <p className="small">
                Số giao dịch: <b>{pendingTransactions.length}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
