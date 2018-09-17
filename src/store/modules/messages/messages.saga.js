import * as TYPES from './messages.types'
import { takeLatest, call, put, select } from 'redux-saga/effects'
import { Messages } from '../../api'
import { SetMessages, GetMessages, AllMessagesLoaded, LoadingMessages } from './messages.actions'
import { RequestError } from '../shared/shared.actions'
import { SelectLastMessage } from '../../main.reducer'

export default [
    takeLatest(TYPES.GET_MESSAGES, GetMessagesSaga)
]

function* GetMessagesSaga ({ payload: limit }) {
    yield put(LoadingMessages(true))

    const lastDoc = yield select(SelectLastMessage)

    const res = yield call(Messages.LoadMore, lastDoc && lastDoc.doc, limit)

    if (res && !res.empty) {
        const messages = []
        res.docs.forEach(doc => {
            const message = doc.data()
            message.doc = doc
            message.body = message.body
                .replace(/@(?!channel)[\w-_]+/g, str => `<strong class="bg-primary text-white px-1">${ str }</strong>`)
                .replace(/@channel/g, str => `<strong class="bg-warning px-1">${ str }</strong>`)
            messages.push(message)
        })

        if (messages.length < limit)
            yield put(AllMessagesLoaded())

        yield put(SetMessages(messages))
    } else {
        yield put(
            RequestError(
                GetMessages(limit),
                'Could Not Retrieve Messages, Retrying...',
                new Error(res.message)
            )
        )
    }

    yield put(LoadingMessages(false))
}
