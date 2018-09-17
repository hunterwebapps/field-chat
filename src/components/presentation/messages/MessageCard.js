import React from 'react'
import { object } from 'prop-types'
import Card from '../shared/Card'

MessageCard.displayName = 'Message Card'

MessageCard.propTypes = {
    message: object.isRequired
}

function MessageCard ({ message }) {
    const timeString = new Date(message.created_at.seconds * 1000).toLocaleTimeString()
    return (
        <Card className="message-card mb-3">
            <span className="username">
                {message.sender_username}
            </span>
            <span className="time-sent float-right">
                {timeString}
            </span>
            <div className="message" dangerouslySetInnerHTML={{ __html: message.body }} />
        </Card>
    )
}

export default MessageCard
