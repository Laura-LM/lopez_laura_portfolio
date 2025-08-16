import React from 'react';
import Text from '../components/Text/Text';

export default function Skills() {
  const skills = {
    description: 'Skills developed throughout the program.',
    languages: ['JavaScript', 'Python', 'Ruby on Rails', 'SQL', 'Java'],
    frameworks: ['React', 'Node.js'],
    tools: ['VS Code', 'Git', 'Docker'],
  };
  return (
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
  );
}
