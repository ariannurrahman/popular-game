import './globals.css';

import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { SearchContextProvider } from './_context/store';
import DashboardLayout from '@/app/_components/layout/DashboardLayout';
import Loading from './loading';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'An Popular Games',
  description: 'Next App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <SearchContextProvider>
            <DashboardLayout>{children}</DashboardLayout>
          </SearchContextProvider>
        </Suspense>
      </body>
    </html>
  );
}
