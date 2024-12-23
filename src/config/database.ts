import mysql from 'mysql2';

// for better we can use below connection var from env file due to less time i m using here
const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'root',
    database:'NodeJs_Task'

});

db.connect((err)=>{
    if(err) throw err;
    console.log('connected to database');

});

export default db;