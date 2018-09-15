import { all } from 'redux-saga/effects'

import usersWatcher from './modules/users/users.saga'
import messagesWatcher from './modules/messages/messages.saga'
import sharedWatcher from './modules/shared/shared.saga'

export default function* rootSaga () {
    yield all([
        ...usersWatcher,
        ...messagesWatcher,
        ...sharedWatcher
    ])
}
