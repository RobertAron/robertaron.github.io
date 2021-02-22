import React from 'react';
import JobDetails from './JobDetails'
import ContentArea from './ContentArea'
import { Divider } from '@material-ui/core';

const job = (title,company,dates,location,team,responsibilities) =>({
  title,
  company,
  dates,
  location,
  team,
  responsibilities
})

const jobs = [
  job(
    "Senior Software Engineer",
    "State Farm",
    "January 2018 - Now",
    "Richardson, Texas",
    "Full Stack Developer",
    [
      "Design and Develop react application to allow users to quickly gain insights on big data.",
      "Develop Python & Node APIs (hosted in AWS) that interface with autoscaling Big Data applications",
      "Develop and maintain Typescript SDK to interface with rest APIs",
      "Mentor and train other developers in typescript,react, postgreSQL, and other related technologies."
    ]
  ),
  job(
    "Software Engineer Intern",
    "Frontier Communications",
    "May 2016 - August 2016",
    "Irving, Texas",
    "Member of the Telecommunications Software Team",
    [
      "Creating automated interactive support services.",
      "Developing data analytics tooling.",
      "Developed Reporting and Alert services that monitor system health."
    ]
  )
]

const Experience = () => (
  <ContentArea title='Experience'>
    {jobs.map((job,index)=>(
      <React.Fragment key={job.company}>
        {index!==0 && <Divider/>}
        <JobDetails {...job}/>
      </React.Fragment>
    ))}
  </ContentArea>
)



export default Experience