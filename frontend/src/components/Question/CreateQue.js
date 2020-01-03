import React, { Component } from 'react'
import { Row, Col, Input, Button, Form, Card } from 'antd';
import style from './CreateQue.module.css'
import CollectionCreateForm from './CollectionCreateForm'
import Axios from 'axios';
import { withRouter} from 'react-router-dom'
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
    text: '',
    visible: false,
    question_list_id: this.props.location.state.question_list_id,
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
      question_list_id:this.state.question_list_id
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

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log('Received values of form: ', values);
      console.log('Name: ', values.questionName,"difficulty is ",values.difficulty);
      Axios.put("/addquestionTopic",{
        questionName:values.questionName,
        difficulty:values.difficulty,
        question_list_id:this.state.question_list_id
      }).then(result =>{
        console.log(result.response)
        form.resetFields();
        this.setState({ visible: false });
        this.props.history.push("/home")
      }).catch(err=>{
        console.error(err)
      })
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

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
            <Button block type="primary" shape="round"
                className={style.ButtonCh} 
                onClick={this.showModal}>
          Done
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}
const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(CreateQue);

export default withRouter(WrappedAdvancedSearchForm)
