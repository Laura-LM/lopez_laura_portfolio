import React from 'react';
import Card from './components/Card/Card';
import Text from './components/Text/Text';
import Label from './components/Label/Label';
import Img from './components/Img/Img';
import Button from './components/Button/Button';

export default function App() {
  const skills = {
    description: 'Skills developed throughout the program.',
    languages: ['JavaScript', 'TypeScript', 'Python'],
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
    <div>
      {/* Basic Information */}
      <section>
        <Label>Basic Information</Label>
        <div>
          <Text>Name: Laura Lopez</Text>
          <Text>Contact me: hi.lauralopez@gmail.com</Text>
          <Text>Github: https://github.com/Laura-LM</Text>
          <Text>Phone Number: (123) 456-7890</Text>
        </div>
      </section>

      {/* Work Section */}
      <section>
        <Label>Work</Label>
        <Text>Website Design Freelance</Text>
        <Text>Duration: Jan 2023 - June 2024</Text>
      </section>

      {/* Skills Section */}
      <section>
        <Label>Skills</Label>
        <Text>{skills.description}</Text>
        <Text>Languages: {skills.languages.join(', ')}</Text>
        <Text>Frameworks: {skills.frameworks.join(', ')}</Text>
        <Text>Tools: {skills.tools.join(', ')}</Text>
      </section>

      {/* Resources Section */}
      <section>
        <Label>Resources</Label>
        {resources.map((res, idx) => (
          <Card key={idx}>
            <Text>{res.title}</Text>
            <Text>{res.summary}</Text>
            <Img src={res.image} alt={res.title} />
            <Button onClick={() => window.open(res.link, '_blank')}>
              Visit
            </Button>
          </Card>
        ))}
      </section>
    </div>
  );
}
