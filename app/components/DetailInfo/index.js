import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Button } from 'antd';
import exit from './img/exit.png';

import './style.less'
import Star from "../Star/index";

class DetailInfo extends React.Component{

  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
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
            {/*<h1>{data.title}</h1>*/}
            <div className="star-container">
              {/*<Star star={data.star}/>*/}
              <span className="price">&yen;
                <span className="bigger">{data.price}</span>
              </span>
              <span className="old">门市价: &yen; {data.oldPrice}</span>
              <Button type="primary" className="buy-btn">立即抢购</Button>
            </div>
            <div className="line"></div>
            <div className="buyed-info">
              <div className="exit">
                <img className="img" src={exit} />
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

export default DetailInfo
