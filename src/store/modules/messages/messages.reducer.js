import * as TYPES from './messages.types'

const initialState = {
    all: [],
    filter: '',
    loading: true,
    allLoaded: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.SET_MESSAGES:
            state = {
                ...state,
                all: state.all.concat(payload)
            }
            return state
        case TYPES.FILTER_MESSAGES:
            state = {
                ...state,
                filter: payload
            }
            return state
        case TYPES.LOADING_MESSAGES:
            state = {
                ...state,
                loading: payload
            }
            return state
        case TYPES.ALL_MESSAGES_LOADED:
            state = {
                ...state,
                allLoaded: true
            }
            return state
        default:
            return state
    }
}
