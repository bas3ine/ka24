import React, { Component } from 'react'
import { Card, Menu, Breadcrumb, Button,Typography,Text,Row,Col,Table } from 'antd';
import BackButton from '../components/Usefull/BackButton'
import { withRouter} from 'react-router-dom'
import Axios from 'axios';

export class Score extends Component {

    state={
        question_list_id:this.props.location.state.question_list_id
    }

    componentDidMount() {
        Axios.get("/showscore",{
            question_list_id:this.state.question_list_id
        })
    .then(result =>{
      const questionList = result.data;
      console.log(questionList,"pelaseshow")
    })}

    render() {
        console.log(this.state.question_list_id)
        return (
            <Row style={{paddingTop:"10px"}}>
                <Col span={2}>
                <BackButton goToPath={'/home'}></BackButton>
                </Col>
                <Col span={20}>
                {/* <Table columns={columns} dataSource={data} /> */}
                </Col>
                <Col span={2}>lk</Col>
</Row>
        )
    }
}

export default withRouter(Score)