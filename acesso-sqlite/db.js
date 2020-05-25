const sqlite = require('sqlite3').verbose()

const init = databaseFile => new Promise((resolve, reject) => {
  const db = new sqlite.Database(databaseFile, (err) => {
      if(err){
        reject(err)
      } else {
        resolve(db)
      }
  })
})

const queryWithParams = (db, query, values) => new Promise((resolve, reject) => {
  db.run(query, values, err => {
    if(err){
      reject(err)
    }else{
      resolve()
    }
  })
})
const query = (db, query) => new Promise((resolve, reject) => {
  db.all(query, (err, rows) => {
    if(err){
      reject(err)
    }else{
      resolve(rows)
    }
  })
})

module.exports = {
  init,
  queryWithParams,
  query
}