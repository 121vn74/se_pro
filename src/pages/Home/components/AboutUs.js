import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './AboutUs.css';

const AboutUs = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="about-us">
      <center><h1>About Us</h1></center>
      {showDetails && (
        <div>
    <p>Welcome to Sun Cellular, your trusted source for mobile devices and accessories for the past two decades. With over 20 years of experience in the mobile technology industry, we have been serving our loyal customers with a commitment to quality, innovation, and exceptional customer service.</p>

          <center><h1>Our Journey</h1></center>
          <p>

Established in 2007, we embarked on this journey with a vision to provide the latest and greatest in mobile technology to our community. Over the years, we have grown and adapted to the ever-evolving mobile industry, ensuring that our customers always have access to the most cutting-edge devices and accessories on the market.
</p>

          
        </div>
      )}
      <center><button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'click to know About us'}
      </button></center>
     
    </div>
  );
};

export default AboutUs;
