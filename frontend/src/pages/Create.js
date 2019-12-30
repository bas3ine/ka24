import React, { Component } from 'react'
import { Row, Col,Input,Button } from 'antd';
import BackButton from "../components/Usefull/BackButton"
import CreateQue from "../components/Question/CreateQue"
export class Create extends Component {

    render() {
        return (
            <Row style={{paddingTop:"10px"}}>
                <Col span={2}>
                <BackButton></BackButton>
                </Col>
                <Col span={20}>
<CreateQue></CreateQue>
                </Col>
                <Col span={2}>lk</Col>
</Row>
        )
    }
}

export default Create
