const express = require("express");
const bodyParser = require("body-parser");

// creating express application
const app = express();
var items = [];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("Public"));
// defining a route
app.get("/",function(req,res){
    // res.sendFile(__dirname+"/index.html");
    var today = new Date();
    var options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    var day = today.toLocaleDateString("en-Us",options);
    res.render("list",{kindOfDay:day,newListItems:items});
});
app.post("/",function(req,res){
   var item = req.body.newItem;
    items.push(item);
    res.redirect("/");

});
app.post("/delete",function(req,res){
    var index= req.body.newItem;
    items.splice(index, 1);
     res.redirect("/");
 });

// starting a server
app.listen(3000,function(){
    console.log("server started on port 3000");
});