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
