import React from 'react'
import { makeStyles } from '@material-ui/styles';
import sparkleImg from '../images/animations/sparkle.png'
import popImg from '../images/animations/pop.png'
import crossImg from '../images/animations/cross.png'
import lightImg from '../images/animations/light.png'
import PropTypes from 'prop-types'

const pop = {
  "width": "24px",
  "height": "24px",
  "backgroundImage": `url('${popImg}')`,
  "backgroundSize": "840px 24px",
  "backgroundPosition": "-816px",
  "animation": "$pop 2.91666666667s steps(34,start) infinite forwards"
}


const sparkle = {
  "width": "43px",
  "height": "43px",
  "backgroundImage": `url('${sparkleImg}')`,
  "backgroundSize": "774px 43px",
  "backgroundPosition": "-731px",
  "animation": "$sparkle 1.5s steps(17,start) infinite forwards"
}

const light = {
  "width": "20px",
  "height": "20px",
  "backgroundImage": `url('${lightImg}')`,
  "backgroundSize": "620px 20px",
  "backgroundPosition": "-600px",
  "animation": "$light 2.58333333333s steps(30,start) infinite forwards"
}

const cross = {
  "width": "25px",
  "height": "25px",
  "backgroundImage": `url('${crossImg}')`,
  "backgroundSize": "625px 25px",
  "backgroundPosition": "-600px",
  "animation": "$cross 2.083325s steps(23,start) infinite forwards"
}

const sprite = {
  "display": "block",
  "position": "absolute",
  "backgroundPosition": 0,
}

const useStyles = makeStyles({
  sparkle,
  pop,
  sprite,
  light,
  cross,
  '@keyframes pop': {
    '0%': { backgroundPosition: 0 },
    '40%': { backgroundPosition: '-816px' },
    to: { backgroundPosition: '-816px' },
  },
  '@keyframes sparkle': {
    "0%": { backgroundPosition: 0 },
    "40%": { backgroundPosition: "-731px" },
    to: { backgroundPosition: "-731px" }
  },
  '@keyframes cross': {
    "0%": { backgroundPosition: 0 },
    "40%": { backgroundPosition: "-600px"},
    to: { backgroundPosition: "-600px"}
  },
  '@keyframes light': {
    "0%": { backgroundPosition: 0 },
    "40%": { backgroundPosition: "-600px"},
    to: { backgroundPosition: "-600px"}
  }
})

const Sparkle = ({ className, variant, style }) => {
  const classes = useStyles()
  className = className?` ${className}`:""
  style = style?style:{}
  return (
    <i className={`${classes.sprite} ${classes[variant]}${className}`} style={style}/>
  )
}

Sparkle.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["pop", "sparkle", "light", "cross"]).isRequired
}

export default Sparkle