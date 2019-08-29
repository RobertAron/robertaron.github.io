import React from 'react';
import ContentArea from './ContentArea';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
  listItemRoot: { padding: '0px', width: 'max-content' },
  itemText: {display: 'block'}
}))

const achievements = [
  "Eagle Scout",
  "Hack Texas Award Winner",
  "Earth Hack Award Winner",
]

const Achievements = () => {
  const classes = useStyles()
  return (
    <ContentArea title="Achievements">
      <List>
        {achievements.map(achievement=>(
          <ListItem className={classes.listItemRoot} key={achievement}>
            <ListItemText className={classes.itemText}>
              {achievement}
            </ListItemText>
          </ListItem>

        ))}
      </List>
    </ContentArea>
  )
}

export default Achievements
