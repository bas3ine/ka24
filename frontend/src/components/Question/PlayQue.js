import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'antd';
import style from './PlayQue.module.css'
export class PlayQue extends Component {

  lenderChoiceQuestionTestCh1 = () =>{
    this.props.questionData.map(checkId=>
      console.log(checkId.ch1)
      )
  }

  renderQuestion() {
    return this.props.questionData.map(checkId =>
      <Row type="flex" >
        <Col span={12}>
          <Row type="flex" justify="space-around" align="middle" >
            <Col span={10}>
              <Button block type="primary" shape="round" size={64}
                className={style.ButtonCh}
                >
                {checkId.ch1}
        </Button>
            </Col>
            <Col span={10}>
              <Button block type="primary" shape="round" size={64}
                className={style.ButtonCh}>
                {checkId.ch2}
        </Button>
            </Col>
          </Row>
          <Row type="flex" justify="space-around" align="middle" style ={{paddingTop:"25px"}}>
            <Col span={10}>
              <Button block type="primary" shape="round" size={64}
                className={style.ButtonCh}>
                {checkId.ch3}
        </Button>
            </Col>
            <Col span={10}>
              <Button block type="primary" shape="round" size={64}
                className={style.ButtonCh}>
                {checkId.ch4}
        </Button>
            </Col>
          </Row>
        </Col>
        <Row type="flex" justify="space-around" align="middle" style ={{paddingTop:"25px"}}>
          <Col span={12} type="flex" justify="space-around" alignItems="middle" >
              <Button block type="primary" shape="round" size={64}
                className={style.ButtonAnswer}
                onClick ={this.lenderChoiceQuestionTestCh1}
                >
              {checkId.answer}
        </Button>
        </Col>
        </Row>
      </Row>
      )
  }

  render() {
    console.log("prop is : ",this.props.questionData)
    return (
      <Row type="flex" justify="center" >
        <Col span={24}>
        {this.renderQuestion()}
        </Col>
        <Col>
        <Button block type="primary" shape="round" size={64} >+</Button>
        </Col>
        <Col>
        <Button block type="primary" shape="round" size={64} >-</Button>
        </Col>
        <Col>
        <Button block type="primary" shape="round" size={64} >x</Button>
        </Col>
        <Col>
        <Button block type="primary" shape="round" size={64} >/</Button>
        </Col>
      </Row>
    )
  }
}

export default PlayQue
