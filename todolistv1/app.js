const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.use(express.urlencoded({}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

// let items = ["Buy Food","Cook Food", "Eat Food"];
// let tasks=[];

mongoose.connect("mongodb://localhost:27017/todolistDB");

const itemsSchema = {
  name: String
};

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
  name: "Buy Food"
});
const item2 = new Item({
  name: "Cook Food"
});
const item3 = new Item({
  name: "Eat Food"
});
const defaultlist = [item1, item2, item3];




app.get("/", function(req, res) {
  Item.find({}, function(err, foundItems) {
    if (foundItems.length === 0) {
      Item.insertMany(defaultlist, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log("success bhai success");
        }
        res.redirect("/");
      });
    } else {
      res.render('list', {
        listTitle: "Today",
        newListItems: foundItems
      });
    }
  });
});

app.post("/", function(req, res) {
  const item = new Item({
    name:req.body.newitem
  });
  item.save();
  res.redirect("/");
});

app.post("/delete",function(req,res){
  console.log(req.body.checkbox);
});

app.get("/work", function(req, res) {
  res.render('list', {
    listTitle: "workList",
    newListItems: tasks
  });
});


app.listen(3000, function() {
  console.log("server started at 3000");
});
