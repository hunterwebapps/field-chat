import * as TYPES from './users.types'
import { put, call, takeLatest, select } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { Users } from '../../api'
import { SetUser } from './users.actions'
import { SelectRouterLocation } from '../../main.reducer'
import { toastr } from 'react-redux-toastr'

export default [
    takeLatest(TYPES.LOGIN, LoginSaga),
    takeLatest(TYPES.LOGOUT, LogoutSaga)
]

function* LoginSaga ({ payload: loginModel, meta: formik }) {
    const res = yield call(Users.Login, loginModel)

    if (res && res.status === 200) {
        yield put(SetUser(res.data))

        const location = yield select(SelectRouterLocation)
        if (location.state && location.state.from)
            return yield put(push(location.state.from))

        yield put(push('/Messages'))
    } else if (res && res.status === 401) {
        toastr.error('Invalid Credentials', 'Wrong username and/or password')
    }

    formik && formik.setSubmitting(false)
}

function* LogoutSaga () {
    yield call(Users.Logout)
    yield put(push('/'))
}
