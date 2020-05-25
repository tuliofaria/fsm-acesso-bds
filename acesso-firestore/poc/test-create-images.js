const admin = require('firebase-admin')

const serviceAccount = require('../firestore.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://acesso-bd.firebaseio.com'
})

const db = admin.firestore()

const productId = 'foVEVRQM4Hq3nK3onirN'
const imageRef = db
  .collection('products')
  .doc(productId)
  .collection('images')
  .doc()

imageRef
  .set({
    description: 'my description',
    url: 'my image url'
  })
  .then(res => {
    console.log(res)
  })

