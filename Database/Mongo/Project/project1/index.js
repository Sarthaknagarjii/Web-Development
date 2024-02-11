const express = require("express")
const app = express();
const mongoose = require("mongoose");

main()
.then(() => {
    console.log("connection succesfull");
})
.catch((err) => 
    console.log(err));

async function main(){
    await mongoose.connect("mongoose://127.0.0.1:27017/Whatspp");
}

app.get("/", (req, res) =>{
    res.send("root is woriking")
});

app.listen(8080, () => {
    console.log ("server is listening onport 8080");
})