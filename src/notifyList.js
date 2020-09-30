import React from 'react';
import { List, ListItem, ListItemText, Checkbox } from '@material-ui/core';
import history from './history';

function NotifyList(props) {
  return (
    <List className='notificationList'>
      {props.notifyList.map((value) => {
        const { id, title, desc, action } = value;
        return (
          <ListItem button divider dense key={id}>
            <Checkbox color='primary' />
            <ListItemText
              className='notificationItemText'
              primary={title}
              secondary={desc}
              onClick={() => history.push(action)}
            />
          </ListItem>
        );
      })}
    </List>
  );
}

export default NotifyList;
