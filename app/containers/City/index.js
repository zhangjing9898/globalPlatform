import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header/index'
import CurrentCiy from "../../components/CurrentCity/index";
import CityList from "../../components/CityList/index";

import * as userInfoActions from '../../action/userinfo'

import { USER_CURRENT_CITY } from '../../config/keysDefine'
import LocalStore from '../../utils/localStore'

class City extends React.Component{

  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render(){
    return (
      <div>
        <Header title="选择城市"/>
        <CurrentCiy cityName={this.props.userInfo.cityName}/>
        <CityList changeFn={this.changeCity.bind(this)}/>
      </div>
    )
  }

  changeCity(newCity){
    if(newCity == null){
      return
    }

    const userInfo = this.props.userInfo;
    userInfo.cityName = newCity;
    this.props.userInfoAction.updateCity(newCity)

    //修改localstoreage
    LocalStore.setItem(USER_CURRENT_CITY,newCity);

    //路由跳转
    this.props.history.push('/');
  }
}

/*reduce*/

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

function mapDispatchToProps(dispatch,ownProps) {
  return {
      userInfoAction:bindActionCreators(userInfoActions,dispatch)
  }
}

City = connect(
  mapStateToProps,
  mapDispatchToProps
)(City)

export default City
