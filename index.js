// code for random number generation for dice 1
var randomNumber1 = Math.random();
randomNumber1 = Math.floor((6 * randomNumber1) + 1) ;
var diceImage1 = document.querySelector(".img1");
diceImage1.setAttribute("src","images/dice" + randomNumber1 + ".png");


// Code for random number generation of dice 2
var randomNumber2 = Math.random();
randomNumber2 = Math.floor((6 * randomNumber2) + 1) ;
var diceImage2 = document.querySelector(".img2");
diceImage2.setAttribute("src","images/dice" + randomNumber2 + ".png");

// Below code will tell you who has won the game.

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!!";
} 
else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩!!It is a draw!!🚩";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 wins!!🚩";
}