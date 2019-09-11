import baseStyle from './Base/Base'
import baseImage from './Base/Base-Logo.png'
import blizzardStyle from './Blizzard/Blizzard'
import blizzardImage from './Blizzard/Blizzard-Logo.jpg'
import rendermanStyle from './Renderman/Renderman'
import rendermanImage from './Renderman/Renderman-Logo.jpg'
import { createMuiTheme } from '@material-ui/core'

const printTheme = {
  typography: {
    fontSize: 12,
  }
}

const allTheme = {
  spacing: 8,
}

const makeTheme = (style,image) => {
  const baseTheme = {
    ...style,
    ...allTheme
  }
  const withPrint = {
    ...baseTheme,
    ...printTheme
  }
  const web = createMuiTheme(baseTheme)
  const print = createMuiTheme(withPrint)
  return {
    web,
    print,
    image
  }
}


export default {
  base: makeTheme(baseStyle,baseImage),
  blizzard: makeTheme(blizzardStyle,blizzardImage),
  renderman: makeTheme(rendermanStyle,rendermanImage)
}