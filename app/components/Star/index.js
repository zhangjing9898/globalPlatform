import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Star extends React.Component{

  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render(){
    //获取star的数量，并对5取余 （最多5个star）
    let star = this.props.star || 0
    if(star > 5){
      star = star % 5
    }

    return (
      <div className="star-area">
        <div className="star-detail-area">
          {
            [1,2,3,4,5].map((item,index) =>{
              const lightClass = star >= item ? "light":'';
              return <i key={index} className={"icon-star " +lightClass}></i>
            })
          }
        </div>
        <div className="right">评分良好</div>
      </div>

    )
  }

}

export default Star
