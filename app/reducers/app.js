import * as actionTypes from '../action/actionTypes'

export default function app(state = {},action) {
  switch (action.type){
    case actionTypes.GET_DETAIL_INFO:
      return {
        ...state,
        info: action.payload.info
      }
    case actionTypes.GET_COMMENT_LIST:
      console.log(action.payload.comments)
      return {
        ...state,
        comments: action.payload.comments
      }
    default:
      return state
  }
}
