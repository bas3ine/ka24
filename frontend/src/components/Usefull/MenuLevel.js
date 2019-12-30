import React, { Component } from 'react'
import { Row, Col, Input, Button, Icon, Menu } from 'antd';
export class MenuLevel extends Component {

    render() {
        
        return (
          <Menu onClick={(e) => this.props.handleCategotiesIdFunc(e.key)}>
          {this.renderCategories()}
      </Menu>
      )
    }
}

export default MenuLevel
