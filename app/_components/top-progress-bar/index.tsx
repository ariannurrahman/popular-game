'use client';

import { useEffect } from 'react';
import 'nprogress/nprogress.css';

import Router from 'next/router';
import NProgress from 'nprogress';

const TopProgressBar = () => {
  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    NProgress.configure({ showSpinner: false });

    Router.events.on('routeChangeStart', handleRouteStart);
    Router.events.on('routeChangeComplete', handleRouteDone);
    Router.events.on('routeChangeError', handleRouteDone);

    return () => {
      Router.events.off('routeChangeStart', handleRouteStart);
      Router.events.off('routeChangeComplete', handleRouteDone);
      Router.events.off('routeChangeError', handleRouteDone);
    };
  }, []);

  return null;
};

export { TopProgressBar };
