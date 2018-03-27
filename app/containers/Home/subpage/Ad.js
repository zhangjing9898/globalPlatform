import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { getAdData } from '../../../fetch/home/home'
class Ad extends React.Component{
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state={
      data: []
    }
  }

  render(){
    let homeAd = this.state.data
    return (
      <div>
        <div id="home-ad">
          <h2>超级特惠</h2>
          <div className="ad-container clear-fix">
            {
              homeAd.map((item,index)=>{
                return (
                  <div key={ index } className="ad-item float-left">
                    <img src={item.img} alt={item.title} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }

  componentDidMount(){
    const result = getAdData()
    // console.log("home ad：",result);
    result.then((res) =>{
      // console.log("homg res- json :",res.json());
      return res.json();
    }).then((json) => {
      console.log(json);
      const data = json
      if(data.length){
        this.setState({
          data:data
        })
      }
    })
  }

}

export default Ad
