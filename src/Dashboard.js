import React, { useState } from 'react';
import SocialMediaCard from './SocialMediaCard';

const Dashboard = () => {
  const [darkMode, setdarkMode] = useState(false);

  const changeMode = () => {
    setdarkMode((darkMode) => !darkMode);
  };

  return (
    <div>
      <SocialMediaCard
        username='@artetech'
        site='twitter'
        icon='tw'
        influence_type='followers'
        influence_count={1231}
        influence_gain={99}
        date='today'
      />
    </div>
  );
};

export default Dashboard;
