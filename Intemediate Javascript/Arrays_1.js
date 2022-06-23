var guestList = ["Ayush", "Drashti", "Anand", "Harsh", "Smit", "Vishva"];

var check = prompt("Please enter your name for the Varification: ");

if(guestList.includes(check)){
    alert("Welcome to the Party.");
} else{
    alert("Sorry your name is not in the Guest List.");
}
