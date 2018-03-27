import { createStore } from 'redux'
import rootReducer from '../reducers/index'

/*
* //接收三个参数
 //reducer为function。当dispatch一个action时，此函数接收action来更新state
 //preloadState初始化State
 //enhancer 为function。用来增强store, Redux 定义有applyMiddleware来增强store，后面会
 //单独讲applyMiddleware

 export default function createStore(reducer, preloadedState, enhancer)
* */

export default function configureStore(initialState) {
  const store = createStore(rootReducer,initialState,
      window.devToolsExtension? window.devToolsExtension():undefined
  )
  return store
}
