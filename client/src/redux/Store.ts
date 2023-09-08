import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import Reducer from './Reducer'

const composeEnhancer: any = (window as any).REDUX_DEVTOOLS_EXTENSION_COMPOSE ?? compose

const Store = createStore(
  Reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
)

export default Store
