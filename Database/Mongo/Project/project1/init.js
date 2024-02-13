const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
    .then(() => {
        console.log("connection successfull");
    })
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}

let allchats = [
    {
    from: "neha",
    to: "sita",
    msg: "hello sita",
    created_at: new Date(),
    },
    {
     from: "rahul",
     to: "sam",
     msg: "good morning",
     created_at: new Date(),
    },
    {
     from: "chinu",
     to: "minu",
     msg: "ok bye!",
     created_at: new Date(),
     },
     {
      from: "ram",
      to: "shyam",
      msg: "you have to complete this before deadline",
      created_at: new Date(),
    },
];

Chat.insertMany(allchats);
