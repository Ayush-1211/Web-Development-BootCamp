function bmiCalculator (weight, height) {

    var bmi = weight / (Math.pow(height, 2));

    var interpretation;

    if (bmi < 20) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight."
    }
    else if (bmi < 25) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight."
    }
    else {
        interpretation = "Your BMI is " + bmi + ", so you are overweight."
    }


    return interpretation;
}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);
