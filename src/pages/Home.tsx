import React from 'react';
import Img from '../components/Img/Img';
import Text from '../components/Text/Text';
import BasicInfo from './BasicInfo';
import Experience from './Experience';
import Skills from './Skills';
import Resources from './Resources';

export default function Home() {
  return (
    <>
      <div className="portfolio-header">
        <div className="profile-photo">
          <Img src="/assets/photo.jpg" alt="Profile Picture" />
        </div>
        <h1 className="portfolio-title">Laura Lopez</h1>
        <p className="portfolio-subtitle">Full Stack Web Developer</p>
      </div>
      <BasicInfo />
      <Experience />
      <Skills />
      <Resources />
    </>
  );
}
