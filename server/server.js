const app = require('express')()
const mysql = require('mysql')

// Create connection
const db = mysql.createConnection({
    host: 'localhost', //'triton.towson.edu',
    user: 'root', //'rcarte14',
    password: '12345', //'Cosc*77fe',
    database: 'Marriott', // 'rcarte14db',
})

// Connect
db.connect(err => {
    if (err) {
        throw err
    }
    console.log('MySql Connected...')
})

// Test
// app.get('/', (req, res) => res.json({ msg: 'Hello' }))

// // Create Db <---- testing pt 2
// app.get('/createdb', (req, res) => {
//     let sql = 'CREATE DATABASE Marriott'
//     db.query(sql, (err, result) => {
//         if (err) throw err
//         console.log(result)
//         res.send('database created')
//     })
// })

app.listen('3306', () => {
    console.log('Server started on Port 3306')
})
