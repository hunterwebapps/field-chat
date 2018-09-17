import React from 'react'
import { func, object } from 'prop-types'
import { LinkContainer } from 'react-router-bootstrap'

import UserLabel from '../shared/UserLabel'

Sidebar.displayName = 'Sidebar'

Sidebar.propTypes = {
    logout: func.isRequired,
    user: object
}

function Sidebar ({ user, logout }) {
    return (
        <React.Fragment>
            <UserLabel username={user.username} />
            <ul className="list-group">
                <ul>
                    {user.username ?
                        <React.Fragment>
                            <LinkContainer to="/Messages">
                                <li className="list-group-item clickable">
                                    {'Messages'}
                                </li>
                            </LinkContainer>
                            <li onClick={logout} className="list-group-item clickable">
                                {'Logout'}
                            </li>
                        </React.Fragment>
                        :
                        <LinkContainer exact to="/">
                            <li className="list-group-item">
                                {'Login'}
                            </li>
                        </LinkContainer>
                    }
                </ul>
            </ul>
        </React.Fragment>
    )
}

export default Sidebar
