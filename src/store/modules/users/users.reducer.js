import * as TYPES from './users.types'

const initialState = {
    active: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.SET_USER:
            state = {
                ...state,
                active: payload
            }
            return state
        case TYPES.LOGOUT:
            state = {
                ...state,
                active: {}
            }
            return state
        default:
            return state
    }
}
