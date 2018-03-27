import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as appActions from '../../action/userinfo'
import SearchHeader from "../../components/SearchHeader/index";
import SearchList from "./subpage/List";



class Search extends React.Component{

  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render(){
    const params = this.props.match.params;
    return (
      <div>
        <SearchHeader keyword={params.keyword} history={this.props.history} />
        <SearchList keyword={params.keyword} category={params.category} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    userInfo:state.userInfo
  }
}

function mapDispatchToProps(dispatch){
  return {
    appActionList:bindActionCreators(appActions,dispatch)
  }
}

Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default Search
