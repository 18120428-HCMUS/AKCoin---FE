import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderFooterLayout, BlankLayout } from '../layouts';
import { PublicRouter } from './PublicRouter';

import { Header, Footer, Nav, HeaderDashboard } from '../components';
import { Home, Login, Register, Dashboard, Send, History } from '../containers';
import { PrivateRouter } from './PrivateRouter';

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact={true}
          path={'/'}
          element={
            <PublicRouter
              component={Home}
              layout={HeaderFooterLayout}
              header={Header}
              footer={Footer}
              nav={Nav}
            />
          }
        />
        <Route
          exact={true}
          path={'/login'}
          element={
            <PublicRouter
              component={Login}
              layout={HeaderFooterLayout}
              header={Header}
              footer={Footer}
              nav={Nav}
            />
          }
        />
        <Route
          exact={true}
          path={'/register'}
          element={
            <PublicRouter
              component={Register}
              layout={HeaderFooterLayout}
              header={Header}
              footer={Footer}
              nav={Nav}
            />
          }
        />
        <Route
          exact={true}
          path={'/dashboard'}
          element={
            <PrivateRouter
              component={Dashboard}
              layout={HeaderFooterLayout}
              header={HeaderDashboard}
              footer={Footer}
              nav={Nav}
            />
          }
        />
        <Route
          exact={true}
          path={'/send'}
          element={
            <PrivateRouter
              component={Send}
              layout={HeaderFooterLayout}
              header={HeaderDashboard}
              footer={Footer}
              nav={Nav}
            />
          }
        />
        <Route
          exact={true}
          path={'/history'}
          element={
            <PrivateRouter
              component={History}
              layout={HeaderFooterLayout}
              header={HeaderDashboard}
              footer={Footer}
              nav={Nav}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
