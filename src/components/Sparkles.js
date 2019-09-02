import React from 'react';
import Sparkle from './Sparkle'
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery'

const variants = ["pop", "sparkle", "light", "cross"]

function getRandomVariant() {
  return variants[Math.floor(Math.random()*variants.length)];
}

// being lazy....
const leftStyles = new Array(5).fill(null).map((ele,index)=>{
  const offsetHelper = index + 2
  const offset = (offsetHelper+1**offsetHelper)%7
  return {
    top: `${index*20+offset}%`,
    left: `${offset}%`,
    animationDelay: `${offset/10}s`
  }
})

const rightStyles = new Array(5).fill(null).map((ele,index)=>{
  const offsetHelper = index + 2
  const offset = (offsetHelper**offsetHelper/2)%7
  return {
    top: `${index*20+offset}%`,
    right: `${offset}%`,
    animationDelay: `${offset/10}s`
  }
})

const animationStyles = leftStyles.concat(rightStyles)
console.log(animationStyles)

const useStyles = makeStyles({
  root:{
    position: 'absolute',
    top: 0,
    right: "-10%",
    bottom: 0,
    left: "-10%"
  },
  disabled:{
    display:'none'
  },
})


const Sparkles = () => {
  const classes = useStyles()
  const isPrint = useMediaQuery('print')
  const disabled = isPrint?` ${classes.disabled}`:''
  return(
    <div className={`${classes.root}${disabled}`}>
      {animationStyles.map((style,index)=>(
        <Sparkle variant={getRandomVariant()} style={style} key={index}/>
      ))}
    </div>
  )
}

export default Sparkles