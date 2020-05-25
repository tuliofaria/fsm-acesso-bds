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

const removeCategories = async() => {
  const db = await initDB('banco.sqlite3')
  await run(db, `delete from categories where id=?`, [8])
  console.log('Categories created!')
}
removeCategories().catch(err => {
  console.log(err)
})


