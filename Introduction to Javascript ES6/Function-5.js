function getMilk(money, costPerBottle) {
  console.log("Buy " + calcBottles(money, costPerBottle) + " bottles of Milk using " + money + "$.");
  return calcChange(money, costPerBottle);
}

function calcBottles(startingMoney, costPerBottle) {
  var numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles;
}

function calcChange(startingMoney, costPerBottle) {
  var change = startingMoney % costPerBottle;
  return change;
}

console.log("Your change is: " + getMilk(2, 1.5));
