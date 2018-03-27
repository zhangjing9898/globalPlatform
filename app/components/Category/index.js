import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import { Link } from 'react-router-dom'

import './style.less'

class Category extends React.Component{

  //构造
  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    //初始状态
    this.state={
      index:0
    };
  }

  render(){
    var options = {
      auto: 3000,
      callback:(index) => {
        this.setState({
          index:index
        })
      }
    }

    return (
      <div id="home-category">
        <ReactSwipe swipeOptions = {options}>
          <div className="carousel-item">
            <ul className="clear-fix">
              <Link to="/search/jingdian"><li className="jingdian float-left" >景点</li></Link>
              <Link to="/search/ktv"><li className="ktv float-left">KTV</li></Link>
              <Link to="/search/gouwu"><li className="gouwu float-left">购物</li></Link>
              <Link to="/search/shenghuofuwu"><li className="shenghuofuwu float-left">生活服务</li></Link>
              <Link to="/search/jianshenyundong"><li className="jianshenyundong float-left">健身运动</li></Link>
              <Link to="/search/meifa"><li className="meifa float-left">美发</li></Link>
              <Link to="/search/qinzi"><li className="qinzi float-left">亲子</li></Link>
              <Link to="/search/xiaochikuaican"><li className="xiaochikuaican float-left">小吃快餐</li></Link>
              <Link to="/search/zizhucan"><li className="zizhucan float-left">自助餐</li></Link>
              <Link to="/search/jiuba"><li className="jiuba float-left">酒吧</li></Link>
            </ul>
          </div>
          <div className="carousel-item">
            <ul className="clear-fix">
              <Link to="/search/meishi">
              <li className="float-left meishi">美食</li>
              </Link>
              <Link to="/search/dianying">
              <li className="float-left dianying">电影</li>
              </Link>
              <Link to="/search/jiudian">
              <li className="float-left jiudian">酒店</li>
              </Link>
              <Link to="/search/xiuxianyule">
              <li className="float-left xuixianyule">休闲娱乐</li>
              </Link>
              <Link to="/search/waimai">
              <li className="float-left waimai">外卖</li>
              </Link>
              <Link to="/search/huoguo">
              <li className="float-left huoguo">火锅</li>
              </Link>
              <Link to="/search/liren">
              <li className="float-left liren">丽人</li>
              </Link>
              <Link to="/search/dujiachuxing">
              <li className="float-left dujiachuxing">度假出行</li>
              </Link>
              <Link to="/search/zuliaoanmo">
              <li className="float-left zuliaoanmo">足疗按摩</li>
              </Link>
              <Link to="/search/zhoubianyou">
              <li className="float-left zhoubianyou">周边游</li>
              </Link>
            </ul>
          </div>
          <div className="carousel-item">
            <ul className="clear-fix">
              <Link to="/search/jingdian"><li className="jingdian float-left" >景点</li></Link>
              <Link to="/search/ktv"><li className="ktv float-left">KTV</li></Link>
              <Link to="/search/gouwu"><li className="gouwu float-left">购物</li></Link>
              <Link to="/search/shenghuofuwu"><li className="shenghuofuwu float-left">生活服务</li></Link>
              <Link to="/search/jianshenyundong"><li className="jianshenyundong float-left">健身运动</li></Link>
              <Link to="/search/meifa"><li className="meifa float-left">美发</li></Link>
              <Link to="/search/qinzi"><li className="qinzi float-left">亲子</li></Link>
              <Link to="/search/xiaochikuaican"><li className="xiaochikuaican float-left">小吃快餐</li></Link>
              <Link to="/search/zizhucan"><li className="zizhucan float-left">自助餐</li></Link>
              <Link to="/search/jiuba"><li className="jiuba float-left">酒吧</li></Link>
            </ul>
          </div>
        </ReactSwipe>
        <div className="index-container">
          <ul>
            <li className={ this.state.index == 0 ? "active" : '' }></li>
            <li className={ this.state.index == 1 ? "active" : '' }></li>
            <li className={ this.state.index == 2 ? "active" : '' }></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Category
