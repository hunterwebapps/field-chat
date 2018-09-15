import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: 'AIzaSyDnAlk9ckIIh7_erx6vAX8n8pRW0QtPg4Y',
    authDomain: 'fccodetest.firebaseapp.com',
    databaseURL: 'https://fccodetest.firebaseio.com',
    projectId: 'fccodetest',
    storageBucket: 'fccodetest.appspot.com',
    messagingSenderId: '703995434264'
}

firebase.initializeApp(config)

const db = firebase.firestore()

db.settings({
    timestampsInSnapshots: true
})

export default db
