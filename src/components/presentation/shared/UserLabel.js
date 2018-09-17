import React from 'react'
import { string } from 'prop-types'

UserLabel.displayName = 'User Label'

UserLabel.propTypes = {
    username: string
}

function UserLabel ({ username }) {
    return <label>{username || 'Guest'}</label>
}

export default UserLabel
