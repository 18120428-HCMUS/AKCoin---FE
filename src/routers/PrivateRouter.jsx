import React from 'react';

import { Navigate } from 'react-router-dom';

export const PrivateRouter = ({
  component: Component,
  layout: Layout,
  header: Header,
  footer: Footer,
  nav: Nav,
}) => {
  const isWallet = localStorage.getItem('isWallet');

  if (isWallet === 'true') {
    return (
      <Layout nav={<Nav />} header={<Header />} children={<Component />} footer={<Footer />} />
    );
  }

  return <Navigate to="/" replace={true} />;
};
