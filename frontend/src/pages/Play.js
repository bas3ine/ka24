import React, { Component } from 'react'
import PlayQue from "../components/Question/PlayQue"
import BackButton from "../components/Usefull/BackButton"
import { Row, Col, Input, Button } from 'antd';
import { withRouter} from 'react-router-dom'

export class Play extends Component {
    state={
        question:this.props.location.state.question
    }

    checkState=()=>{
        console.log(this.state)
    }


    render() {
        return (
<Row style={{paddingTop:"10px"}}>
<Col span={2}>
<BackButton goToPath={'/select'}></BackButton>
</Col>
<Col span={20}>
<PlayQue
questionData = {this.state.question}
/>
<Button onClick={this.checkState}></Button>
</Col>
<Col span={2}>lk</Col>
</Row>
        )
    }
}

export default withRouter(Play)
