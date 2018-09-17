import React from 'react'
import { arrayOf, object } from 'prop-types'

import MessageCard from './MessageCard'

MessagesList.displayName = 'Messages List'

MessagesList.propTypes = {
    messages: arrayOf(object).isRequired
}

function MessagesList ({ messages }) {
    return messages.map(msg =>
        <MessageCard key={msg.id} message={msg} />
    )
}

export default MessagesList
