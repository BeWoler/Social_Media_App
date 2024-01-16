import React from 'react';

import { links } from '@/entities/navigation/links';
import { iconsArr } from '@/components/ui';

import { Nav } from '../..';

const Sidebar = () => {
  return (
    <div className="flex fixed rounded-3xl top-1/4 left-5 h-auto px-3 bg-dark-3 shadow-primary-shadow">
      <Nav links={links} icons={iconsArr} />
    </div>
  );
};

export default Sidebar;
