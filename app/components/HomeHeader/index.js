/**
 * Created by litong on 2017/6/7.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import SearchInput from "../SearchInput/index";

class HomeHeader extends React.Component{
    // 构造
      constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
          keyword:''
        }
      }
    render() {
        return (
            <div className="home-header">
                <Link to="/city">
                    <div className="header-left">
                      {this.props.cityName}
                        <i className="icon-angle-down"></i>
                    </div>
                </Link>
                <div className="header-center">
                    <i className="icon-search"></i>
                    <SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
                </div>
                <div className="header-right">
                  <Link to="/login">
                    <i className="icon-user"></i>
                  </Link>
                </div>
            </div>
        )
    }
    enterHandle(value)
    {
      console.log('开始搜索' + value)
      this.props.history.push('/search/all/' + encodeURIComponent(value))
      // this.props.search(keyword)
    }
}

export default HomeHeader
