import React from 'react';
import Header from './components/Header'
import TechSkills from './components/TechSkills'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Experience from './components/Experience'
import Contact from './components/Contact';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Sparkles from './components/Sparkles';
import CoverLetter from './components/CoverLetter'

const useStyles = makeStyles((theme) => createStyles({
  content:{
    minHeight: '100vh',
    maxWidth: '900px',
    margin: 'auto',
    zIndex: 1
  },
  withSidebar: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative'
  },
  sidebar: {
    flexBasis: '10rem',
    flexGrow: '1',
  },
  notSidebar: {
    flexBasis: 0,
    flexGrow: '999',
    minWidth: '30rem'
  },
  keepBackgroundColor:{
    backgroundColor: theme.palette.background.default
  }
}))

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.keepBackgroundColor}>
      <div className={classes.content}>
        <Header/>
        <div className={classes.withSidebar}>
          <div className={classes.sidebar}>
            <Contact/>
            <TechSkills/>
            <Achievements/>
          </div>
          <div className={classes.notSidebar}>
            <Experience/>
            <Projects/>
            <Education/>
            {/* <CoverLetter/> */}
          </div>
          <Sparkles/>
        </div>
      </div>
    </div>
  );
}

export default App;
