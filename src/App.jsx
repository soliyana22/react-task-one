import React from 'react';
import ProfileCard from './components/ProfileCard';

import PHOTO from './assets/PHOTO.jpeg'


function App() {
  return (
    <>
      <ProfileCard
        name="Soliyana Yalewdeg Siyum"
        image={PHOTO} 
        bio="A passionate frontend software developer who loves creating cool, 
        user-friendly apps that make life easier and more fun. I enjoy transforming ideas into interactive,
         visually appealing experiences using modern technologies like React, JavaScript, and CSS. "
      />
    </>
   
  );
}

export default App;

