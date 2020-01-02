import React, { Component } from 'react'
import style from './CreateQue.module.css'
import { Row, Col, Input, Button, Form, Card,Modal,Tooltip,Icon,Radio } from 'antd';

export class ModalCreate extends Component {

    state = {
        visible: false,
        confirmLoading: false,
      };
    
      showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = () => {
        this.setState({
          confirmLoading: true,
        });
        setTimeout(() => {
          this.setState({
            visible: false,
            confirmLoading: false,
          });
        }, 2000);
      };
    
      handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
          visible: false,
        });
      };

      onChange = e => {
        console.log(e.target.value);
        // this.setState({ text: e.target.value })
        //check number
      }
      
    render() {
        const { getFieldDecorator } = this.props.form
 
        return (
            <Row>
            <Button block type="primary" shape="round"
            className={style.ButtonCh}
            onClick={this.showModal}>
            Done
    </Button>
    <Modal
          title="Create Question "
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>
          <Form onChange={this.onChange} >
                  <Form.Item type="flex" label="Topic Name:">
                    {getFieldDecorator("field", {
                      rules: [
                        {
                          required: true,
                          message: 'Please Input Topic Name!',
                        }
                      ]
                    })(<input />)}
                  </Form.Item>
                  <Form.Item type="flex" label="difficulty">
          {getFieldDecorator('radio-button')(
            <Radio.Group>
              <Radio.Button value="easy">easy</Radio.Button>
              <Radio.Button value="normal">normal</Radio.Button>
              <Radio.Button value="hard">hard</Radio.Button>
            </Radio.Group>,
          )}
        </Form.Item>
                </Form>
          </p>
        </Modal>
    </Row>
        )
    }
}
const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(ModalCreate);

export default WrappedAdvancedSearchForm
