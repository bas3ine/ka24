import React from 'react';
import { Layout } from 'antd'
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login.js'
import Signup from './pages/Signup.js'
import Create from './pages/Create.js'
import Play from './pages/Play.js'
import SelectionQuestion from './pages/SelectionQuestion'

class App extends React.Component {

  state = {
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
  }

  handleCategoriesId = (id) => {
    console.log(id)
    this.setState({
      selectQuestionLevel: id
    })
  }
  render() {
    console.log(this.state.selec)
    const { Header, Content } = Layout;
    return (

      <Layout>
        <Header></Header>
        <Content>
          <Switch>
            {/* {localStorage.getItem("ACCESS_TOKEN") ?
          <Route exact path="/home" component={Home} />: null} */}
            <Route exact path="/home" component={Home} />

            {localStorage.getItem("ACCESS_TOKEN") ?
              <Route exact path="/login" component={Login} /> : null}
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/play" component={Play} />
            <Route exact path="/select" component={() =>
              <SelectionQuestion/>} 
              />
            <Redirect to='/' />
          </Switch>
        </Content>
      </Layout>
    );
  }
}

export default App;
