import React from 'react';
import SocialMediaColors, { socialMedialColors } from './socialMedialColors';
import './SocialMediaCard.css';

const SocialMediaCard = ({
  username,
  site,
  icon,
  influence_type,
  influence_count,
  influence_gain,
  date,
}) => {
  const color = socialMedialColors[site];
  const style = {
    borderTop: `10px solid ${color}`,
    borderRadius: '20px 20px 0 0',
  };
  return (
    <div className='social-media-card light-card'>
      <hr className='site-border' style={style} />
      <div>
        <span className={icon}>{username}</span>
      </div>
      <div>
        <h1>{influence_count}</h1>
        <h4>{influence_type}</h4>
      </div>
      <div>
        {influence_gain} {date ? date : '%'}
      </div>
    </div>
  );
};

export default SocialMediaCard;
