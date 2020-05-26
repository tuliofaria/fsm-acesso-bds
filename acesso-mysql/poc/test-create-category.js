const mysql = require('mysql2/promise')

const run = async() => {
    try{
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'cat-products'
        })
        
        try{
            const [ results, fields ] = await connection.query('insert into categories (category) values (?)', ['Cat test'])
            console.log(results, fields)
        }catch(err){
            console.log(err)
        }
    }catch(err){
        console.log(err)
    }
}
run()
