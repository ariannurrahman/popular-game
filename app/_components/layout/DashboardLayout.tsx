'use client';

import React, { PropsWithChildren, useState } from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';

import { Footer, Header, Sidebar, TopProgressBar } from '..';

const DashboardLayout = (props: PropsWithChildren) => {
  const [isShowSidebar, setIsShowSidebar] = useState(true);

  const segment = useSelectedLayoutSegment();

  const handleShowSidebar = () => setIsShowSidebar((prevState) => !prevState);

  return (
    <>
      <TopProgressBar />
      <div className='grid min-h-screen grid-rows-header'>
        <Header handleShowSidebar={handleShowSidebar} />
        <div className='grid sm:grid-cols-1 md:grid-cols-sidebar'>
          <Sidebar isOpen={isShowSidebar} activeSegment={segment} />
          <div className='md:m-3 lg:m-5'>{props.children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DashboardLayout;
