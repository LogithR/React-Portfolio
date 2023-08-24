const express = require('express');
const mysql = require('mysql');
const cors=require('cors');

const app =express()
app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'Logith@44',
    database:'react'
})

app.get('/',(re,res) => {
return res.json("From Backend side");
})

app.get('/users',(req,res)=> {
    const sql ="SELECT * FROM users";
    db.query(sql,(err,data)=> {
        if(err) return res.json(err);
    })
})

app.listen(8081,()=>{
    console.log("listening");
})