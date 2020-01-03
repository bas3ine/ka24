import React, { Component } from 'react'
import { Row, Col,Input,Button } from 'antd';
import Axios from 'axios';


export class Home extends Component {

    onCreate =()=>{
        Axios.post("/createquestionTopic",{
          }).then(result =>{
            console.log(result.data)
            this.props.history.push('/create',{ question_list_id:result.data.id });
          }).catch(err=>{
            console.error(err)
          })
        
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
