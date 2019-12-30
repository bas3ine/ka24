import React, { Component } from 'react'
import { Row, Col,Input,Button } from 'antd';


export class Home extends Component {

    onCreate =()=>{
        this.props.history.push('/create');
    }
    onSelect =()=>{
        this.props.history.push('/select');
    }
    render() {
        return (
<Row >
<Row type = "flex" justify="space-around" align="middle" style ={{marginTop:"50px",marginBottom:"50px"}}>
<Col span={10}>
<Button block type="primary" shape="round" size={64}
style={{height:"600px",fontSize:"100px"}}
    onClick={this.onCreate}
    >
          Create
        </Button>    
        </Col>
    <Col span={10}>
    <Button block shape="round" style={{height:"600px",fontSize:"100px"}}
        onClick={this.onSelect}
>Play</Button>
    </Col>
</Row>
</Row>
        )
    }
}

export default Home
