const db = require('./firestore')
const admin = require('firebase-admin')

const findAll = async() => {
  const productsDB = await db.collection('products').get()
  if(productsDB.empty){
    return []
  }
  const products = []
  productsDB.forEach(doc => {
    products.push({
      ...doc.data(),
      id: doc.id
    })
  })
  const products2 = []
  for await(product of products){
    const imgs = []
    const imgsDB = await db
      .collection('products')
      .doc(product.id)
      .collection('images')
      .get()
      
    imgsDB.forEach(img => {
      imgs.push({
        ...img.data(),
        id: img.id
      })
    })
    products2.push({
      ...product,
      imgs
    })
  }
  return products2
}



const findAllPaginated = async({ pageSize = 10, startAfter = '' }) => {
  const productsDB = await db
                              .collection('products')
                              .orderBy('product')
                              .startAfter(startAfter)
                              .limit(pageSize+1)
                              .get()
  if(productsDB.empty){
    return {
      data: [],
      total: 0
    }
  }
  const products = []
  let total = 0
  productsDB.forEach(doc => {
    if(total < pageSize){
      products.push({
        ...doc.data(),
        id: doc.id
      })
    }
    total++
  })

  const products2 = []
  for await(product of products){
    const imgs = []
    const imgsDB = await db
      .collection('products')
      .doc(product.id)
      .collection('images')
      .get()
      
    imgsDB.forEach(img => {
      imgs.push({
        ...img.data(),
        id: img.id
      })
    })
    products2.push({
      ...product,
      imgs
    })
  }

  return {
    data: products2,
    total: products.length,
    hasNext: total > pageSize,
    startAfter: total > pageSize ? products[products.length-1].category : ''
  }
}

const remove = async(id) => {
  const imgs = await db
    .collection('products')
    .doc(id)
    .collection('images')
    .get()

  const exclusoes = []
  imgs.forEach(img => {
    exclusoes.push(db.collection('products').doc(id).collection('images').doc(img.id).delete())
  })
  await Promise.all(exclusoes)

  const doc = db.collection('products').doc(id)
  await doc.delete()
}


const create = async({ categories, ...data }) => {
  const doc = db.collection('products').doc()
  const categoriesRefs = categories.map(cat => db.collection('categories').doc(cat))
  await doc.set({
    ...data,
    categories: categoriesRefs,
    categories2: categories
  })
}

const addImage = async(id, data) => {
  const imageRef = db
    .collection('products')
    .doc(id)
    .collection('images')
    .doc()
  
  await imageRef.set(data)
}

const update = async(id, { categories, ...data }) => {
  const categoriesRefs = categories.map(cat => db.collection('categories').doc(cat))
  const doc = db.collection('products').doc(id)
  await doc.update({
    ...data,
    categories: admin.firestore.FieldValue.arrayUnion(...categoriesRefs),
    categories2: admin.firestore.FieldValue.arrayUnion(...categories)
  })
}


module.exports = {
  findAll,
  findAllPaginated,
  remove,
  create,
  addImage,
  update
}