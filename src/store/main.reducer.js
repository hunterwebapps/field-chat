import { combineReducers } from 'redux'

import usersReducer from './modules/users/users.reducer'
import messagesReducer from './modules/messages/messages.reducer'
import sharedReducer from './modules/shared/shared.reducer'
import { reducer as toastrReducer } from 'react-redux-toastr'

export default combineReducers({
    users: usersReducer,
    messages: messagesReducer,
    shared: sharedReducer,
    toastr: toastrReducer
})

/* * * * * * *
 * Selectors *
 * * * * * * */

// Shared

export const SelectErrorCount = state => state.shared.errors

// Users

export const SelectActiveUser = state => state.users.active

// Messages

export const SelectMessages = state => state.messages.all

export const SelectLastMessage = state => state.messages.all[state.messages.all.length - 1]

export const SelectFilteredMessages = state =>
    state.messages.all.filter(msg =>
        msg.body.includes(state.messages.filter) ||
        msg.sender_username.includes(state.messages.filter))

export const SelectAllMessagesLoaded = state => state.messages.allLoaded

// Router

export const SelectRouterLocation = state => state.router.location
