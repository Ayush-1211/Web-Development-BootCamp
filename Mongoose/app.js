const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 8,
    review: "Pretty solid as a fruit!!"
})

//fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
})

const Person = mongoose.model("Person", personSchema);

const Pineapple = new Fruit({
    name: "Pineapple", 
    rating: 10,
    review: "Great Fruit!"
})

//Pineapple.save(); 

const person = new Person({
    name: "Ayush Prajapati",
    age: 22,
    favouriteFruit: Pineapple
})

person.save(); 

/* const kiwi = new Fruit({
    name: "Kiwi",
    rating: 8,
    review: "The best Fruit!!"
})

const orange = new Fruit({
    name: "Orange",
    rating: 6,
    review: "Too sour for me!"
})

const banana = new Fruit({
    name: "Banana",
    rating: 8,
    review: "Good For Health!"
})

Fruit.insertMany([kiwi, orange, banana], function(err){
    if(err){
        console.log(err);
    }else {
        console.log("Successfully saved all the fruits to fruitsDB");
    }
}); */

Fruit.find(function (err, fruits) {

    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
    }
});

/* Fruit.updateOne({_id: "62cd56e5f068377d8f06a6bc"}, {rating: 9}, function(err){
    if(err){
        console.log(err);
    } else{
        console.log("Successfully updated document.");
    }
}); 

Fruit.deleteOne({_id: "62cd56e5f068377d8f06a6bc"}, function(err){
    if(err){
        console.log(err);
    } else {
        console.log("Document Successfully Deleted!");
    }
}) */

// Person.updateOne({name: "Ayush Prajapati"}, {favouriteFruit: Pineapple}, function(err){
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Successfully updated document!");
//     }
// })

// Fruit.deleteMany({name: "Pineapple"}, function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully deleted!");
//     }
// })

// Person.deleteMany({name: "Drashti Kansare"}, function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully deleted!");
//     }
// })