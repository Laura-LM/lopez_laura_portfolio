import React from 'react';
import Text from '../components/Text/Text';

export default function BasicInfo() {
  return (
    <section className="portfolio-section">
      <h2 className="section-title">Basic Information</h2>
      <div className="info-grid">
        <div className="info-item">
          <Text>
            <strong>Email:</strong> hi.lauralopez@gmail.com
          </Text>
        </div>
        <div className="info-item">
          <Text>
            <strong>Github:</strong> https://github.com/Laura-LM
          </Text>
        </div>
        <div className="info-item">
          <Text>
            <strong>Phone:</strong> (123) 456-7890
          </Text>
        </div>
      </div>
    </section>
  );
}
