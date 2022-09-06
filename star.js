const gameOverId = document.querySelector("#gameOver");
const scoreId = document.querySelector("#score");
const stars = document.querySelector("#stars");

let score = 0;

function moveStars() {
    stars.style.top = Math.random() * 1050 + 'px';
    stars.style.left = Math.random() * 1050 + 'px';
    console.log(stars);
}

setInterval(moveStars, 1000);

function addScore() {
    score = score + 1;
    scoreId.innerText = score;
}
// star click listener
stars.addEventListener("click", addScore);

function gameOver() {
    gameOverId.style.display = "block";
    stars.style.display = "none";
}

setTimeout(gameOver, 10000);



// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setIntervalfunction()

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor(distance % (1000 * 60) / 1000);

// Display the result in the element with id="demo"
document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

// If the count down is finished, write some text
if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
}
1000;
