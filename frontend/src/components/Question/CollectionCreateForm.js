import React, { Component } from 'react'
import style from './CreateQue.module.css'
import { Row, Col, Input, Button, Form, Card,Modal,Tooltip,Icon,Radio } from 'antd';

export class CollectionCreateForm extends Component {

    state = {
        visible: false,
        confirmLoading: false,
      }
    
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
      
      submitFrom = (e) => {
        e.preventDefault();
        console.log(e)
        this.props.form.validateFieldsAndScroll((err, value) => {
          console.log(err, "outcondition")
          console.log(value, "VALUE VALUE")
          if (!err) {
            console.log("incomdition")
          } else {
            console.log("ERROR")
          }
        })
      }

    render() {
        const { visible, onCancel, onCreate, form } = this.props;
        const { getFieldDecorator } = form;
        return (
            <Modal
            visible={visible}
            title="Create a new collection"
            okText="Create"
            onCancel={onCancel}
            onOk={onCreate}
          >
            <Form layout="vertical">
              <Form.Item label="Topic">
                {getFieldDecorator('questionName', {
                  rules: [{ required: true, message: 'Please input topic name!' }],
                })(<Input />)}
              </Form.Item>
              <Form.Item className="collection-create-form_last-form-item">
                {getFieldDecorator('modifier', {
                  initialValue: 'public',
                })(
                  <Radio.Group>
                    <Radio value="public">Public</Radio>
                    <Radio value="private">Private</Radio>
                  </Radio.Group>,
                )}
              </Form.Item>
              <Form.Item type="flex" label="difficulty: ">
          {getFieldDecorator('difficulty')(
            <Radio.Group>
              <Radio.Button value="1">easy</Radio.Button>
              <Radio.Button value="2">normal</Radio.Button>
              <Radio.Button value="3">hard</Radio.Button>
            </Radio.Group>,
          )}
        </Form.Item>
            </Form>
        </Modal>
        )
    }
}
const WrappedAdvancedSearchForm = Form.create({ name: 'form_in_modal' })(CollectionCreateForm);

export default WrappedAdvancedSearchForm
