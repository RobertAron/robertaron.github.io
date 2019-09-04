import React from 'react';
import Sparkle from './Sparkle'
import { makeStyles } from '@material-ui/core/styles';

const variants = ["pop", "sparkle", "light", "cross"]

function getRandomVariant() {
  return variants[Math.floor(Math.random()*variants.length)];
}

// being lazy....
const leftStyles = new Array(9).fill(null).map((ele,index)=>{
  const offsetHelper = index + 2
  const offset = (offsetHelper+1**offsetHelper)%5
  return {
    top: `${index*11+offset}%`,
    left: `${offset}%`,
    animationDelay: `${offset/5}s`
  }
})

const rightStyles = new Array(9).fill(null).map((ele,index)=>{
  const offsetHelper = index + 2
  const offset = (offsetHelper**offsetHelper/2)%5
  return {
    top: `${index*11+offset}%`,
    right: `${offset}%`,
    animationDelay: `${offset/5}s`
  }
})

const animationStyles = leftStyles.concat(rightStyles)

const useStyles = makeStyles({
  root:{
    position: 'absolute',
    top: 0,
    right: "-10%",
    bottom: 0,
    left: "-10%",
    zIndex: 0
  },
  sparklesDisplay:{},
  '@media print':{
    sparklesDisplay:{
      display:'none'
    }
  }
})


const Sparkles = () => {
  const classes = useStyles()
  return(
    <div className={`${classes.root} ${classes.sparklesDisplay}`}>
      {animationStyles.map((style,index)=>(
        <Sparkle variant={getRandomVariant()} style={style} key={index}/>
      ))}
    </div>
  )
}

export default Sparkles