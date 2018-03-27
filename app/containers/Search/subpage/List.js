import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

import { getSearchData } from '../../../fetch/search/search'
import ListData from '../../../../mock/search/list'
import ListComponent from '../../../components/List/index'

import LoadMore from "../../../components/LoadMore/index";

const initialState = {
  data:[],
  hasMore:false,
  isLoadingMore:false,
  page:0
}

class SearchList extends React.Component{

  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = initialState
  }

  render(){
    return (
      <div>
        {
          this.state.data.length ?
            <ListComponent data={this.state.data}/>
            :
            <div>正在加载中...</div>
        }
        {
          this.state.hasMore?
            <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
            :''
        }
      </div>
    )
  }

  componentDidMount(){
    //获取首页数据
    this.loadFirstPageData();
  }

  //获取首页数据
  loadFirstPageData(){
    const cityName = this.props.userInfo.cityName;
    const keyword = this.props.keyword || '';
    const category = this.props.category;
    const result = getSearchData(0,cityName,category,keyword);
    this.resultHandle(result)
  }

  loadMoreData(){
    // 记录状态
    this.setState({
      isLoadingMore: true
    })

    const cityName = this.props.userInfo.cityName
    const page = this.state.page
    const keyword = this.props.keyword || ''
    const category = this.props.category
    const result = getSearchData(page, cityName, category, keyword)
    this.resultHandle(result)

  }

  //处理数据
  resultHandle(result){

    //page ++
    const page = this.state.page;
    this.setState({
      page:page+1
    })

    result.then(res=>{
      if(res.ok){
        return res.json();
      }
      else{
        console.log("当前城市:"+this.props.cityName);
        console.log("当前页码:"+this.state.page);
        console.log("当前关键字:"+this.props.keyword);
        return ListData;
      }
    }).then(json =>{
      const  hasMore = json.hasMore;
      const data = json.data;

      this.setState({
        hasMore:hasMore,
        data:this.state.data.concat(data),
        isLoadingMore: false
      })
    }).catch(err =>{
      console.log(err.message);
    })
  }

  //处理重新搜索
  componentDidUpdate(prevProps,prevState){
    const keyword = this.props.keyword;
    const category = this.props.category;

    //搜索条件完全相等时，忽略它
    if(keyword === prevProps.keyword && category === prevProps.category){
      return;
    }

    //重置state
    this.setState(initialState)

    //重新加载数据
    this.loadFirstPageData()
  }

}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}
SearchList = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchList)

export default SearchList
