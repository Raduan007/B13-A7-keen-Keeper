import React from 'react';
import { GoArchive } from 'react-icons/go';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';

const ActionButton = () => {
    return (
<div className="flex flex-col items-center gap-3">
  <button className="shadow-md py-3 px-23 rounded flex items-center gap-2">
    <RiNotificationSnoozeLine />
    <span>Snooze 2 Weeks</span>
  </button>

  <button className="shadow-md py-3 px-31 rounded flex items-center gap-2">
    <GoArchive />
    <span>Archive</span>
  </button>

  <button className="shadow-md py-3 px-31 rounded flex items-center gap-2">
    <RiDeleteBinLine />
    <span>Delete</span>
  </button>
</div>
    );
};

export default ActionButton;