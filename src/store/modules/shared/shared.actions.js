import * as TYPES from './shared.types'

export const RequestError = (action, message, exception) => ({
    type: TYPES.REQUEST_ERROR,
    payload: {
        action,
        message,
        exception
    }
})
