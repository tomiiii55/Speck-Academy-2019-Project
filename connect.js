const { Pool, Client } = require('pg')

const pool = new Pool({
    user: 'tomislavko',
    host: '138.68.87.73' ,
    database: 'db_tomislavko',
    password: '~4q7xyR+',
    port: 5432,
  })
  
  pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
  })
  
  const client = new Client({
    user: 'tomislavko',
    host: '138.68.87.73',
    database: 'db_tomislavko',
    password: '~4q7xyR+',
    port: 5432,
  })
  client.connect()
  
  client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
  })