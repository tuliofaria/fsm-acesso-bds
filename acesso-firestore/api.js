const categories = require('./categories')
const products = require('./products')

const testes = async() => {
  /*await categories.create({
    category: 'Nova categoria organizada'
  })*/
  // await categories.update('qQqZUte6SDrvHWEA07Ry', { category: 'Categoria atualizada' })
  // await categories.remove('ojHWaPH2ZZ0hsOcwGD4o')
  // await categories.remove('60JRmIU3hEyump9o1ZD9')
  const cats2 = await categories.findAll()
  console.log(cats2)
/*
  await products.create({
    product: 'New product',
    price: 997,
    categories: ['BVaedQPyWvzjjTpnJ8Ap']
  })*/
  /*
  await products.update('OoLbH5egKg4zpPnswi5X', {
    product: 'New name',
    categories: ['2cWRAb1IHNcreNbtz6m8']
  })*/
  // await products.remove('8y7VYsHYXCSFgBgXsFyX')
  /*
  const cats = await categories.findAllPaginated({
    pageSize: 1, 
    startAfter: 'Categoria atualizada'
  })
  console.log(cats)*/

  // await products.addImage('2qd3mt3wMjjE3gC9kzci', { description: 'new image', url: 'url'})

  // const prods = await products.findAll()
  // console.log(prods)
  const prods2 = await products.findAllPaginated({ pageSize: 1, startAfter: '' })
  console.log(prods2)

}

testes()

