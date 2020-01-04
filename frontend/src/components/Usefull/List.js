import React, { Component } from 'react'
import { Card, Menu, Breadcrumb, Button,Typography } from 'antd';
import { withRouter} from 'react-router-dom'
import Axios from 'axios';

export class List extends Component {

    handleIDForPlay = () =>{
        console.log(this.props.QueList)
        Axios.get(`/playQuestion/${this.props.QueList.id}`,)
        .then(result=>{
            console.log("result.data is ",result.data.question)
            this.props.history.push('/play',{question:result.data.question});
        }).catch(err=>{
            console.error(err)
        })
    }

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
<Button onClick={this.handleIDForPlay}>Play</Button>
          </Card>
        )
    }
}

export default withRouter(List)
