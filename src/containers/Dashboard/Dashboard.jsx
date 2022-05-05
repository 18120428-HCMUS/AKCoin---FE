import React, { useState, useEffect } from 'react';
import './Dashboard.scss';

import { Information, BuyCoin } from '../../components';

export const Dashboard = () => {
  return (
    <>
      <Information />
      <BuyCoin />
    </>
  );
};
