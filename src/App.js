import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Users } from './store/api'
import { Login } from './store/modules/users/users.actions'

import Toastr from 'react-redux-toastr'
import ProtectedRoute from './components/containers/ProtectedRoute'

import LoginPage from './components/Login.page'
import MessagesPage from './components/Messages.page'


const mapDispatchToProps = {
    Login
}

class App extends React.Component {

    componentDidMount () {
        this.props.Login()
    }

    render () {
        return (

            <React.Fragment>
                <Toastr />
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <ProtectedRoute
                        path="/Messages"
                        component={MessagesPage}
                        authCheck={Users.IsLoggedIn}
                        redirectTo="/"
                    />
                    <Route render={props =>
                        <Redirect to={{
                            pathname: '/',
                            state: { from: props.location, error: 404 }
                        }} />
                    } />
                </Switch>
            </React.Fragment>
        )
    }
}

export default connect(null, mapDispatchToProps)(App)
