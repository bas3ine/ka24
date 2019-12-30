import React from 'react'
import {notification , Icon} from 'antd'

const openNotification = (message) => {
    notification.open({
      message: 'Login Success',
      description:"Welcome "+ message+"!!",
      icon: <Icon type="check" style={{ color: '#108ee9' }} />,
    });
  };

  const failedNotification = (message) => {
    notification.open({
      message: 'Login failed',
      description: message,
      icon: <Icon type="check" style={{ color: '#108ee9' }} />,
    });
  };

export { openNotification,failedNotification}