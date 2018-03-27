import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getOrderListData,postComment } from '../../../fetch/user/orderlist'

import './style.less'
import OrderListComponent from "../../../components/OrderListComponent/index";

class OrderList extends React.Component{

  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state={
      data:[]
    }
  }

  render(){
    return (
      <div className="order-list-container">
        <h2>您的订单</h2>
        {
          this.state.data.length?
            <OrderListComponent data={this.state.data} submitComment={this.submitComment.bind(this)}/>
            :<div>{this.state.data.length}</div>
        }
      </div>
    )
  }

  componentDidMount(){
    // console.log("orderlist页面 componentDidMount！");
    //获取订单数据
    const username = this.props.username;
    if(username){
      this.loadOrderList(username);
    }
  }

  //加载订单列表
  loadOrderList(username){
    const result = getOrderListData(username);
    result.then(res=>{
      // console.log("orderlist中res-》then:",res.json());
      return res.json();
    }).then(json=>{
      //获取数据
      // console.log(json);
      this.setState({
        data:json
      })
    }).catch(err=>{
      if(__DEV__){
        console.error('用户主页“订单列表”获取数据报错',err.message);
      }
    })
  }
  //提交评价
  submitComment(id , value, callback) {
    console.log("submitComment1");
    const result = postComment(id, value);
    console.log("submitComment2");
    console.log(result);
    result.then(res => {
      console.log("submitComment3");
      console.log(res);
      return res.json()
    }).then(json => {
      console.log("submitComment4");
      if (json.errno === 0) {
        // 已经评价，修改状态
        callback()
      }
    })
  }
}

export default OrderList;
