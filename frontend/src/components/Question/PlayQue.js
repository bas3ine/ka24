import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'antd';
import style from './PlayQue.module.css'
export class PlayQue extends Component {
  render() {
    return (
      <Row type="flex" justify="center" >
        <Col span={9}>
          <Row type="flex" justify="space-around" align="middle" >
            <Col span={10}>
              <Button block type="primary" shape="round" size={64}
                className={style.ButtonCh}>
                ch1
        </Button>
            </Col>
            <Col span={10}>
              <Button block type="primary" shape="round" size={64}
                className={style.ButtonCh}>
                ch2
        </Button>
            </Col>
          </Row>
          <Row type="flex" justify="space-around" align="middle">
            <Col span={10}>
              <Button block type="primary" shape="round" size={64}
                className={style.ButtonCh}>
                ch3
        </Button>
            </Col>
            <Col span={10}>
              <Button block type="primary" shape="round" size={64}
                className={style.ButtonCh}>
                ch4
        </Button>
            </Col>
          </Row>
        </Col>
        <Col span={9}>
        </Col>
      </Row>
    )
  }
}

export default PlayQue
