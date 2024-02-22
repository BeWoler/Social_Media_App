import React from 'react';

import { Header, Sidebar } from '../widgets';
import { TanStackProvider } from '.';

const BasicProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <TanStackProvider>
      <Header />
      <Sidebar />
      <main className="flex justify-center mx-56 mb-10 pt-32">
        <div className="w-full flex justify-center">{children}</div>
      </main>
    </TanStackProvider>
  );
};

export default BasicProvider;
