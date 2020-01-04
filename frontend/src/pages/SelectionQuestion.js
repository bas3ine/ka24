import React, { Component } from 'react'
import { Row, Col, Input, Button, Icon } from 'antd';
import { Card, Menu, Breadcrumb, Typography } from 'antd';
import List from "../components/Usefull/List"
import BackButton from "../components/Usefull/BackButton"
import MenuLevel from '../components/Usefull/MenuLevel'
import Axios from "../config/axios.setup"

export class SelectionQuestion extends Component {

  state ={
    categories:
    [
      {
        "id": 1,
        "name": "Easy"

      },
      {
        "id": 2,
        "name": "Normal"
      },
      {
        "id": 3,
        "name": "Hard",
      }
    ],
  selectQuestionLevel: null,
    questionList:[]
  }
  componentDidMount() {
    Axios.get("/showquestion")
.then(result =>{
  const questionList = result.data;
  console.log(questionList,"pelaseshow")
  this.setState({ questionList:result.data });
})}

  filterProducts() {
    const id = this.state.selectQuestionLevel;
    console.log("this.props.questionList is", this.state.questionList)
    console.log(id, "id is")
    if (id == null) {
      return []
    } else {
      return this.state.questionList.filter(product => product.difficulty == id)
    }
  }

  renderListQuestion = () => {
    let checklv = this.filterProducts()
    return checklv.map(questionListShow =>
      <Col span={6}>
        <List QueList={questionListShow} />
      </Col>
    )
  }
  handleCategoriesId = (id) => {
    console.log(id,"handleCategoriesId")
    this.setState({
      selectQuestionLevel: id
    })
  }
  renderCategories() {
    return this.state.categories.map(category =>
      <Menu.Item key={category.id}>
        <Icon type="pie-chart" />
        <span>{category.name}</span>
      </Menu.Item>
    )
  }

  render() {
    return (
      <Row style={{ paddingTop: "10px" }}>
        <Col span={2}><BackButton goToPath={'/home'} /></Col>
        <Col span={20}>
          <Row gutter={[16, 16]} style={{ paddingTop: "10px" }}>
            <Menu style={{ borderRadius: "30px" }} mode="horizontal" onClick={(e) => this.handleCategoriesId(e.key)}>
              {this.renderCategories()}
            </Menu>
            {this.renderListQuestion()}
          </Row>
        </Col>
        <Col span={2}>
        {this.state.questionList.map(res=>(
          <Row>{res.id}</Row>
        ))}
  <Button onClick={()=>console.log("before map is" ,this.state.questionList.map((rere=>{console.log(rere.id)})))}></Button>
        </Col>
      </Row>
    )
  }
}

export default SelectionQuestion
