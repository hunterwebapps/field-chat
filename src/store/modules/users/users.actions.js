import * as TYPES from './users.types'

export const Login = (loginModel, bag) => ({
    type: TYPES.LOGIN,
    payload: loginModel,
    meta: bag
})

export const Logout = () => ({
    type: TYPES.LOGOUT
})

export const SetUser = user => ({
    type: TYPES.SET_USER,
    payload: user
})
