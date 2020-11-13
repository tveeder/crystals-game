var winCounter = 0;
var lossCounter = 0;
var targetNumber = Math.floor(Math.random() * 101) + 19;
$("#targetNumber").text(targetNumber);



var Hawks1 = Math.floor(Math.random() * 11) + 1;
var Hawks2 = Math.floor(Math.random() * 11) + 1;
var Hawks3 = Math.floor(Math.random() * 11) + 1;
var Hawks4 = Math.floor(Math.random() * 11) + 1;


$("#winCounter").html(winCounter);
$("#lossCounter").html(lossCounter);

var counter = 0;
$("#curScore").text(counter);

function restartGame() {

    targetNumber = Math.floor(Math.random() * 101) + 19;
    $("#targetNumber").text(targetNumber);
    Hawks1 = Math.floor(Math.random() * 11) + 1;
    Hawks2 = Math.floor(Math.random() * 11) + 1;
    Hawks3 = Math.floor(Math.random() * 11) + 1;
    Hawks4 = Math.floor(Math.random() * 11) + 1;
    counter = 0;
    $("#curScore").text(counter);

}

function win() {

    alert("You win!");
    winCounter++;
    $("#winCounter").text(winCounter);
    restartGame();
}

function lose() {

    alert("You lose!");
    lossCounter++;
    $("#lossCounter").text(lossCounter);
    restartGame();
}

$('#Hawks1').on('click', function() {
    counter = counter + Hawks1;

    $('#curScore').text(counter);

    if (counter == targetNumber) {
        win();
    } else if (counter > targetNumber) {
        lose();
    }
});

$('#Hawks2').on('click', function() {
    counter = counter + Hawks2;

    $('#curScore').text(counter);

    if (counter == targetNumber) {
        win();
    } else if (counter > targetNumber) {
        lose();
    }
});

$('#Hawks3').on('click', function() {
    counter = counter + Hawks3;

    $('#curScore').text(counter);

    if (counter == targetNumber) {
        win();
    } else if (counter > targetNumber) {
        lose();
    }
});

$('#Hawks4').on('click', function() {
    counter = counter + Hawks4;

    $('#curScore').text(counter);

    if (counter == targetNumber) {
        win();
    } else if (counter > targetNumber) {
        lose();
    }
});