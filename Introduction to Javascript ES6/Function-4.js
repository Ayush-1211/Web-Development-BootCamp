function getMilk(money) {
  var numberOfBottles = Math.floor(money / 1.5);
  console.log("You can buy " + numberOfBottles + " bottles of Milk using " + money + "$.");
  return money % 1.5;
}

var change = getMilk(15);
console.log("Your change is: " + change);
