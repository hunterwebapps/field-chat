﻿import db from '../firebase'
import axios from 'axios'

let authToken = localStorage.getItem('auth-token') || sessionStorage.getItem('auth-token')
let authUsername = localStorage.getItem('username') || sessionStorage.getItem('username')

export const Users = {
    IsLoggedIn: () => (authToken && authUsername) ? true : false,
    Login: async loginModel => {
        if (loginModel) {
            const { username, password, rememberMe } = loginModel
            authToken = window.btoa(username + ':' + password)
            authUsername = username

            const storage = rememberMe ? localStorage : sessionStorage
            storage.setItem('auth-token', authToken)
            storage.setItem('username', authUsername)
        }

        if (authToken && authUsername) {
            const res = await axios.get('/default/FCCodeTestAuth', {
                headers: { Authorization: `Basic ${ authToken }` }
            }).catch(err => err)

            if (res && res.status === 200) {
                axios.defaults.headers.common['Authorization'] = `Basic ${ authToken }`
                return {
                    status: 200,
                    data: { username: authUsername }
                }
            }

            Users.Logout()
            return {
                status: 401,
                message: 'Failed to authenticate user'
            }
        }

        return { status: 204 }
    },
    Logout: async () => {
        authToken = null
        authUsername = null
        sessionStorage.removeItem('auth-token')
        sessionStorage.removeItem('username')
        localStorage.removeItem('auth-token')
        localStorage.removeItem('username')
        delete axios.defaults.headers.common['Authorization']
    }
}

export const Messages = {
    Get: async messageId =>
        await db.collection('messages').doc(messageId).get(),
    LoadMore: async (lastDoc, limit) => {
        let query = db.collection('messages').orderBy('created_at', 'desc')

        if (lastDoc) query = query.startAfter(lastDoc)

        return await query.limit(limit).get().catch(err => err)
    }
}
