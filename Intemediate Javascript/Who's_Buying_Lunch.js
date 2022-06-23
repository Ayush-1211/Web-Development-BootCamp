function whosPaying(names) {

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!";

}

var peopleList = ["Ayush", "Drashti", "Anand", "Harsh", "Smit", "Vishva"];
var who = whosPaying(peopleList);
console.log(who);
