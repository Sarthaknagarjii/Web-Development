const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');


app.use(express.urlencoded({ extended : true}));

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts =[
    {
        id: uuidv4(),
        username:"Nagar",
        content: "I love coding"
    },
    {
        id: uuidv4(),
        username:"sarthak",
        content: "hard work is the key to success"
    },
    {
        id: uuidv4(),
        username:"Sarved",
        content: "thankyou"
    },
];

app.get("/posts",(req,res) => {
    res.render("index.ejs",{posts});
});

app.get("/posts/new" , (req,res) =>{
    res.render("new.ejs")
});

app.post("/posts",(req,res) => {
    let{username , content} = req.body;
    let id = uuidv4();
    posts.push({ id , username, content});
    res.redirect("/posts");
    
});

app.get("/posts/:id",(req,res) => {
    let { id } = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs",{post});
    
});

app.patch("/posts/:id", (req ,res) => {
    let { id } = req.params;
    let newContent = req.content; 
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.delete("/posts/:id",(req,res) => {
    let {id } =req.params;
    let post = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

app.listen(port,() => {
    console.log("listening to port : 8080");
});