import React from 'react';

import { Header, Sidebar } from '../widgets';
import { SessionWrapper, TanStackProvider } from '.';

const BasicProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <TanStackProvider>
      <SessionWrapper>
        <Header />
        <Sidebar />
        <main className="flex justify-center mx-56 mb-10 pt-32">
          <div>{children}</div>
        </main>
      </SessionWrapper>
    </TanStackProvider>
  );
};

export default BasicProvider;
