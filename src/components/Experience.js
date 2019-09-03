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
    "Member of the Big Data Tooling and Infrastructure Team",
    [
      "Developing front end user interfaces that allow users to easily generate analytics and documentation about big data.",
      "Spear-heading transition to AWS infrastructure.",
      "Facilitating linear scalability of big data.",
      "Mentor/train new team members."
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