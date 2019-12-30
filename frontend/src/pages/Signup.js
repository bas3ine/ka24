import React, { Component } from 'react'
import { Row, Col, Input, Button, Form, Tooltip, Icon } from 'antd';
import Axios from "../config/axios.setup"
import { signupOpenNotification, signupFailedNotification } from "../components/Notification/SignupNotification"

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDirty: false,
    }
  }
  handleDirtyBlur = e => {
    const { value } = e.target
    this.setState({ isDirty: this.state.isDirty || !!value })
  }


  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && value !== form.getFieldValue('password')) {
      callback('password and confirm password is not same')
    } else {
      callback()
    }
  }
  compareToSecondPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && this.state.isDirty) {
      form.validateFields(["confirmpassword"], { force: true })
    }
    callback()

  }

  submitFrom = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, value) => {
      console.log(err, "outcondition")
      console.log(value, "VALUE VALUE")
      if (!err) {
        console.log("incomdition")
        Axios.post('/registerUser', {
          username: value.username,
          password: value.password,
          nickName: value.nickName,
          email: value.email
        })
          .then(result => {
            console.log(value, "value is")
            signupOpenNotification()
            console.log(result.response)
            this.props.history.push("/login")
          })
          .catch(err => {
            console.error(err.response.data.message, "--------")
            signupFailedNotification(err.response.data.message)
          })
      } else {
        console.log("ERROR")
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Row type="flex" justify="center" align="middle" style={{ height: "100vh" }}>
        <Col>
          <Row  >
            <Col type="flex" justify="center" align="middle">
              <img src="https://f.ptcdn.info/202/059/000/pdj96y10o03Td4WPRuk2-o.jpg" style={{ width: "20%" }} />
            </Col>
          </Row>

          <Form onSubmit={this.submitFrom} >
            <Row gutter={[16, 24]}>
              <Form.Item label="username">
                {getFieldDecorator("username", {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your username!',
                    }
                  ]
                })(<input />)}
              </Form.Item>
            </Row>

            <Row gutter={[16, 24]}>
              <Form.Item lable="Password" hasFeedback>password:
                    {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  {
                    validator: this.compareToSecondPassword
                  }
                ]
              })(<Input.Password />)}
              </Form.Item>
            </Row>

            <Row gutter={[16, 24]}>
              <Form.Item lable="Confirm Password" >confirm password :
                    {getFieldDecorator("confirmpassword", {
                rules: [
                  {
                    required: true,
                    message: 'Please input your confirm password!',
                  },
                  {
                    validator: this.compareToFirstPassword,
                  }
                ]
              })(<Input.Password onBlur={this.handleDirtyBlur} />)}
              </Form.Item>
            </Row>

            <Row gutter={[16, 24]}>
              <Form.Item lable="E-mail">E-mail:
                    {getFieldDecorator("email", {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ],
              })(<Input />)}
              </Form.Item>
            </Row>

            <Row gutter={[16, 24]}>
              <Form.Item
                label={
                  <span>
                    Nickname&nbsp;
              <Tooltip title="What do you want others to call you?">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>}>
                {getFieldDecorator("nickName", {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your name!',
                      whitespace: true
                    }
                  ]
                })(<Input />)}
              </Form.Item>
            </Row>
            <Row type="flex" justify="center" align="middle" style={{ margin: "10px" }} >
              <Col>
                <Form.Item>
                  <Button type="primary" htmlType="submit" >Signup</Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>

        </Col>
      </Row>
    )
  }
}

export default Form.create()(Signup)