import React from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import LoginForm from '../presentation/login/Login.form'
import { Login as LoginAction } from '../../store/modules/users/users.actions'

const mapDispatchToProps = {
    LoginAction
}

class Login extends React.Component {
    state = {
        registering: false
    }

    static displayName = 'Login Page'

    static propTypes = {
        LoginAction: func.isRequired
    }

    render () {
        const {
            LoginAction
        } = this.props

        const {
            registering
        } = this.state

        return (
            <React.Fragment>
                {registering ?
                    {/* TODO: Add Register form here. Manage visibility of login or register with local state. */ }
                    :
                    <LoginForm login={LoginAction} />
                }
            </React.Fragment>
        )
    }
}

export default connect(null, mapDispatchToProps)(Login)
