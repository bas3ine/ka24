import React, { Component } from 'react'
import { Card, Menu, Breadcrumb, Button,Typography } from 'antd';

export class List extends Component {
    
    render() {
        const { Text } = Typography;
        return (
            <Card
            style ={{borderRadius:"30px"}}
            hoverable
          >
<h4 style={{height:"120px"}}>{this.props.QueList.questionName}</h4>
<hr></hr>
Create by <Text code>{this.props.QueList.user.nickName} </Text>
<Button>Play</Button>
          </Card>
        )
    }
}

export default List
