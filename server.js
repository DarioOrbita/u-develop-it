const express = require('express');
const { ConsoleWriter } = require('istanbul-lib-report');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Xlv7qy8922!',
        database: 'election'
    },
    console.log('Connected to the election database')
);

//get all candidates
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     //console.log(rows);
// });

//get a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, rows) => {
//     if (err) {
//         console.log(err);
//     }
//     //console.log(rows);
// });

//delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

//create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//     VALUES (?,?,?,?)`;

// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

//default catch-all for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});