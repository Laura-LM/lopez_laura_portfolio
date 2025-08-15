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
      image: '/assets/storybook-icon.jpg',
      summary: 'Documentation for component development and testing.',
      link: 'https://storybook.js.org/',
    },
    {
      title: 'React Documentation',
      image: '/assets/react-icon.jpg',
      summary:
        'Official React documentation and guides for building user interfaces.',
      link: 'https://react.dev/',
    },
    {
      title: 'TypeScript Handbook',
      image: '/assets/typescript-icon.jpg',
      summary: 'Comprehensive guide to TypeScript programming language.',
      link: 'https://www.typescriptlang.org/docs/',
    },
    {
      title: 'Docker Documentation',
      image: '/assets/docker-icon.jpg',
      summary: 'Complete guide for containerization and Docker deployment.',
      link: 'https://docs.docker.com/',
    },
    {
      title: 'GitHub Repository',
      image: '/assets/github-icon.jpg',
      summary: 'Source code and version control for this component library.',
      link: 'https://github.com/Laura-LM/lopez_laura_portfolio',
    },
  ];

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="portfolio-header">
        <h1 className="portfolio-title">Laura Lopez</h1>
        <p className="portfolio-subtitle">Full Stack Web Developer</p>
      </header>

      {/* Basic Information */}
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
                <div className="resource-icon">
                  <Img src={res.image} alt={res.title} />
                </div>
                <div className="resource-title">
                  <Text>{res.title}</Text>
                </div>
                <div className="resource-summary">
                  <Text>{res.summary}</Text>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <Button onClick={() => window.open(res.link, '_blank')}>
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
