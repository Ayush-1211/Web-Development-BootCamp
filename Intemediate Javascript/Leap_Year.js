function isLeap(year) {


    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year.";
            }else {
                return "Not leap year.";
            }
        }else {
          return "Leap year.";
        }
    }else {
        return "Not leap year.";
    }


    //     if (year % 4 === 0) {
    //     if (year % 100 === 0) {
    //         if (year % 400 === 0) {
    //             console.log("Leap year.");
    //         }else {
    //             console.log("Not leap year.");
    //         }
    //     }else {
    //       console.log("Leap year.");
    //     }
    // }else {
    //     console.log("Not leap year.");
    // }

}

var leap = isLeap(2000);
console.log(leap);
