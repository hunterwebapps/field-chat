import React from 'react'
import Layout from './containers/Layout';
import Login from './containers/Login';

LoginPage.displayName = 'Login Page'

function LoginPage () {
    return (
        <Layout>
            <Login />
        </Layout>
    )
}

export default LoginPage
