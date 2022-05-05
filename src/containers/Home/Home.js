import React from 'react';
import './Home.scss';

import { FeaturesBox, Section, Introduce } from '../../components';

export const Home = () => {
  return (
    <div>
      <Section />
      <FeaturesBox />
      <Introduce />
    </div>
  );
};
