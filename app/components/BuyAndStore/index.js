import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Button } from 'antd';

class BuyAndStore extends React.Component{

  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render(){
    return (
      <div >
        {/*<div className="item-container float-left">*/}
          {/*{*/}
            {/*//是否已经收藏了*/}
            {/*this.props.isStore?*/}
            {/*<button className="selected" onClick={this.storeClickHandle.bind(this)}>已收藏</button>*/}
            {/*:<button onClick={this.storeClickHandle.bind(this)}>收藏</button>*/}
          {/*}*/}
        {/*</div>*/}
          {
            //是否购买
            this.props.isBuy?
              <Button  type="primary"  className="buy-had-btn" disabled >已购买</Button>
              :
              <Button type="primary" className="buy-btn" onClick={this.buyClickHandle.bind(this)}>立即抢购</Button>
          }

      </div>
    )
  }

  buyClickHandle(){
    this.props.buyHandle();
  }
  // storeClickHandle(){
  //   this.props.storeHandle();
  // }
}

export default BuyAndStore
