import { createAction, handleActions } from 'redux-actions'
import rest from '../../utils/flows_rest'
import dispatch from 'redux'

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_FLOW = 'ADD_FLOW'
export const ARCHIVE_FLOW = 'ARCHIVE_FLOW'
export const FETCH_FLOWS = 'FETCH_FLOWS'

// ------------------------------------
// Actions
// ------------------------------------
export const addFlow = createAction(ADD_FLOW, (value = []) => value)
export const archiveFlow = createAction(ARCHIVE_FLOW, (value = []) => value)
export const fetchFlows = createAction(FETCH_FLOWS, (value = []) => value)

export const actions = {
  addFlow,
  archiveFlow,
  fetchFlows
}

let nextFlowId = 1

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [ADD_FLOW]: (state = [], { payload }) => {
    var this_id = nextFlowId++
    return state.concat([
      {
        type: ADD_FLOW,
        key: this_id,
        id: this_id,
        text: payload,
        created: new Date(),
        archived: false
      }
    ])
  },
  [ARCHIVE_FLOW]: (state = [], { payload }) => {
    return state.map(todo => {
      if (todo.id !== payload.id) {
        return todo
      } else {
        Object.assign({}, todo, { archived: !todo.archived })
      }
    })
  },
  [FETCH_FLOWS]: (state = [], { payload }) => {

    var gottenFlows = dispatch(rest.actions.flows())
    return state.map(flows => {
      var flows = []

      return flows
    })
  }

}, [])
