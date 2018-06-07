/**
 * Created by ZJ on 2018/6/7.
 */
import React from "react";
import { Link } from 'react-router-dom'
import "./mineList.css"

class MineList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
          <div>
            <ul className="mui-table-view">
              <li className="mui-table-view-cell">
                <Link to="/order">
                  <img className="about-img" src={require("../img/icon_mine_wallet.png")} />
                  <span className="about-span">我的订单</span>
                </Link>
              </li>
              <li className="mui-table-view-cell">
                <a href="javascript:;">
                  <img className="about-img" src={require("../img/icon_mine_balance.png")} />
                  <span className="about-span">我的余额</span>
                </a>
              </li>
              <li className="mui-table-view-cell">
                <a href="javascript:;">
                  <img className="about-img" src={require("../img/icon_mine_voucher.png")} />
                  <span className="about-span">抵用券</span>
                </a>
              </li>
              <li className="mui-table-view-cell">
                <a href="javascript:;">
                  <img className="about-img" src={require("../img/icon_mine_membercard.png")} />
                  <span className="about-span">会员卡</span>
                </a>
              </li>
            </ul>
            <ul className="mui-table-view">
              <li className="mui-table-view-cell">
                <a href="javascript:;">
                  <img className="about-img" src={require("../img/icon_mine_friends.png")} />
                  <span className="about-span">好友去哪</span>
                </a>
              </li>
              <li className="mui-table-view-cell">
                <a href="javascript:;">
                  <img className="about-img" src={require("../img/icon_mine_comment.png")} />
                  <span className="about-span">我的评价</span>
                </a>
              </li>
              <li className="mui-table-view-cell">
                <a href="javascript:;">
                  <img className="about-img" src={require("../img/icon_mine_collection.png")} />
                  <span className="about-span">我的收藏</span>
                </a>
              </li>
              <li className="mui-table-view-cell">
                <a href="javascript:;">
                  <img className="about-img" src={require("../img/icon_mine_membercenter.png")} />
                  <span className="about-span">会员中心</span>
                </a>
              </li>
              <li className="mui-table-view-cell">
                <a href="javascript:;">
                  <img className="about-img" src={require("../img/icon_mine_member.png")} />
                  <span className="about-span">积分商城</span>
                </a>
              </li>
            </ul>
          </div>

        )
    }
}

export default MineList;
