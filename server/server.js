const app = require('express')()
const mysql = require('mysql')
const bodyParser = require('body-parser')

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

// _________________________Hotel______________________________________________
// Create hotel
app.post('/addhotel', (req, res) => {
    let hotel = {
        hotelID: req.body.hotelID,
        hotelName: req.body.hotelName,
        hotel_rating: req.body.hotel_rating,
        address: req.body.address,
        state: req.body.state,
        city: req.body.city,
    }
    let sql = 'INSERT INTO Hotel SET ?'
    db.query(sql, hotel, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'Hotel created' })
    })
})

// Read hotel
app.get('/gethotel', (req, res) => {
    let sql = 'SELECT * FROM Hotel'
    db.query(sql, (err, results) => {
        if (err) throw err
        console.log(results)
        res.send({ results })
    })
})

// Update hotel
app.patch('/updatehotel/:hotelID', (req, res) => {
    let newHotel = 'Updated Hotel'

    let hotelUpdate = {
        hotelID: req.body.hotelID,
        hotelName: req.body.hotelName,
        hotel_rating: req.body.hotel_rating,
        address: req.body.address,
        state: req.body.state,
        city: req.body.city,
    }

    let sql = `UPDATE Hotel SET ? WHERE hotelID = ?`
    db.query(sql, [hotelUpdate, req.params.id], (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'Hotel Updated' })
    })
})

// Delete hotel
app.get('/deletehotel/:hotelID', (req, res) => {
    let sql = `DELETE FROM Hotel WHERE hotelID = ?`
    db.query(sql, req.params.id, (err, result) => {
        if (err) throw err
        console.log(result)
        //console.log(result);
        res.status(200).json({ success: 'Hotel Deleted' })
        //res.send('Reservation Deleted...');
    })
})

// // ____________Hotel price_____________________________________________________
// Create hotel price
app.post('/addhotelprice', (req, res) => {
    let hotel = {
        hotelName: req.body.hotelName,
        hotelID: req.body.hotelID,
        price: req.body.price,
    }
    let sql = 'INSERT INTO HotelPrice SET ?'
    db.query(sql, hotel, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'Hotel price created' })
    })
})

// Read hotel price
app.get('/gethotelprice', (req, res) => {
    let sql = 'SELECT * FROM HotelPrice'
    db.query(sql, (err, results) => {
        if (err) throw err
        console.log(results)
        res.send({ results })
    })
})

// Update hotel price
app.patch('/updatehotelprice/:hotelID', (req, res) => {
    let newHotelPrice = 'Updated HotelPrice'
    let hotelPriceUpdate = {
        hotelName: req.body.hotelName,
        hotelID: req.body.hotelID,
        price: req.body.price,
    }
    let sql = `UPDATE HotelPrice SET ? WHERE HotelID = ?`
    db.query(sql, [hotelPriceUpdate, req.body.hotelID], (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'HotelPrice updated' })
    })
})

// Delete hotel price
app.get('/deletehotelprice/:hotelID', (req, res) => {
    let sql = `DELETE FROM HotelPrice WHERE hotelID = ?`
    let query = db.query(sql, req.params.id, (err, result) => {
        if (err) throw err
        console.log(result)
        //res.send('Hotel price deleted...');
        res.status(200).json({ success: 'HotelPrice deleted' })
    })
})

// __________________________Rooms___________________________________________________
// Create rooms
app.post('/addroom', (req, res) => {
    let room = {
        roomNumber: req.body.roomNumber,
        hotelRoom: req.body.hotelRoom,
        maxPersons: req.body.maxPersons,
        price: req.body.price,
    }
    let sql = 'INSERT INTO Room SET ?'
    db.query(sql, room, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'Room created' })
    })
})

// Read rooms
app.get('/getrooms', (req, res) => {
    let sql = 'SELECT * FROM Room'
    db.query(sql, (err, results) => {
        if (err) throw err
        console.log(results)
        res.send({ results })
    })
})
// Update rooms
app.patch('/updaterooms/:roomNumber', (req, res) => {
    //let newRooms = 'Updated Rooms'
    let roomsUpdate = {
        Equip_name: req.body.Equip_name,
        Price: req.body.Price,
    }
    let sql = `UPDATE Rooms SET ? WHERE roomNumber = ?`
    db.query(sql, [req.body, req.body.roomNumber], (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'Rooms Updated' })
    })
})

// Delete rooms
app.get('/deleteroom/:roomNumber', (req, res) => {
    let sql = `DELETE FROM Rooms WHERE roomNumber = ?`
    db.query(sql, req.params.id, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'Room Deleted' })
    })
})
// __________________________Room type_______________________________________________
// Create room type
app.post('/roomtype', (req, res) => {
    let roomType = {
        typeOfRoom: req.body.typeOfRoom,
        roomNumber: req.body.roomNumber,
        price: req.body.price,
        vacancy: req.body.vacancy,
    }
    let sql = 'INSERT INTO RoomType SET ?'
    db.query(sql, roomType, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'RoomType Created' })
    })
})

