import { combineReducers } from 'redux'
import userInfo from './userinfo'
import store from './store'
import app from './app'

export default combineReducers({
  userInfo,
  store
})
