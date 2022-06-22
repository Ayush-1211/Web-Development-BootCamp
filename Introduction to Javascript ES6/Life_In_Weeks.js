function lifeInWeeks(age) {

    var remainingYears = 90 - age;
    var months = remainingYears * 12;
    var weeks = remainingYears * 52;
    var days = remainingYears * 365;

    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
}

lifeInWeeks(22);
