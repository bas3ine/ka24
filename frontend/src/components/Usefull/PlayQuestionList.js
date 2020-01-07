import React, { Component } from 'react'
import { Card, Menu, Breadcrumb, Button,Typography,Row,Col,Form } from 'antd';
import { withRouter} from 'react-router-dom'
import Axios from 'axios';
import style from './PlayQuestionList.module.css'

export class PlayQuestionList extends Component {

  state={
    questionNumber:0,
    text:''
  }
    handleIDForPlay = () =>{
        console.log(this.props.QueList)
        Axios.get(`/playQuestion/${this.props.QueList.id}`,)
        .then(result=>{
            console.log("result.data is ",result.data.question)
            this.props.history.push('/play',{question:result.data.question});
        }).catch(err=>{
            console.error(err)
        })
    }

    onChange = e => {
      console.log(e.target.value);
      this.setState({ text: e.target.value })
      //check number
    }
  
    solvingEquation=(e)=>{
      e.preventDefault()
      let text = this.state.text
      let answer = eval(text)
      console.log(answer)
      console.log("answer is question is",this.props.RenderQuestionList.answer)
      // console.log("Answer at state is :",tryRenderQuestion)
      if(answer==this.props.RenderQuestionList.answer){
        console.log("success now at question number :",this.state.questionNumber)
        this.setState({
          questionNumber:this.state.questionNumber+1,
        })
      }
    }
    render() {
        const { Text } = Typography;
        const { getFieldDecorator } = this.props.form
        return (
          <Row>
            <Col>
            <Row >
            <Col span={12}>
              <Row type="flex" justify="space-around" align="middle" >
                <Col span={10}>
                  <Button block type="primary" shape="round" size={64}
                    className={style.ButtonCh}
                    >
                    {this.props.RenderQuestionList.ch1}
            </Button>
                </Col>
                <Col span={10}>
                  <Button block type="primary" shape="round" size={64}
                    className={style.ButtonCh}>
                    {this.props.RenderQuestionList.ch2}
            </Button>
                </Col>
              </Row>
              <Row type="flex" justify="space-around" align="middle" style ={{paddingTop:"25px"}}>
                <Col span={10}>
                  <Button block type="primary" shape="round" size={64}
                    className={style.ButtonCh}>
                    {this.props.RenderQuestionList.ch3}
            </Button>
                </Col>
                <Col span={10}>
                  <Button block type="primary" shape="round" size={64}
                    className={style.ButtonCh}>
                    {this.props.RenderQuestionList.ch4}
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
                    {this.props.RenderQuestionList.answer}
            </Button>
            </Col>
            </Row>      
                </Row>
                </Col>
                </Row>
        )
    }
}

const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(PlayQuestionList);
export default withRouter(WrappedAdvancedSearchForm)



