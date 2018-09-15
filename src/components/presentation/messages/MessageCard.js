import React from 'react'
import { object } from 'prop-types'
import Card from '../shared/Card'

MessageCard.displayName = 'Message Card'

MessageCard.propTypes = {
    message: object.isRequired
}

function MessageCard ({ message }) {
    return (
        <Card className="message-card">
            <span className="username">
                {message.sender_username}
            </span>
            <span className="time-sent float-right">
                {new Date(message.created_at.seconds * 1000).toLocaleTimeString()}
            </span>
            <div className="message" dangerouslySetInnerHTML={{ __html: message.body }} />
        </Card>
    )
}

export default MessageCard