// Read room type
app.get('/getroomtype', (req, res) => {
    let sql = 'SELECT * FROM RoomType'
    db.query(sql, (err, results) => {
        if (err) throw err
        console.log(results)
        res.send({ results })
    })
})

// Update room type
// I kept :id, change to primary key (typeOfRoom) if not working
app.patch('/updateroomtype/:id', (req, res) => {
    let newRoomType = 'Updated RoomtType'
    let roomTypeUpdate = {
        typeOfRoom: req.body.typeOfRoom,
        roomNumber: req.body.roomNumber,
        price: req.body.price,
        vacancy: req.body.vacancy,
    }
    let sql = `UPDATE RoomType SET ? WHERE typeOfRoom = ?`
    db.query(sql, [req.body, req.body.typeOfRoom], (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'RoomType Updated' })
    })
})
// Delete room type
app.get('/deleteroomtype/:typeOfRoom', (req, res) => {
    let sql = `DELETE FROM manager WHERE typeOfRoom = ?`
    db.query(sql, req.params.id, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'RoomType Deleted' })
    })
})

// ___________________________Fitness center__________________________________________
// Create fitness center
app.post('/fitnesscenter', (req, res) => {
    let fitnessCenter = {
        machineID: req.body.machineID,
        hotelID: req.body.hotelID,
        machineName: req.body.machineName,
    }
    let sql = 'INSERT INTO FitnessCenter SET ?'
    db.query(sql, fitnessCenter, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'FitnessCenter Created' })
    })
})
// Read fitness center
app.get('/getfitnesscenter', (req, res) => {
    let sql = 'SELECT * FROM FitnessCenter'
    db.query(sql, (err, results) => {
        if (err) throw err
        console.log(results)
        res.send({ results })
    })
})
// Update fitness center
app.patch('/updatefitnesscenter/:machineID', (req, res) => {
    let newFitnessCenter = {
        machineID: req.body.machineID,
        hotelID: req.body.hotelID,
        machineName: req.body.machineName,
    }
    let sql = `UPDATE FitnessCenter SET ? WHERE machineID = ?`
    db.query(sql, [req.body, req.body.machineID], (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('FitnessCenter updated...')
    })
})
// Delete fitness center
app.get('/deletefitnesscenter/:machineID', (req, res) => {
    let sql = `DELETE FROM FitnessCenter WHERE machineID = ?`
    db.query(sql, req.params.id, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('FitnessCenter Deleted...')
    })
})
// ___________________________Location__________________________________________________
// Create location
app.post('/addlocation', (req, res) => {
    let location = {
        hotelID: req.body.hotelID,
        state: req.body.state,
        city: req.body.city,
        address: req.body.address,
    }
    let sql = 'INSERT INTO Location SET ?'
    db.query(sql, location, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'Location created' })
    })
})

// Read location
app.get('/getlocation', (req, res) => {
    let sql = 'SELECT * FROM Location'
    let query = db.query(sql, (err, results) => {
        if (err) throw err
        console.log(results)
        res.send({ results })
    })
})

// Update location
app.patch('/updatelocation/:id', (req, res) => {
    let newLocation = 'Updated Location'
    let locationUpdate = {
        hotelID: req.body.hotelID,
        state: req.body.state,
        city: req.body.city,
        address: req.body.address,
    }
    let sql = `UPDATE Location SET ? WHERE hotelID = ?`

    // ****try changing req.body to locationUpdate if not working****
    db.query(sql, [req.body, req.body.hotelID], (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'Location Updated' })
    })
})
// Delete location
app.get('/deletelocation/:hotelID', (req, res) => {
    let sql = `DELETE FROM Location WHERE hotelID = ?`
    db.query(sql, req.params.id, (err, result) => {
        if (err) throw err
        console.log(result)
        res.status(200).json({ success: 'Location Deleted' })
    })
})
// ______________________________Hotel rating____________________________________________
// Create hotel rating
// Read hotel rating
// Update hotel rating
// Delete hotel rating
//_______________________________Reservations____________________________________________
// Create reservations
// Read reservations
// Update reservations
// Delete reservations
// _______________________________Stay duration___________________________________________
// Create stay duration
// Read stay duration
// Update stay duration
// Delete stay duration
// _________________________________Customer______________________________________________
// Create customer
// Read customer
// Update customer
// Delete customer
// _________________________________Room change______________________________________________
// Create room change
// Read room change
// Update room change
// Delete room change
// _________________________________Hotel employee______________________________________________
// Create hotel employee
// Read hotel employee
// Update hotel employee
// Delete hotel employee
// _________________________________Employee account______________________________________________
// Create employee account
// Read employee account
// Update employee account
// Delete employee account
// _________________________________Room service______________________________________________
// Create room service
// Read room service
// Update room service
// Delete room service

app.listen('3306', () => {
    console.log('Server started on Port 3306')
})
