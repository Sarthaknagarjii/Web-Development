const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("ciew engine", "ejs");
app.set("views", path.join(__dirname,"/views"));


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'S11@11r42ed1'
});

let getRandomUser = () => {
    return [
       faker.string.uuid(),
       faker.internet.username(),
       faker.internet.email(),
       faker.internet.password(),    
    ];
 };

 app.get("/",(req,res) =>{
    let q = "select count (*) from user"; 
     try{
         connection.query(q,(err,result) =>{
            if(err) throw err;
            let count = result[0]["count (*)"]; 
             res.render("home.ejs", {count});
        }); 
        } catch (err){
            console.log(err);
            res.send("some error in DB")

        }
});


app.listen(8080, () => {
    console.log("server is listening to port 8080");
})


// Show Route
app.get("/user", (req,res) =>{
    let q = "SELECT * FROM user";

    try{
        connection.query(q,(err,users) =>{
           if(err) throw err;
            res.render("showuser.ejs", {users});
       }); 
       } catch (err){
           console.log(err);
           res.send("some error in DB")
       }
});


// Edit Route
app.get("/user/:id/edit", (req,res) => {
    let{id} = req.params;
    let q =`SELECT * from user where id ="${id}"`;
    
    try{
        connection.query(q,(err,reult) =>{
           if(err) throw err;
            res.render("edit.ejs");
       }); 
       } catch (err){
           console.log(err);
           res.send("some error in DB");
       }
});

//Update Route 
 app.patch("/user/:id", (req,res) => {
    res.send("updated")

 })
