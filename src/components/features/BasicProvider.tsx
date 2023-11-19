import React from 'react';

import { Header } from '../widgets';

const BasicProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default BasicProvider;
