import React from 'react';
import ProjectDetail from './ProjectDetail'
import ContentArea from './ContentArea'
const project = ( title,description, skills, link ) => ({
  title,
  skills,
  description,
  link
})

const projects = [
  project(
    "Beam Battle Online",
    "Online battle royale game you can play in a web browser. Play to be the last survior by staying within slowly collapsing dome, and avoiding running into other players light trails.",
    {
      languages:['C#','Javascript'],
      tools:['Terraform','Google Cloud','Github Actions'],
      frameworks:['Unity']
    },
    'https://www.robertaron.io/BeamBattleOnline/'
  ),
  project(
    "Square Squash", 
    "Cute mobile puzzle game available on the Google Play Store and Apple App Store. The game features quick rounds in which players rush to clear as many blocks as possible. High scores are hosted in an online leaderboard.",
    {
      languages: [ 'Javascript', 'C#' ],
      tools: [
        'Amazon Web Services (AWS)',
        'API Gateway',
        'Lambda',
        'Cloud Formation',
        'Relational Database Service (RDS)',
        'Serverless (SLS)',
      ],
      frameworks: [ 'Unity' ]
    },
    'https://play.google.com/store/apps/details?id=com.FraternalStudios.SquareSquash&hl=en_US'
  ),
  project(
    "Cable Driven Robot",
    "Robot which uses 8 cables that extend and retract as the means to move an end effector. Users insert keyframe positional information into the UI, which displays the path the robot will move. After submitting the points, the robot moves along the desired path.",
    {
      languages: [ 'C++', ],
      tools: [ 'Git', ],
      frameworks: [ 'Qt', 'Arduino', 'OpenGL',]
    },
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
