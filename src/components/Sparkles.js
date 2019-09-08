import React from 'react';
import Sparkle from './Sparkle'
import { makeStyles } from '@material-ui/core/styles';

const variants = ["pop", "sparkle", "light", "cross"]

function getRandomVariant() {
  return variants[Math.floor(Math.random()*variants.length)];
}

const leftStyles = new Array(19).fill(null).map((ele,index)=>{
  const offsetHelper = index + 2
  const offset = (offsetHelper+1**offsetHelper)%5
  const style = {
    top: `${index*5+offset}%`,
    animationDelay: `${offset/5}s`
  }
  index % 2 === 0 ? style['right'] = offset : style['left'] = offset
  return style
})

const useStyles = makeStyles({
  root:{
    position: 'absolute',
    top: 0,
    right: "-10%",
    bottom: 0,
    left: "-10%",
    pointerEvents: 'none' 
  },
  sparklesDisplay:{},
  '@media print, (max-width:1200px)':{
    sparklesDisplay:{
      display:'none'
    }
  }
})


const Sparkles = () => {
  const classes = useStyles()
  console.log(leftStyles)
  return(
    <div className={`${classes.root} ${classes.sparklesDisplay}`}>
      {leftStyles.map((style,index)=>(
        <Sparkle variant={getRandomVariant()} style={style} key={index}/>
      ))}
    </div>
  )
}

export default Sparkles