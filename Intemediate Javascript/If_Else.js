prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if(loveScore > 70){
    alert("Your love score is " + loveScore + "%. You love eachother like Kanye and Kanye.");
} if(loveScore > 30 && loveScore <= 70) {
    alert("Your love score is " + loveScore + "%");
} else {
    alert("Your love score is " + loveScore + "% You go together like oil and water.");
}
