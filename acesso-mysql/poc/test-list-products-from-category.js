const mysql = require('mysql2/promise')

const run = async() => {
    try{
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'cat-products'
        })
        
        try{
            const [ results, fields ] = await connection.query('select * from products where id in (select product_id from categories_products where category_id = ?)', [1])
            console.log('Products', results)
        }catch(err){
            console.log(err)
        }
    }catch(err){
        console.log(err)
    }
}
run()
