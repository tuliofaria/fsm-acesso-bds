const sqlite = require('sqlite3').verbose()

const initDB = databaseFile => new Promise((resolve, reject) => {
  const db = new sqlite.Database(databaseFile, (err) => {
      if(err){
        reject(err)
      } else {
        resolve(db)
      }
  })
})
const run = (db, query, values) => new Promise((resolve, reject) => {
  db.run(query, values, err => {
    if(err){
      reject(err)
    }else{
      resolve()
    }
  })
})

const createCategories = async() => {
  const db = await initDB('banco.sqlite3')
  await run(db, `insert into categories (id, category) values (?, ?)`, [8, 'nova cat'])
  console.log('Categories created!')
}
createCategories().catch(err => {
  console.log(err)
})


