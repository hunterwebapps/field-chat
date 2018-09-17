import React from 'react'
import { connect } from 'react-redux'
import { SelectActiveUser } from '../../store/main.reducer'
import { Logout } from '../../store/modules/users/users.actions'

import Header from '../presentation/layout/Header'
import Sidebar from '../presentation/layout/Sidebar'

const mapStateToProps = state => ({
    user: SelectActiveUser(state)
})

const mapDispatchToProps = {
    Logout
}

function Layout ({ user, Logout, children }) {
    return (
        <div>
            <header>
                <Header />
            </header>
            <div className="d-flex">
                <nav className="p-3">
                    <Sidebar user={user} logout={Logout} />
                </nav>
                <main className="flex-grow-1 p-5">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
