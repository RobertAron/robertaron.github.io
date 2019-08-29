import React from 'react';
import { Typography } from '@material-ui/core';
import { SkillElement } from './SkillElements';

const ProjectDetail = ({ title, skills, description }) => (
  <>
    <Typography variant="h6" component="h3">
      {title}
    </Typography>
    <div>
      {Object.keys(skills).map(skillKey => (
        skills[skillKey].map((name) => (
          <SkillElement name={name} toolType={skillKey} key={name} />
        ))
      ))}
    </div>
    <Typography component="p">
      {description}
    </Typography>
  </>
)

export default ProjectDetail