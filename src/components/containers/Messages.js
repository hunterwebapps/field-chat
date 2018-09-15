import React from 'react'
import { connect } from 'react-redux'
import { GetMessages, FilterMessages } from '../../store/modules/messages/messages.actions'
import { SelectFilteredMessages, SelectAllMessagesLoaded } from '../../store/main.reducer'
import throttle from 'lodash/throttle'

import MessageCard from '../presentation/messages/MessageCard'
import FilterBox from '../presentation/shared/FilterBox'

const mapStateToProps = state => ({
    messages: SelectFilteredMessages(state),
    allLoaded: SelectAllMessagesLoaded(state)
})

const mapDispatchToProps = {
    GetMessages,
    FilterMessages
}

class Messages extends React.Component {

    componentDidMount () {
        this.props.GetMessages()
        window.addEventListener('scroll', this.loadInfinitely)
    }

    loadInfinitely = throttle(e => {
        const { innerHeight, document: { documentElement } } = window
        if (innerHeight + documentElement.scrollTop > documentElement.offsetHeight - 200) {
            if (this.props.allLoaded)
                return window.removeEventListener('scroll', this.loadInfinitely)

            this.props.GetMessages(8)
        }
    }, 500)

    componentWillUnmount () {
        window.removeEventListener('scroll', this.loadInfinitely)
    }

    render () {
        const {
            messages,
            FilterMessages,
            allLoaded
        } = this.props

        return (
            <React.Fragment>
                <div className="w-25 mb-3">
                    <FilterBox filterChanged={FilterMessages} />
                </div>
                {messages.map(msg =>
                    <div key={msg.id} className="row col-12">
                        <div className=" w-50 mb-3">
                            <MessageCard message={msg} />
                        </div>
                    </div>
                )}
                {!allLoaded && <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)
