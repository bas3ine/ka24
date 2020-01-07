import React, { Component } from 'react'
import { Row, Col, Input, Button,Form } from 'antd';
import PlayQuestionList from "../Usefull/PlayQuestionList"
import Score from "../../pages/Score"
import style from './PlayQue.module.css'
import ReactInterval from 'react-interval';
import { withRouter} from 'react-router-dom'
import Axios from 'axios';

export class PlayQue extends Component {

  state={
    questionNumber:0,
    text:'',
    enabled: true,
    timeout: 500,
    count: 0
  }

  filterRenderQuestion() {
    const id = this.state.questionNumber
    return this.props.questionData.filter((checkId,index)=>index==id)
  }

  tryRenderQuestion(){
    let checkQuestion = this.filterRenderQuestion()
    return checkQuestion.map((checkId)=>
    <PlayQuestionList RenderQuestionList={checkId} />
    )
  }
  
  renderQuestion() {
    return this.props.questionData.map((checkId,index) =>
        <PlayQuestionList RenderQuestionList={checkId} />
      )
  }

  onChange = e => {
    // console.log(e.target.value);
    this.setState({ text: e.target.value })
    //check number
  }

  solvingEquation=(e)=>{
    e.preventDefault()
    let text = this.state.text
    let answer = eval(text)
    let checkArrQuestion = this.filterRenderQuestion()
    console.log(...checkArrQuestion)
    console.log("answer is :",answer,"Answer at state is :",checkArrQuestion[0].answer)
    if(answer==checkArrQuestion[0].answer){
       this.setState({
        questionNumber:this.state.questionNumber+1,
        text:''
      })
    } 
    if (this.state.questionNumber+1==this.props.questionData.length)
    {
      console.log("Congratiun!!",this.state.questionNumber,this.props.questionData.length)
      Axios.post('/addscore',{
        score:this.state.count,
        question_list_id:this.props.questionData[0].question_list_id
      })
      .then(result =>{
        console.log("this.state is :",this.state)
        console.log(result.response)
        this.props.history.push('/score',{question_list_id:this.props.questionData[0].question_list_id});
      }).catch(err=>{
        console.error(err)
      })
    }
  }

  render() {
    console.log("prop is : ",this.props.questionData)
    // console.log("Number of question is :",this.props.questionData.length-1)
    const {timeout, enabled, count} = this.state;
    const { getFieldDecorator } = this.props.form
    console.log(this.state.count,"count is")
    return (
      <Row type="flex" justify="center" >
        <Col span={24}>
          <Row type="flex" justify="space-between" style={{padding:"10px 10px"}}>
            <Col>
            <h2>Question{this.state.questionNumber+1}/{this.props.questionData.length}</h2></Col>
            <Col>
        <ReactInterval {...{timeout, enabled}}
          callback={() => this.setState({count: this.state.count + 1})} />
        <h1>{count}</h1>
        </Col>
        </Row>
        {this.tryRenderQuestion()}
        <Form onChange={this.onChange} >
                  <Form.Item type="flex" label="Please Input Your Solution:">
                    {getFieldDecorator("field", {
                      rules: [
                        {
                          required: true,
                          message: 'Please Input Your Solution!',
                        }
                      ]
                    })(<input />)}
                  </Form.Item>
                  <Form.Item type="flex" justify="center">
                    <Button type="primary" htmlType="submit" onClick={this.solvingEquation}>CheckAnswer</Button>
                  </Form.Item>
                </Form>
        </Col>
      </Row>
    )
  }
}

const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(PlayQue);

export default withRouter(WrappedAdvancedSearchForm)

