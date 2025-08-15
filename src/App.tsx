import React from 'react';
import Card from './components/Card/Card';
import Text from './components/Text/Text';
import Label from './components/Label/Label';
import Img from './components/Img/Img';
import Button from './components/Button/Button';
import './App.css';

export default function App() {
  const skills = {
    description: 'Skills developed throughout the program.',
    languages: ['JavaScript', 'Python', 'Ruby on Rails', 'SQL', 'Java'],
    frameworks: ['React', 'Node.js'],
    tools: ['VS Code', 'Git', 'Docker'],
  };

  const resources = [
    {
      title: 'Storybook Docs',
      image: '/assets/docs.png',
      summary: 'Documentation for component development and testing.',
    },
    // Add more resources here
  ];

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="portfolio-header">
        <h1 className="portfolio-title">Laura Lopez</h1>
        <p className="portfolio-subtitle">Web Designer & Digital Creator</p>
      </header>

      {/* Basic Information */}
      <section className="portfolio-section">
        <h2 className="section-title">Basic Information</h2>
        <div className="info-grid">
          <div className="info-item">
            <Text>
              <strong>Name:</strong> Laura Lopez
            </Text>
          </div>
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

      {/* Work Section */}
      <section className="portfolio-section">
        <h2 className="section-title">Experience</h2>

        <div className="experience-item">
          <div className="experience-title">Web Designer & Digital Creator</div>
          <div className="experience-details">Remote | 2023–2024</div>
        </div>

        <div className="experience-item">
          <div className="experience-title">
            Team Lead – Technical Support Best Buy
          </div>
          <div className="experience-details">
            Guatemala City, Guatemala | 2021–2022
          </div>
        </div>

        <div className="experience-item">
          <div className="experience-title">
            Floor Support & Customer Service Representative Humana
          </div>
          <div className="experience-details">
            Guatemala City, Guatemala | 2019–2021
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="portfolio-section">
        <h2 className="section-title">Skills</h2>
        <div style={{ marginBottom: '1rem' }}>
          <Text>{skills.description}</Text>
        </div>

        <div className="skills-grid">
          <div className="skill-category">
            <div className="skill-category-title">Languages</div>
            <Text>{skills.languages.join(', ')}</Text>
          </div>

          <div className="skill-category">
            <div className="skill-category-title">Frameworks</div>
            <Text>{skills.frameworks.join(', ')}</Text>
          </div>

          <div className="skill-category">
            <div className="skill-category-title">Tools</div>
            <Text>{skills.tools.join(', ')}</Text>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="portfolio-section">
        <h2 className="section-title">Resources</h2>
        <div className="resources-grid">
          {resources.map((res, idx) => (
            <div key={idx} className="resource-card">
              <Card>
                <div
                  style={{
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  <Text>{res.title}</Text>
                </div>
                <div style={{ margin: '1rem 0' }}>
                  <Text>{res.summary}</Text>
                </div>
                <Img src={res.image} alt={res.title} />
                <div style={{ marginTop: '1rem' }}>
                  <Button
                    onClick={() =>
                      window.open('https://storybook.js.org/', '_blank')
                    }
                  >
                    Visit
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
