const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsdb");

const fruitSchema= new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const apple = new Fruit ({
//   name:"Apple",
//   rating: 7,
//   review: "Apples are decent"
// });

// fruit.save();

const banana = new Fruit ({
  name:"Banana",
  rating: 3,
  review: "banana are decent"
});
// const kiwi = new Fruit ({
//   name:"Kivi",
//   rating: 5,
//   review: "Kivi are decent"
// });
// const grapes = new Fruit ({
//   name:"Grapes",
//   rating: 7,
//   review: "Grapes are decent"
// });
// Fruit.insertMany([banana,kiwi,grapes,apple], function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("success bhai success");
//   }
// });
//  Fruit.find(function(err,fruits){
//   if(err){
//     console.log(err);
//   }else
//   {
//     mongoose.connection.close();
//     fruits.forEach(function (fruits){
//     console.log(fruits.name);
//   });
//   }
// });
// Fruit.deleteMany({__id:"62b9d368bc0418bb381b2f3a",__id:"62b9d36a53265960e6f6b138",__id:"62b9d36a53265960e6f6b138",__id:"62b9f172d36d909793133cc7"
// ,__id:"62b9f6ed6c984e6aa74d0021",__id:"62b9f6ed6c984e6aa74d0022",__id:"62b9f6ed6c984e6aa74d0023"},function(err){
//   if(err){
//     console.log(err);
//   }
// });
const peopleSchema= new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});
const People = mongoose.model("People", peopleSchema);
const people = new People({
  name: "Saumya",
  age: 37,
  favouriteFruit: banana
});
people.save();
