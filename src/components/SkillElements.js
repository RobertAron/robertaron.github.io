import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { deepPurple, green, cyan } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => createStyles({
  skillItem: {
    listStyleType: 'none',
    margin: theme.spacing(.5),
    padding: theme.spacing(.5),
    width: 'max-content',
    display: 'inline-block'
  },
  languages: {
    color: '#fff',
    backgroundColor: green[500],
    // backgroundColor: '#bb86fc',
  },
  tools: {
    color: '#fff',
    backgroundColor: deepPurple[700],
    // backgroundColor: '#3700b3',
  },
  frameworks:{
    color: '#fff',
    backgroundColor: cyan[500],
    // backgroundColor: '#03dac6',
  }
}))


const SkillElement = ({ name, toolType }) => {
  const classes = useStyles()
  return (
    <Paper component={'li'} className={`${classes.skillItem} ${classes[toolType]}`}>
      {name}
    </Paper>
  )
}


const Language = (props) => <SkillElement {...props} toolType="language"/>
const Tool = (props) => <SkillElement {...props} toolType="tool"/>
const Framework = (props) => <SkillElement {...props} toolType="framework"/>


export {
  Language,
  Tool,
  Framework,
  SkillElement
}