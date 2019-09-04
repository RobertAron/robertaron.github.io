import React from 'react';
import { Typography, Paper, Divider } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => createStyles({
  marginChildren: {
    overflow:'hidden',
    margin: `${theme.spacing(1)}px ${theme.spacing(0.5)}px`,
    '& > *': {
      margin: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
      fontSize: '1.175rem'
    }
  }
}))

const companyName = ""
const title = ''
const paragraphs = ['test p1', 'test p2']

const CoverLetter = () => {
  const [day, month, year] = new Date().toUTCString().split(" ").splice(1,3)
  const classes = useStyles()
  return (
    <Paper className={`${classes.marginChildren}`}>
      <Typography>
        {`${day} ${month}, ${year}`}
        <br/>
        {companyName}
        <br/>
        {title}
      <Divider/>
      </Typography>
      <Typography> Dear Hiring Manager,</Typography>
      {paragraphs.map(paragraph=>(
        <Typography>{paragraph}</Typography>
      ))}
      <Typography>
        Thank you for your consideration,
        <br></br>
        Robert Aron
      </Typography>
    </Paper>
  )
}

export default CoverLetter