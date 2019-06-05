
//  with JQuery


$(document).ready(function () {

    alert("this is connected to javascript");

    var numberOptions = [10, 11];
    var increment = numberOptions[Math.round(Math.random())];
    var counter = 0;

    $("#randomscore").on("click", function () {
        var randNumber = Math.floor(Math.random() * (120 - 1 + 1)) + 1;
        $("#randomscore").html(randNumber);
        var targetNumber = randNumber;
        $("#totalscore").html(randNumber);
        //   return targetNumber;

    });


    $("#box1").on("click", function () {

        var targetNumber = 30;   // just going to give it a value
        counter += increment;

        alert("New score: " + counter);

        updateScore(counter);
        scoreCheck(counter, targetNumber);


    });

    var counter = 0;
    var numberOptions = [10, 11];
    var increment = numberOptions[Math.round(Math.random())];

    $("#box2").on("click", function () {
        counter += increment;
        alert("New score: " + counter);


    });

    var counter = 0;
    var numberOptions = [10, 11];
    var increment = numberOptions[Math.round(Math.random())];

    $("#box3").on("click", function () {
        counter += increment;
        alert("New score: " + counter);


    });

    var counter = 0;
    var numberOptions = [10, 11];
    var increment = numberOptions[Math.round(Math.random())];

    $("#box4").on("click", function () {
        counter += increment;
        alert("New score: " + counter);


    })

    function resetCounts() {

        var targetNumber = 0;
        var counter = 0;
        var randNumber = Math.floor(Math.random() * (120 - 1 + 1)) + 1;
        $("#randomscore").html(randNumber);
        var targetNumber = randNumber;
    }

    function scoreCheck(counter, targetNumber) {

        if (counter > targetNumber) {
            alert("You win!");
            console.log(targetNumber)
        }
        else if (counter < targetNumber) {
            alert("You lose!!");
        }

        function updateScore(counter) {
            $("#totalscore").html(counter);

        }

    }

});
