import React, { Component } from 'react'
import { Row, Col, Input, Button, Form, Card } from 'antd';
import style from './CreateQue.module.css'
import ModalCreate from './ModalCreate'
import Axios from 'axios';
// import Axios from "../config/axios.setup"

const { TextArea } = Input;
export class CreateQue extends Component {

  state = {
    questionNo: 1,
    ch1: "",
    ch2: "",
    ch3: "",
    ch4: "",
    answer: "",
    text: ''
  }
  onChange = e => {
    console.log(e.target.value);
    this.setState({ text: e.target.value })
    //check number
  }

  addQuestion = e => {
    e.preventDefault()
    let text = this.state.text
    let answer = eval(text)
    let textAfterSplit =text.split(/([\(+\-\*\/\)])/)
    let removeDoubleCode =[]
    let choiceNumber=[]
    for(let i=0;i<textAfterSplit.length;i++){
      removeDoubleCode[i] = textAfterSplit[i].replace(/^"(.+(?="$))"$/, '$1')
        console.log(textAfterSplit[i].replace(/^"(.+(?="$))"$/, '$1'))
        if((!isNaN(removeDoubleCode[i]))&&removeDoubleCode[i]&&removeDoubleCode[i]!=="0"){
          choiceNumber[choiceNumber.length]=removeDoubleCode[i]
        }
    }
    console.log(choiceNumber)
    console.log(this.state)
    if(choiceNumber.length==4){
      this.setState({
        ch1: choiceNumber[0],
        ch2: choiceNumber[1],
        ch3: choiceNumber[2],
        ch4: choiceNumber[3],
        answer:answer,
      })
    }
  }

  addquestion = e =>{
    e.preventDefault()
    if((this.state.ch1=="")||(this.state.ch2=="")||(this.state.ch3=="")||(this.state.ch4=="")||(this.state.answer=="")){
      console.log("wrong syntax")
    } else {
    Axios.post("/addquestion",{
      ch1:this.state.ch1,
      ch2:this.state.ch2,
      ch3:this.state.ch3,
      ch4:this.state.ch4,
      answer:this.state.answer,
    }).then(result =>{
      console.log("this.state is :",this.state)
      console.log(result.response)
      this.setState({
        questionNo:this.state.questionNo+1
      })
    }).catch(err=>{
      console.error(err)
    })
  }
  }

  putAnswerFrom = (e) => {
    e.preventDefault();
    // this.props.form.validateFieldsAndScroll((err, value) => {
    //     console.log(err, "outcondition")
    //     console.log(value, "VALUE VALUE")
    //     if (!err) {
    //         console.log("incomdition")
    //         Axios.post('/registerUser', {
    //             username: value.username,
    //             password: value.password,
    //             name: value.name,
    //             email: value.email
    //         })
    //             .then(result => {
    //                 console.log(value,"value is")
    //                 signupOpenNotification()
    //                 console.log(result.response)
    //                 this.props.history.push("/login")
    //             })
    //             .catch(err => {
    //                 console.error(err.response.data.message, "--------")
    //                 signupFailedNotification(err.response.data.message)
    //             })
    //     } else {
    //         console.log("ERROR")
    //     }
    // })
  }


  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Row>
        <Col>
          <h2>Question {this.state.questionNo}</h2>
          <Row type="flex" justify="space-around" align="middle">
            <Col>
              <Row type="flex" justify="center" align="middle">
                <Col >
                  <Row type="flex" justify="center">
                    <Col><Card type="flex" justify="center" align="middle" style={{ padding: "40px" }} className={style.paddingCard} ><p style={{ margin: 0 }}>{this.state.ch1}</p></Card></Col>
                    <Col><Card type="flex" justify="center" align="middle" style={{ padding: "40px" }} className={style.paddingCard} ><p style={{ margin: 0 }}>{this.state.ch2}</p></Card></Col>
                  </Row>
                  <Row type="flex" justify="center">
                    <Col><Card type="flex" justify="center" align="middle" style={{ padding: "40px" }} className={style.paddingCard} ><p style={{ margin: 0 }}>{this.state.ch3}</p></Card></Col>
                    <Col><Card type="flex" justify="center" align="middle" style={{ padding: "40px" }} className={style.paddingCard} ><p style={{ margin: 0 }}>{this.state.ch4}</p></Card></Col>
                  </Row>
                </Col>
                <Col>
                <Card type="flex" justify="center" align="middle" style={{ padding: "40px" }} className={style.paddingCard} ><p style={{ margin: 0 }}>{this.state.answer}</p></Card>
                <Row type="flex" justify="center">
                <h2 >Answer</h2>
                </Row>
                </Col>
              </Row>
              <Row>

                <Form onChange={this.onChange} >
                  <Form.Item type="flex" label="Please Input Question:">
                    {getFieldDecorator("field", {
                      rules: [
                        {
                          required: true,
                          message: 'Please input an equation!',
                        }
                      ]
                    })(<input />)}
                  </Form.Item>
                  <Form.Item type="flex" justify="center">
                    <Button type="primary" htmlType="submit" onClick={this.addQuestion}  >create</Button>
                  </Form.Item>
                </Form>


              </Row>
            </Col>
          </Row>
          <hr />
          <Row type="flex" justify="space-around" align="middle">
            <Col>
              <Button block type="primary" shape="round"
                className={style.ButtonCh}
                onClick={this.addquestion}>
                Create
        </Button>
            </Col>
            <Col>
        <ModalCreate></ModalCreate>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}
const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(CreateQue);

export default WrappedAdvancedSearchForm
