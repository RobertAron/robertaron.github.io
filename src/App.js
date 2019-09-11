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
// eslint-disable-next-line no-unused-vars
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
    position: 'relative',
    width: 'fit-content'
  },
  sidebar: {
    flex: '1 1 10rem'
  },
  notSidebar: {
    flex: '999 0 30rem',
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
            {/* <CoverLetter/> */}
            <Experience/>
            <Projects/>
            <Education/>
          </div>
          <Sparkles/>
        </div>
      </div>
    </div>
  );
}

export default App;
