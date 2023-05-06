import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles } from '@material-ui/core/styles';


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
    backgroundColor: '#1a90ea',
  },
  tools: {
    color: '#fff',
    backgroundColor: '#ea1a1a',
  },
  "frameworks/libraries":{
    color: '#fff',
    backgroundColor: '#44b329',
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