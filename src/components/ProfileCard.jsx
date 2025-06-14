import React from 'react';
import '../assets/ProfileCard.css';

function ProfileCard(props){
  return (
  <div className="main">
    <div className="container">
    <div className="profile-card">
      <img src={props.image} alt={`${props.name}'s avatar`} className="profile-image" />
    <div className='text'>
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
    </div>
    </div>
  </div>
  </div>
  );
}
export default ProfileCard;