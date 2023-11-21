import React from 'react';

import { Header, Sidebar } from '../widgets';

const BasicProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <main className="flex justify-center mx-56 mb-5">
        <div>{children}</div>
      </main>
    </React.Fragment>
  );
};

export default BasicProvider;
