import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class BuyAndStore extends React.Component{

  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render(){
    return (
      <div className="buy-store-container clear-fix">
        <div className="item-container float-left">
          {
            //是否已经收藏了
            this.props.isStore?
            <button className="selected" onClick={this.storeClickHandle.bind(this)}>已收藏</button>
            :<button onClick={this.storeClickHandle.bind(this)}>收藏</button>
          }
        </div>
        <div className="item-container float-right">
          {
            //是否购买
            this.props.isBuy?
              <button className="buyed" onClick={this.buyClickHandle.bind(this)}>已购买</button>
              :
              <button onClick={this.buyClickHandle.bind(this)}>购买</button>
          }

        </div>
      </div>
    )
  }

  buyClickHandle(){
    this.props.buyHandle();
  }
  storeClickHandle(){
    this.props.storeHandle();
  }
}

export default BuyAndStore
