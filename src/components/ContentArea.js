import React from 'react';
import { Typography, Paper, Divider, makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  marginChildren: {
    overflow:'hidden',
    margin: `${theme.spacing(1)}px ${theme.spacing(0.5)}px`,
    '& > *': {
      margin: `${theme.spacing(.4)}px ${theme.spacing(1)}px !important`
    }
  }
}))

const ContentArea = ({ children, title }) => {
  const classes = useStyles()
  return (
    <Paper className={classes.marginChildren}>
      <Typography variant="h5" component="h2">
        {title}
      </Typography>
      <Divider/>
      {children}
    </Paper>
  )
}

export default ContentArea