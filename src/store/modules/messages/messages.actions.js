import * as TYPES from './messages.types'

export const GetMessages = limit => ({
    type: TYPES.GET_MESSAGES,
    payload: limit
})

export const SetMessages = messages => ({
    type: TYPES.SET_MESSAGES,
    payload: messages
})

export const FilterMessages = searchText => ({
    type: TYPES.FILTER_MESSAGES,
    payload: searchText
})

export const AllMessagesLoaded = () => ({
    type: TYPES.ALL_MESSAGES_LOADED
})
