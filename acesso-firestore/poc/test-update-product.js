const admin = require('firebase-admin')

const serviceAccount = require('../firestore.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://acesso-bd.firebaseio.com'
})

const db = admin.firestore()

const cat1 = 'uF1N6hCkBz7xov5o3vZ6'
const catRef = db.collection('categories').doc(cat1)

const doc = db.collection('products').doc('EKWwzpvSa9WGI06nN4MH')
doc
  .update({
    product: 'Nome product',
    price: 2000,
    categories: admin.firestore.FieldValue.arrayUnion(catRef),
    categories2: admin.firestore.FieldValue.arrayUnion(cat1)
  })
  .then( snap => {
    console.log(snap)
  })