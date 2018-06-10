import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import Person from "./img/person.png"
import {  Icon} from 'antd';
class UserInfo extends React.Component{

  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return (
      <div className="userinfo-container">
        <div className="user-image">
          <img src={Person} className="image"></img>
        </div>
        <div className="user-info">
          <p>
            <span className="username-title">{this.props.username}</span>
          </p>
          <p>
            <Icon type="environment" style={{ color: 'white' }} />
            <span>{this.props.city}</span>
          </p>
        </div>
      </div>
    )
  }
}

export default UserInfo
