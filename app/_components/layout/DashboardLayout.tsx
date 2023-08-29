'use client';

import React, { PropsWithChildren, useState } from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';

import { Footer, Header, Sidebar, TopProgressBar } from '..';
import PageLayout from './PageLayout';

const DashboardLayout = (props: PropsWithChildren) => {
  const [isShowSidebar, setIsShowSidebar] = useState(true);

  const segment = useSelectedLayoutSegment();

  const handleShowSidebar = () => setIsShowSidebar((prevState) => !prevState);

  return (
    // <>
    //   <TopProgressBar />
    <div className='grid min-h-screen w-full grid-rows-header'>
      <Header handleShowSidebar={handleShowSidebar} />
      <div className='grid sm:grid-cols-1 md:grid-cols-sidebar'>
        <Sidebar isOpen={isShowSidebar} activeSegment={segment} />
        <PageLayout>{props.children}</PageLayout>
      </div>
      <Footer />
    </div>
    // </>
  );
};

export default DashboardLayout;
