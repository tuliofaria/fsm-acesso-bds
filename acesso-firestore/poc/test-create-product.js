const admin = require('firebase-admin')

const serviceAccount = require('../firestore.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://acesso-bd.firebaseio.com'
})

const db = admin.firestore()

const cat1 = '2cWRAb1IHNcreNbtz6m8'
const catRef = db.collection('categories').doc(cat1)

const doc = db.collection('products').doc()
doc
  .set({
    product: 'Nome product',
    price: 2000,
    categories: [catRef],
    categories2: [cat1]
  })
  .then( snap => {
    console.log(snap)
  })