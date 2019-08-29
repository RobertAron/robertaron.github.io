import React from 'react';
import { Typography, Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import rIcon from '../images/R-Material-Icon.png'
import { makeStyles, createStyles } from '@material-ui/core/styles';


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
      flex: '0 1 71px',
      padding: theme.spacing(1),
      '& > img':{
        width: '100%',
        boxShadow: theme.shadows[3],
        borderRadius: '3px'
      }
    },
    spacer: {
      flex: '7 1 auto'
    }
  })
)

const Header = () => {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar classes={{ root: classes.appBarSpacing }}>
        <div className={classes.lefItem}>
          <img src={rIcon} alt='ico'/>
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

export default Header
