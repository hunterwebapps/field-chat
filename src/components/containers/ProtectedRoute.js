import React from 'react'
import { string, func, bool } from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

ProtectedRoute.displayName = 'Protected Route'

ProtectedRoute.propTypes = {
    authCheck: func.isRequired,
    path: string.isRequired,
    component: func.isRequired,
    redirectTo: string,
    exact: bool
}

function ProtectedRoute ({
    authCheck,
    component: Component,
    redirectTo,
    ...rest
}) {
    return (
        <Route
            {...rest}
            render={props => authCheck() ?
                <Component {...props} />
                :
                <Redirect
                    to={{
                        pathname: redirectTo || '/',
                        state: { from: props.location, error: 403 }
                    }}
                />
            }
        />
    )
}

export default ProtectedRoute
