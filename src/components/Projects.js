import React from 'react';
import ProjectDetail from './ProjectDetail'
import ContentArea from './ContentArea'
const project = ( title, skills, description ) => ({
  title,
  skills,
  description
})

const projects = [
  project(
    "Square Squash",
    {
      languages: [
        'Javascript',
        'C#',
      ],
      tools: [
        'Amazon Web Services (AWS)',
        'API Gateway',
        'Lambda',
        'Cloud Formation',
        'Relational Database Service (RDS)',
        'Git',
        'Serverless (SLS)',
        'Visual Studio Code'
      ],
      frameworks: [
        'Unity',
      ]
    },
    "Cute mobile puzzle game available on the Google Play Store and Apple App Store. The game features quick rounds in which players rush to clear as many blocks as possible. High scores are hosted in an online leaderboard."
  ),
  project(
    "Cable Driven Robot",
    {
      languages: [
        'C++',
      ],
      tools: [
        'Git',
      ],
      frameworks: [
        'Qt',
        'Arduino',
        'OpenGL',
      ]
    },
    "Robot which uses 8 cables that extend and retract as the means to move an end effector. Users insert keyframe positional information into the UI, which will display the path the robot will move. After submitting the points, the robot will move along the desired path."
  ),
  project(
    "UTA Now",
    {
      languages: [
        'Kotlin',
        'SQL',
      ],
      tools: [
        "Git",
        "Android Studio"
      ],
      frameworks: [
        'Android',
      ]
    },
    "Mobile application which enables users to share and explore events happening around UTA. Users can  create, comment on, and RSVP for events."
  )
]

const Projects = () => (
  <ContentArea title='Projects'>
    {projects.map((project) => (
      <ProjectDetail {...project} key={project.title} />
    ))}
  </ContentArea>
)

export default Projects
