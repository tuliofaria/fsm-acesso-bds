const db = require('./db')
const categories = require('./categories')(db)
const products = require('./products')(db)

const test = async() => {
    // await categories.create(['New category from api'])
    // await categories.remove(4)
    // await categories.update(3, ['Update from API'])
    // const cats = await categories.findAll()
    // console.log(cats)
    // await products.addImage(3, ['img test', 'url'])
    // const prods = await products.findAllByCategory(3)
    await products.updateCategories(3, [6])
    // const prods = await products.findAllPaginated()
    // console.log(prods)

    /*for(let i=0; i<1000; i++){
        products.findAllPaginated().then(prods => console.log(prods))
    }*/
    
}
test()