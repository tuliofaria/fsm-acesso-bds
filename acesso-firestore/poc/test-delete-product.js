const admin = require('firebase-admin')

const serviceAccount = require('../firestore.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://acesso-bd.firebaseio.com'
})

const db = admin.firestore()

const productId = 'foVEVRQM4Hq3nK3onirN'

const productRef = db.collection('products').doc(productId)

db
  .collection('products')
  .doc(productId)
  .collection('images')
  .get()
  .then(imgSnapshot => {
    const exclusoes = []
    imgSnapshot.forEach(img => {
      exclusoes.push(db.collection('products').doc(productId).collection('images').doc(img.id).delete())
    })
    return Promise.all(exclusoes)
  })
  .then(() => {
    return productRef.delete()
  })
  .then(() => {
    console.log('everything was deleted')
  })

