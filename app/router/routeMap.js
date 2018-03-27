import React from 'react'
import createHistory from 'history/createBrowserHistory'
import { connect } from 'react-redux'
import  {
  Router,
  Route
} from 'react-router-dom'

import Home from '../containers/Home'
import City from '../containers/City'
import Search from '../containers/Search'
import NotFound from '../containers/NotFound'
import Detail from '../containers/Detail'
import Login from '../containers/Login'
import User from '../containers/User'

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
          <Route exact path="/" component={Home}></Route>
          <Route path="/city" component={City}></Route>
          <Route path="/login/:router?" component={Login}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/search/:category/:keyword?" component={Search}></Route>
          <Route path="/detail/:id" component={ Detail }></Route>
          {/*<Route path="*" component={ NotFound }></Route>*/}
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
