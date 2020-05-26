const mysql = require('mysql2/promise')

const run = async() => {
    try{
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'cat-products'
        })
        
        try{
            const [ results, fields ] = await connection.query('select * from categories')
            console.log('Categories', results)
        }catch(err){
            console.log(err)
        }
    }catch(err){
        console.log(err)
    }
}
run()
