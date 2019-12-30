import React, { Component } from 'react'
import PlayQue from "../components/Question/PlayQue"
import { Row, Col, Input, Button } from 'antd';

export class Play extends Component {
    render() {
        return (
<Row style={{paddingTop:"10px"}}>
    <PlayQue></PlayQue>
</Row>
        )
    }
}

export default Play
