import React from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import Header from "../../components/Header/index";
import * as userInfoActions from '../../action/actionTypes'
import OrderList from "../Order/subpage/OrderList";

class Order extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
      const userInfo= this.props.userInfo;
      console.log(this.props);
        return (
            <div>
              <Header title="我的订单" backRouter="/" history={this.props.history} />
              <OrderList username={userInfo.userName} />
            </div>
        )
    }

    componentDidMount(){

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

Order=connect(mapStateToProps,mapDispatchToProps)(Order)

export default Order
