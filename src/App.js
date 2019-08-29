import React from 'react';
import Header from './components/Header'
import TechSkills from './components/TechSkills'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Experience from './components/Experience'
import Contact from './components/Contact';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';

const useStyles = makeStyles((theme) => createStyles({
  content:{
    minHeight: '100vh',
    maxWidth: 'calc(100vh * .935)',
    margin: 'auto',
    // backgroundColor: '#2f3136',
    backgroundColor: '#f1f1f1'
  },
  withSidebar: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  sidebar: {
    flexBasis: '10rem',
    flexGrow: '1',
  },
  notSidebar: {
    flexBasis: '0',
    flexGrow: '999',
  }
}))

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.content}>
      <Header />
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
        </div>
      </div>
    </div>
  );
}

export default App;
