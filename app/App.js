import React from 'react'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/index'
import RouteMap from './router/routeMap'


const store = createStore
(reducers,applyMiddleware(thunk),window.devToolsExtension ? window.devToolsExtension() : undefined)

class App extends React.Component{
  render() {
    return (
      <Provider store = {store}>
        <RouteMap/>
      </Provider>
    )
  }
}

export default App
