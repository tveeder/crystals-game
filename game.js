// This program is the crystal click game.  

var counter = 0;
var targetNumber = 0;
var scorewin = 0;
var scoreloss = 0;


var numberOptions = [];


function newGame() {
    var randNumber = Math.floor(Math.random() * (120 - 1 + 1)) + 1;
    $("#randomscore").html(randNumber);
    targetNumber = randNumber;

    $("#targetnum").text(targetNumber);


    counter = 0;
    //console.log(counter)
    // alert("isthisgettingcalled")

    $("totalscore").html("1");
    numberOptions; //resets the array

    var num = 0;
    for (var i = 0; i <= 4; i++) {

        num = Math.floor((Math.random() * 100) + 1);
        numberOptions.push(num);
        console.log(numberOptions);
    }
    return numberOptions;
}
newGame();

// this loads the images
for (var i = 0; i <= 4; i++) {

    var theImage = $("<img>");

    theImage.addClass("crystal-image");

    theImage.attr("src", "./assets/crystals/images.jpg");

    // theImage.attr("data-crystalvalue", Math.floor((Math.random() * 100) + 1));
    theImage.attr("data-crystalvalue", numberOptions[i]);

    $("#box" + i).append(theImage);
}

// action which happens when you click a crystal
$(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    //console.log(crystalValue);

    counter += crystalValue;

    alert("New score: " + counter);

    $("#totalscore").html(counter);
    console.log(counter);



    if (counter === targetNumber) {
        alert("You win!");
        scorewin++;
        $("#scorewin").text(scorewin);
        newGame();
    } else if (counter >= targetNumber) {
        alert("You lose!!");
        scoreloss++;
        $("#scoreloss").text(scoreloss);
        newGame();
    }

});