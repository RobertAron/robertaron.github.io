import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import { SkillElement } from './SkillElements'
import ContentArea from './ContentArea'

const skills = {
  languages: [
    'Typescript', // I know it's ironic this is all JS, it's old ok.
    'HTML',
    'CSS',
    'SQL',
    'GLSL',
    'C++',
    'Python',
    'C#',
    'Kotlin',
    'Scala',
    'Java',
  ],
  tools: [
    'Amazon Web Services (AWS)',
    'Postgres',
    'Relational Database Service (RDS)',
    'Docker',
    'Git',
    'Terraform',
    'Visual Studio Code',
    'Kubernetes',
    'Google Cloud',
    "Gitlab CI",
    'Github Actions',
  ],
  "frameworks/libraries": [
    "Nextjs",
    'React',
    "Prisma",
    'ThreeJS/R3F',
    'Unity',
    'OpenGL',
    'Express',
  ]
}

const TechSkills = () => {
  return (
    <ContentArea title="Technical Experience">
      {Object.keys(skills).map((skillKey, index) => (
        <React.Fragment key={skillKey}>
          {index !== 0 && <Divider />}
          <div>
            <Typography variant="subtitle2">
              {skillKey.toUpperCase()}
            </Typography>
            {skills[skillKey].map((name) => (
              <SkillElement name={name} toolType={skillKey} key={name} />
            ))}
          </div>
        </React.Fragment>
      ))}
    </ContentArea>
  )
}

export default TechSkills