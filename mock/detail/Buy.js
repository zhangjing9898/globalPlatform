import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as storeActionsFromFile from '../../../action/store'

import BuyAndStore from '../../../components/BuyAndStore'

class Buy extends React.Component{

  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      isStore:false,
      isBuy:false
    }
  }

  render(){
    return (
      <div>
         <BuyAndStore isStore = {this.state.isStore}
                        isBuy={this.state.isBuy}
                        buyHandle = {this.buyHandle.bind(this)}
                        storeHandle = {this.storeHandle.bind(this)} />
      </div>
    )
  }

  componentDidMount(){
    //验证当前商户是否被收藏
    // this.checkStoreState();
  }

  //检验当前商户是否被收藏
  checkStoreState(){
    const id = this.props.id;
    const store = this.props.store;

    // some 即任何一个满足即可
    store.forEach(item=>{
      if(item.id == id){
        //已被收藏
        this.setState({
          isStore:true
        })
        //跳出循环
        return false
      }
    })
  }

  //检查登录状态
  loginCheck(){
    const id = this.props.id;
    const userInfo = this.props.userInfo;

    if(!userInfo.userName){
      //跳转到登录页面的时候，需要传入目标router,以便登录玩了可以自己跳转回来
      this.props.history.push('/login'+encodeURIComponent('/detail/'+id));
      return false;
    }
    return true;
  }

  //购买事件
  buyHandle(){
    //验证登录，未登录则return
    const loginFlag = this.loginCheck();
    if(!loginFlag){
      return;
    }
    //此过程为模拟购买，因此可省去复杂的购买过程
    //修改状态
    this.setState({
      isBuy:!this.state.isBuy
    })
    //跳转到用户主页
    this.props.history.push('/user');
  }

  //收藏事件
  storeHandle(){
    //验证登录
    const loginFlag = this.loginCheck();
    if(!loginFlag){
      alert("未登录！");
      return;
    }
    console.log("collection！！！")
    const id = this.props.id;
    const storeActions = this.props.storeActions;

    if(this.state.isStore){
      //已被收藏，则取消
      storeActions.rm({
        id:id
      })
    }else{
      //未收藏，则添加到收藏中
      storeActions.add({
        id:id
      })
    }
    //修改状态
    this.setState({
      isStore:!this.state.isStore
    })
    this.props.history.push('/user');
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo,
    store: state.store
  }
}

function mapDispatchToProps(dispatch) {
  return {
    storeActions: bindActionCreators(storeActionsFromFile, dispatch)
  }
}
Buy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Buy)

export default Buy
