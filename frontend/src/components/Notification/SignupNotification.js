import React, { Component } from 'react'
import {notification , Icon} from 'antd'

const signupOpenNotification = () => {
    notification.open({
      message: 'SIGNUP SUCCESS',
      description:"signup success",
      icon: <Icon type="check" style={{ color: '#108ee9' }} />,
    });
  };

  const signupFailedNotification = (message) => {
    notification.open({
      message: 'SIGNUP FAILED',
      description: message,
      icon: <Icon type="check" style={{ color: '#108ee9' }} />,
    });
  };

export {signupOpenNotification,signupFailedNotification}
