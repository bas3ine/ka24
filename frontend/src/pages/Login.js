import React, { Component } from 'react'
import logo from '../logo.svg';
import '../App.css';
import { Row, Col, Input, Button, Form } from 'antd';
import Axios from "../config/axios.setup"
import { openNotification, failedNotification } from "../components/Notification/Notification"
import jwtDecode from "jwt-decode"

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }
  onSignUp = () => {
    this.props.history.push('/signup');
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log("alksjdlaksjd")
    const username = this.state.username
    const password = this.state.password
    Axios.post("/loginUser", { username, password })
      .then(result => {
        console.log(result.data, "kalsjdlakjsdlakdj")
        openNotification(result.data.user.nickName)
        localStorage.setItem("ACCESS_TOKEN", result.data.token)
        this.props.history.push("/home")
      })
      .catch(err => {
        console.error(err.response.data.message, "--------")
        failedNotification(err.response.data.message)
      })
    console.log(this.state.username)
    console.log(this.state.password)
  }


  render() {
    return (
      <Row style={{ height: "100vh" }}>
        <Row type="flex" justify="center" >
          <Col span={8}></Col>
          <Col span={8}>
            <Row>
              <Col>
                <Row>
                  <h1 type="flex" justify="center" align="middle"
                    style={{ fontSize: "50px", marginBottom: "-0.1em", marginTop: "100px", color: "#41c4dd", textTransform: "uppercase" }}>Login</h1>
                </Row>

              </Col>
            </Row>
          </Col>
        </Row>
        <Row type="flex" justify="center" align="middle" >
          <Col span={8}>
            <img src={logo} className="App-logo" alt="logo" />
          </Col>
          <Col span={8}>
            <Row>
              <Col>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Item>
                    <Input onChange={(e) => this.setState({ username: e.target.value })} placeholder="username" />
                  </Form.Item>
                  <Form.Item>
                    <Input onChange={(e) => this.setState({ password: e.target.value })} placeholder="password" />
                  </Form.Item>
                  <Row gutter={[24, 12]} >
                    <Col span={12}>
                      <Form.Item>
                        <Button block
                          htmlType="submit"
                          onClick={this.onSignUp}
                        >Signup</Button>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item>
                        <Button
                          type="primary"
                          block htmlType="submit"
                        >Login</Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>

    )
  }
}

export default Login
