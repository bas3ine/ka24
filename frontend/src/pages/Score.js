import React, { Component } from 'react'
import { Card, Menu, Breadcrumb, Button,Typography,Text,Row,Col,Table , Divider, Columns } from 'antd';
 
import BackButton from '../components/Usefull/BackButton'
import { withRouter} from 'react-router-dom'
import Axios from 'axios';
import { List } from 'antd';

export class Score extends Component {

    state={
        question_list_id:this.props.location.state.question_list_id,
        showScore:[]
    }

    componentDidMount() {
        Axios.post("/showscore",{
            question_list_id:this.state.question_list_id
        })
    .then(result =>{
      const showScore = result.data;
      console.log(showScore,"pelaseshow")
      this.setState({showScore:showScore})
    })}


    render() {
        console.log(this.state.showScore.question)
        const columns = [
            {
              title: 'Name',
              dataIndex: 'user.nickName',
              key: 'name',
            },
            {
              title: 'score',
              dataIndex: 'score',
              key: 'score',
            },
          ];
        return (
            <Row style={{paddingTop:"10px"}}>
                <Col span={2}>
                <BackButton goToPath={'/home'}></BackButton>
                </Col>
                <Col span={20}>
                <Table dataSource={this.state.showScore.question} columns={columns} />
                </Col>
                <Col span={2}>lk</Col>
</Row>
        )
    }
}

export default withRouter(Score)