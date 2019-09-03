import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { BrowserRouter as Router, Route } from "react-router-dom"
import themes from './Themes'


const ThemeWithPrint = (props) => {
  const isPrint = useMediaQuery('print')
  let company = props.match.params.company
  company = themes[company]?company:"base"
  const pickedTheme = themes[company][isPrint?'print':'web']
  return (
    <ThemeProvider theme={pickedTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  )
}

ReactDOM.render(
  <Router>
    <Route component={ThemeWithPrint} path="/:company?"/>
  </Router>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
