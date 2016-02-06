import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import flows from './modules/flows'

export default combineReducers({
  counter,
  flows,
  router
})
