import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer, { initialState } from './Reducer'

const composeEnhancer: any = (window as any).REDUX_DEVTOOLS_EXTENSION_COMPOSE ?? compose

const Store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunkMiddleware))
)

export default Store
