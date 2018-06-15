import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import personImg from "../img/person.png"

import Star from '../../StarOnly/index'

import './style.less'

class CommentItem extends React.Component{

  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render(){
    const item = this.props.data;
    return (
      <div className="comment-list">
        <img className="person-img" src={personImg} />
        <div>
          <h3>
            {item.username}
          </h3>
          <Star star={item.star} />
          <div className="date">{item.date}</div>
        </div>
        <p>{item.comment}</p>
      </div>
    )
  }
}

export default CommentItem
