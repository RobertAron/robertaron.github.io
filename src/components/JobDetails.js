import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => createStyles({
  basicInfo: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  rightInfo: {
    textAlign: 'right'
  },
  smallList:{
    margin: `0 0 ${theme.spacing(1)}px 0`,
    padding: `0 ${theme.spacing(3)}px`
  }
}))

const JobDetails = ({
  title,
  company,
  dates,
  location,
  team,
  responsibilities
}) => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.basicInfo}>
        <div>
          <Typography variant="h6" component="h3">
            {title}
          </Typography>
          <Typography variant="subtitle1">
            {company}
          </Typography>
        </div>
        <div className={classes.rightInfo}>
          <Typography>{dates}</Typography>
          <Typography>{location}</Typography>
        </div>
      </div>
      <div>
        <Typography>{team}</Typography>
        <Typography>Responsibilities Included:</Typography>
        <ul className={classes.smallList}>
          {responsibilities.map((responsibility=>(
            <li key={responsibility}>{responsibility}</li>
          )))}
        </ul>
      </div>
    </>
  )
}


export default JobDetails