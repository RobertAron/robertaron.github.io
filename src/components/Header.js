import React from 'react';
import { Typography, Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { withRouter } from "react-router"
import themes from '../Themes'

const useStyles = makeStyles((theme) => createStyles({
    appBarSpacing: {
      // alignItems: 'stretch', //got it to work with this + div with an image with a height of 0px and min-height 100%
      '& > * + *': {
        paddingLeft: '10px',
      }
    },
    mainLogoContainer: {
      position: 'relative',
      top: '10px',
      '& *': {
        height: '60px',
        width: '60px',
        borderRadius: '5px',
      }
    },
    lefItem:{
      minWidth: '0',
      minHeight: '0',
      height: '77px',
      padding: theme.spacing(1),
      '& > img':{
        height: '100%',
        boxShadow: theme.shadows[3],
        borderRadius: '3px',
      }
    },
    spacer: {
      flex: '7 1 auto'
    },
    headerShadow:{
      boxShadow: 'none'
    }
  })
)

const Header = (props) => {
  const classes = useStyles()
  let company = props.match.params.company
  company = themes[company]?company:"base"
  const image = themes[company].image
  return (
    <AppBar position="static" className={classes.headerShadow}>
      <Toolbar classes={{ root: classes.appBarSpacing }} disableGutters={true}>
        <div className={classes.lefItem}>
          <img src={image} alt='ico'/>
        </div>
        <div className={classes.leftItem}>
          <Typography variant="h3" component="h1">
            Robert Aron
          </Typography>
          <Typography variant="subtitle1">
            Software Engineer
          </Typography>
        </div>
        <div className={classes.spacer}/>
      </Toolbar>
    </AppBar>
  )
}

export default withRouter(Header)
