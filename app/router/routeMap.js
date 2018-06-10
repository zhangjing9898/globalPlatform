import React from 'react'
import createHistory from 'history/createBrowserHistory'
import { connect } from 'react-redux'
import  {
  Router,
  Route,
  Redirect
} from 'react-router-dom'

import Home from '../containers/Home'
import City from '../containers/City'
import Search from '../containers/Search'
import NotFound from '../containers/NotFound'
import Detail from '../containers/Detail'
import Login from '../containers/Login'
import User from '../containers/User'
import NoMatch from "../containers/404/404";
import Order from "../containers/Order/index"
import { initCity } from '../action/userinfo'

import localStore from '../utils/localStore'
import * as KeysDefine from '../config/keysDefine'

import '../static/css/common.less'
import '../static/css/font.css'

const history = createHistory()

class RouteMap extends React.Component{
  render() {
    var match = this.props.match
    return (
      <Router history={history}>
        <switch>
          {/*exact是Route下的一条属性，一般而言，react路由会匹配所有匹配到的路由组价，exact能够使得路由的匹配更严格一些。*/}
          <Route exact path="/" component={Home}></Route>
          <Route path="/city" component={City}></Route>
          <Route path="/login/:router?" component={Login}></Route>
          <Route  path="/order" component={Order}></Route>
          <Route  path="/user" component={User}></Route>
          <Route path="/search/:category/:keyword?" component={Search}></Route>
          <Route path="/detail" component={ Detail }></Route>
          <Route component={NoMatch}/>
        </switch>
      </Router>
    )
  }

  componentDidMount() {
    let cityName = localStore.getItem(KeysDefine.USER_CURRENT_CITY)
    if (cityName == null) {
      cityName = '北京'
    }
    this.props.initCity(cityName)
  }
}
function mapStateToProps() {
  return {

  }
}

function mapDispatchToProps(dispatch,ownprops) {
  return {
    initCity: (cityName) => {
      dispatch(initCity(cityName))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteMap)
