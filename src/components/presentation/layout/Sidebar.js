import React from 'react'
import { bool, func, object } from 'prop-types'
import { LinkContainer } from 'react-router-bootstrap'

Sidebar.displayName = 'Sidebar'

Sidebar.propTypes = {
    loggedIn: bool.isRequired,
    logout: func.isRequired,
    user: object
}

function Sidebar ({ user, loggedIn, logout }) {
    return (
        <React.Fragment>
            <label>{user.username || 'Anonymous'}</label>
            <ul className="list-group">
                <ul>
                    {loggedIn ?
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
