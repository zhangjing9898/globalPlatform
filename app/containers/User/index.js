import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import Header from "../../components/Header/index";
import UserInfo from "../../components/UserInfo/index";
import MineList from "./subpage/MineList"
import OrderList from "../Order/subpage/OrderList";
import "./index.css"
import * as userInfoActions from '../../action/actionTypes'
class User extends React.Component{

  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  exit=()=>{
    window.history.back();
  }

  render(){
    const userInfo= this.props.userInfo;
    return (
      <div>
        <Header title="用户主页" backRouter="/" history={this.props.history} />
        <UserInfo username={userInfo.userName} city={userInfo.cityName}/>
        <MineList />
        <button className="exit-btn" onClick={this.props.exit}>退出</button>
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
    exit:()=>{
      dispatch({type:userInfoActions.USER_EXIT})
      window.history.back();
    }
  }
}

User = connect(
  mapStateToProps,
  mapDispatchToProps
)(User)

export default User
