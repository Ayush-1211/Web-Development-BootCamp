function getMilk(money) {
  var numberOfBottles = Math.floor(money / 1.5);
  console.log("You can buy " + numberOfBottles + " bottles of Milk using " + money + "$.");
}

getMilk(15);
