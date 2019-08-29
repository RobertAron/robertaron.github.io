import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Email from '@material-ui/icons/Email'
import Phone from '@material-ui/icons/Phone'
import LocationOn from '@material-ui/icons/LocationOn'
import Icon from '@material-ui/core/Icon'
import { ListItemText, createStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ContentArea from './ContentArea';

const contacts = [
  { icon: <Email />, label: "Robert.Aron.TX@gmail.com" },
  { icon: <Phone />, label: "214-448-22263" },
  { icon: <LocationOn />, label: "Allen, Texas (Relocating)" },
  { icon: <Icon className='fa fa-globe' />, label: "RobertAron.io" },
  { icon: <Icon className='fa fa-github' />, label: "Github.com/RobertAron" }
]

const useStyles = makeStyles((theme) => createStyles({
  itemIconRoot: { minWidth: '30px' },
  listItemRoot: { padding: '0px', width: 'max-content' },
  itemText: {display: 'block'}
}))

const Contact = () => {
  const classes = useStyles()
  return (
    <ContentArea title="Contact">
      <List>
        {contacts.map(ele => (
          <ListItem classes={{ root: classes.listItemRoot }} key={ele.label}>
            <ListItemIcon classes={{ root: classes.itemIconRoot }}>
              {ele.icon}
            </ListItemIcon>
            <ListItemText primary={ele.label} className={classes.itemText}/>
          </ListItem>
        ))}
      </List>
    </ContentArea>
  )
}

export default Contact