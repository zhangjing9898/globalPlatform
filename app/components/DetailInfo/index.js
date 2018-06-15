import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Buy from "../../containers/Detail/subpage/Buy";
import { connect } from 'react-redux'
import Exit from './img/exit.png' ;

import './style.less'
import Star from "../Star/index";

class DetailInfo extends React.Component{

  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state={
      buy:false
    }
  }

  //点击购买
  buyHandle(){
    this.setState({
      buy:true
    })
  }

  render(){
    const data = this.props.data;
    return (
    <div>
      <div className="detail-info-container">
        <div className="info-container clear-fix">
          <div className="info-img-container float-left">
            <img src={data.img}/>
          </div>
          <div className="info-content">
            <div className="star-container">
              {/*<Star star={data.star}/>*/}
              <span className="price">&yen;
                <span className="bigger">{data.price}</span>
              </span>
              <span className="old">门市价: &yen; {data.oldPrice}</span>
              <Buy isBuy={this.state.buy}
                   buyHandle = {this.buyHandle.bind(this)}
                  ></Buy>
            </div>
            <div className="line"></div>
            <div className="buyed-info">
              <div className="exit">
                <img className="img" src={Exit} />
                随时退
              </div>
              <div className="right">
                已售1234
              </div>
            </div>
          </div>
        </div>
      </div>
      <Star star={data.star}/>
      <div className="store-detail">
        <p className="title">商家信息</p>
        <div className="line"></div>
        <p className="store-title">{data.title}</p>
        <p className="store-info">{data.subTitle}</p>
      </div>
      <div className="store-detail">
        <p className="title">订购须知</p>
        <div className="line"></div>
          <span className="sub-title">有效期:</span>
          <p className="sub-info">{data.canTime}</p>
          <span className="sub-title">使用时间:</span>
          <p className="sub-info">{data.useTime}</p>
          <span className="sub-title">联系电话:</span>
          <p className="sub-info">{data.telephone}</p>
      </div>
    </div>

    )
  }
}
function mapStateToProps(state) {
  return{
    userInfo:state.userInfo,
    buy:state.buy
  }
}

function mapDispatchToProps(dispatch) {
  return{

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailInfo)
