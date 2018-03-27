import * as actionTypes  from './actionTypes'

export function initCity(cityName) {
  return {
    type: actionTypes.USER_CURRENTCITY,
    payload: {
      cityName: cityName
    }
  }
}
//更新 用户选择的城市,这里 直接处理过程按照 initCity了 所以就不做改变了
export function updateCity(cityName) {
  return {
    type: actionTypes.USER_CURRENTCITY,
    payload: {
      cityName: cityName
    }
  }
}

export function menu(data){
  return {
    type:actionTypes.MENU_UPDATE,
    data
  }
}

export function update(data) {
  return {
    type: actionTypes.USERINFO_UPDATE,
    data
  }
}
