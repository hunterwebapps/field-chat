import * as TYPES from './shared.types'
import { put, select, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { toastr } from 'react-redux-toastr'
import { SelectErrorCount } from '../../main.reducer'

export default [
    takeEvery(TYPES.REQUEST_ERROR, RequestErrorSaga),
    takeEvery('@@router/LOCATION_CHANGE', RedirectErrorSaga)
]

function* RequestErrorSaga ({ payload: { action, message, exception } }) {
    const errorCount = yield select(SelectErrorCount)

    if (errorCount > 10) {
        toastr.error('Loading Error', 'Could not complete request. Please check your internet and try refreshing.')
        throw new Error(`Message: ${ exception.message }, Action: ${ JSON.stringify(action) }`)
    }

    toastr.error(message)

    yield delay(5000)

    yield put(action)
}

function RedirectErrorSaga ({ payload: { location } }) {
    const { state } = location
    if (state && state.error === 403)
        toastr.warning('Unauthorized', 'Please Login!')
    if (state && state.error === 404)
        toastr.info('Not Found', 'We can\'t find that page!')
}
