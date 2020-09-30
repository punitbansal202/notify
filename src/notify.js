import React, { useState } from 'react';
import { Collapse, Badge } from '@material-ui/core';
import { NotificationsActive } from '@material-ui/icons';
import NotifyList from './notifyList';
import notifyJson from './notify.json';

function Notify() {
  const notifyList = notifyJson;
  const [checked, setChecked] = useState(false);

  return (
    <div className='notificationDiv'>
      <Badge badgeContent={notifyList.length} color='primary'>
        <NotificationsActive
          className='notificationIcon'
          fontSize='large'
          checked={checked}
          onClick={() => setChecked((prev) => !prev)}
        />
      </Badge>
      <Collapse in={checked}>
        <NotifyList notifyList={notifyList} />
      </Collapse>
    </div>
  );
}

export default Notify;
