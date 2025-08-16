import React from 'react';
import Card from '../components/Card/Card';
import Img from '../components/Img/Img';
import Text from '../components/Text/Text';
import Button from '../components/Button/Button';

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

export default function Resources() {
  return (
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
  );
}
