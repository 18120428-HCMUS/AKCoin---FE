import React from 'react';
import './HeaderFooterLayout.scss';

export const HeaderFooterLayout = ({ nav, header, children, footer }) => {
  return (
    <>
      <div>{header}</div>
      <div>{children}</div>
      <div>{footer}</div>
    </>
  );
};
