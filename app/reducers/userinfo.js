import * as actionTypes from '../action/actionTypes'

const initialState = {
  page: 0,
  likeList: []
}

export default function userInfo(state = initialState,action) {
  switch(action.type) {
    case actionTypes.USER_CURRENTCITY:
      return {
        ...state,
        cityName: action.payload.cityName,
        userName: '小明'
      }
    case actionTypes.SAVE_HOMEAD:
      return {
        ...state,
        homeAd: action.payload.homeAd
      }
    case  actionTypes.SAVE_LIKELIST:
      return {
        ...state,
        page: state.page + 1,
        likeList: state.likeList.concat(action.payload.likeList)
      }
    case actionTypes.SET_ISLOADINGLIKELIST_FLAG:
      return {
        ...state,
        isLoading: action.payload.isLoading
      }
    default:
      return state
  }
}
