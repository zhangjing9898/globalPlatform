import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActionsFromOtherFile from '../../action/userinfo'
import Header from "../../components/Header/index";
import LoginComponent from "../../components/Login/index";

class Login extends React.Component{

  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = ({
      checking:false
    })
  }

  render(){
    return (
      <div style={{width:'100%',height:'100%'}}>
        <Header title="登录"/>
        {
          this.state.checking?
            <div>等待中...</div>
            :
            <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
        }
      </div>
    )
  }

  componentDidMount(){
    this.doCheck();
  }

  doCheck(){
    const userInfo = this.props.userInfo;
    console.log("userInfo:"+userInfo.userName);
    if(userInfo.userName){
      //already login
      alert("您已登录~")
      this.goUserPage();
    }else{
      // not login
      this.setState({
        checking:false
      })
    }
  }

  //处理登录成功之后的业务
  loginHandle(username){
    //保存用户名
    const actions = this.props.userInfoActions;
    let userInfo = this.props.userInfo;
    userInfo.userName = username;
    actions.update(userInfo);

    //跳转链接
    const params = this.props.match.params;
    console.log(params);
    const router = params.router;
    if(router){
      //跳转到指定页面
      this.props.history.push(router);
    }
    else{
      //跳转到默认页面，用户页面
      this.goUserPage();
    }
  }
  goUserPage(){
    this.props.history.push('/user');
  }
}

function mapStateToProps(state){
  return {
    userInfo : state.userInfo
  }
}

function mapDispatchToProps(dispatch){
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  }
}

Login=connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default Login
