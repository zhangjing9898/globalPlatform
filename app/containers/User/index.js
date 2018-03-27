import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import Header from "../../components/Header/index";
import UserInfo from "../../components/UserInfo/index";
import OrderList from "./subpage/OrderList";

class User extends React.Component{

  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render(){
    const userInfo= this.props.userInfo;
    return (
      <div>
        <Header title="用户主页" backRouter="/" history={this.props.history} />
        <UserInfo username={userInfo.userName} city={userInfo.cityName}/>
        <OrderList username={userInfo.userName} />
      </div>
    )
  }

  componentDidMount(){
    //如果未登录，跳转到登录页面
    console.log("user"+this);
    if(!this.props.userInfo.userName){
      this.props.history.push('/login');
    }
  }
}

function mapStateToProps(state){
  return {
    userInfo:state.userInfo
  }
}

function mapDispatchToProps(dispatch){
  return {

  }
}

User = connect(
  mapStateToProps,
  mapDispatchToProps
)(User)

export default User
