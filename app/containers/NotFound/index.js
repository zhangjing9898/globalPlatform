import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as appActions from '../../action/userinfo'

class NotFound extends React.Component{

  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render(){
    return (
      <h2 style={{
        textAlign:'center'
      }}>
        404 页面丢失...
      </h2>
    )
  }

  componentDidMount(){
    this.props.appActionList.menu({
      location:-1
    })
  }
}

function mapStateToProps(state){
  return {
  }
}

function mapDispatchToProps(dispatch){
  return {
    appActionList:bindActionCreators(appActions,dispatch)
  }
}

NotFound=connect(
  mapStateToProps,
  mapDispatchToProps
)(NotFound)

export default NotFound
