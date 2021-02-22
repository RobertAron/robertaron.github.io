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
import ContentArea from './ContentArea'
import { withRouter } from "react-router"

const contacts = (pathName) => ([
  { icon: <Email />, label: "Contact@RobertAron.io", href: "mailto:Contact@RobertAron.io" },
  { icon: <Phone />, label: "214-448-2263" },
  { icon: <LocationOn />, label: "Allen, Texas" },
  { icon: <Icon className='fa fa-globe' />, label: "RobertAron.io", href: `https://RobertAron.io/#${pathName}` },
  { icon: <Icon className="fab fa-codepen" />, label: "Codepen.io/RobertAron", href: "https://codepen.io/RobertAron" },
  { icon: <Icon className='fa fa-github' />, label: "Github.com/RobertAron", href: "https://Github.com/RobertAron" },
])

const useStyles = makeStyles((theme) => createStyles({
  itemIconRoot: { minWidth: '30px', display: 'block' },
  listItemRoot: { padding: '0px', width: 'max-content' },
  itemText: { display: 'block' }
}))

const Contact = (props) => {
  const pathName = props.location.pathname
  const classes = useStyles()
  return (
    <ContentArea title="Contact">
      <List classes={{ root: classes.listRoot }}>
        {contacts(pathName).map(ele => (
          <ListItem
            classes={{ root: classes.listItemRoot }}
            key={ele.label}
            component={'a'}
            href={ele.href}>
            <ListItemIcon classes={{ root: classes.itemIconRoot }}>
              {ele.icon}
            </ListItemIcon>
            <ListItemText primary={ele.label} className={classes.itemText} />
          </ListItem>
        ))}
      </List>
    </ContentArea>
  )
}

export default withRouter(Contact)