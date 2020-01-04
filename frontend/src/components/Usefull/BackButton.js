import React, { Component } from 'react'
import { Icon, Button,Row } from 'antd';
import { withRouter } from 'react-router-dom';

export class BackButton extends Component {
    onBackButton = () => {
        this.props.history.push(this.props.goToPath);
    }
    render() {
        return (
            <Row type="flex" justify="center" align="middle">
            <Button type="primary" shape="circle" icon="rollback" size={"large"} onClick={this.onBackButton}
                style={{}}>
            </Button>
            </Row>
        )
    }
}

export default withRouter (BackButton);


