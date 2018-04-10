import React from 'react'
import { connect } from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from "../../components/HomeHeader/index";
import '../../reducers/index'
import Category from "../../components/Category/index";
import HomeAd from "../../components/HomeAd/index";
import Ad from "./subpage/Ad";
import List from "./subpage/List";

class Home extends React.Component{

  constructor(props) {
    super(props);
    //这句话是一个起一个性能优化的作用，如果没有这句话，this.shouldComponentUpdate会永远返回一个true，那么这个函数就没意思，没有起到优化的作用
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

  }

  render(){
    return (
      <div>
        <HomeHeader cityName={this.props.userInfo.cityName} history={this.props.history}/>
        <Category/>
        <div style={{height:'15px'}}></div>
        <Ad/>
        <List cityName = {this.props.userInfo.cityName}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

function mapDispatchToProps(dispatch,ownProps) {
  return {

  }
}

Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default Home
