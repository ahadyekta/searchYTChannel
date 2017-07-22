import C from '../constants'
import { combineReducers } from 'redux'

export const channels = (state={}, action) => {
    switch (action.type) {
        case C.CHANGE_SUGGESTIONS:
        // let union =  [...state, ...action.payload];
        // return [ ...new Set( [].concat( ...union ) ) ];
            return Object.assign(state, action.payload);

        case C.RESET_CHANNELS : 
            return {}    
        default :
        return state
    }

}

export const inputs = (state={}, action) => {
    switch (action.type) {
        case C.START_QUERY:
            return action.payload
        default :
        return state
    }

}

export const response = (state=null, action) => {
    switch (action.type) {
        case C.CHANGE_NEXT_PAGE:
            return action.payload
        default :
        return state
    }

}

export const errors = (state=[], action) => {
  switch(action.type) {
    case C.ADD_ERROR :
    	return [
         ...state,
         action.payload
    	]
    case C.CLEAR_ERROR : 
      return state.filter((message, i) => i !== action.payload)
  	default: 
  		return state
  }
}


export default combineReducers({
    channels,
    inputs,
    errors,
    response
});