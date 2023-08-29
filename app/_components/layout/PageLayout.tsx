import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className='min-h-screen bg-slate-950 md:p-3 lg:p-5'>{children}</div>
  );
};

export default PageLayout;
