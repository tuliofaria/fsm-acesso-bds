const admin = require('firebase-admin')

const serviceAccount = require('../firestore.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://acesso-bd.firebaseio.com'
})

const db = admin.firestore()

const doc = db.collection('categories').doc('uF1N6hCkBz7xov5o3vZ6')
doc
  .delete()
  .then( snap => {
    console.log(snap)
  })