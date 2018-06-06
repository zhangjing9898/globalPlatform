import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Tabs,Form, Icon, Input, Button, Checkbox,InputNumber} from 'antd';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

function callback(key) {
  console.log(key);
}

import './style.less'

class LoginComponent extends React.Component{

  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      phone:''
    }
  }
  callback=(key)=>{
  console.log(key);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render(){
    return (
      <div id="login-container" onChange={callback}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="账号密码登录" key="1">
            <Form  className="login-form">
              <FormItem>
                <Input prefix={<Icon type="user" style={{ color: 'rgb(233, 32, 61)' }} />} placeholder="请输入您的账号" />

              </FormItem>
              <FormItem>
                <Input prefix={<Icon type="lock" style={{ color: 'rgb(233, 32, 61)' }} />} type="password" placeholder="请输入您的密码" />
              </FormItem>
              <FormItem>
                <Checkbox>记住密码</Checkbox>
                <a className="login-form-forgot" href="">忘记密码?</a>
              </FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form>
          </TabPane>
          <TabPane tab="手机验证登录" key="2">
            <Form  className="login-form">
              <FormItem>
                <Input prefix={<Icon type="phone" style={{ color: 'rgb(233, 32, 61)' }} />} placeholder="请输入您的手机号" />

              </FormItem>
              <FormItem>
                {/*<Input id="code-input" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />*/}
                <Input
                  prefix={<Icon type="mail" style={{ color: 'rgb(233, 32, 61)' }} />}
                  type="text"
                  style={{ width: '70%', marginRight: '3%',float:"left" }}
                  placeholder="请输入验证码"
                />
                <Button type="primary" className="code-btn" >
                  发送验证码
                </Button>
              </FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form>
          </TabPane>
        </Tabs>
      </div>

    )
  }

  changeHandle(e){
    this.setState({
      phone:e.target.value
    })
  }
  clickHandle(){
    const userName = this.state.phone;
    const loginHandle = this.props.loginHandle;
    loginHandle(userName);
  }
}

export default LoginComponent
