
//  with JQuery


$(document).ready(function () {

    alert("this is connected to javascript");

    var numberOptions = [10, 11];
    var increment = numberOptions[Math.round(Math.random())];
    var counter = 0;
    var targetNumber = 0;

    $("#randomscore").on("click", function () {
        var randNumber = Math.floor(Math.random() * (120 - 1 + 1)) + 1;
        $("#randomscore").html(randNumber);
        targetNumber = randNumber;
        $("#totalscore").html(randNumber);

        //   return targetNumber;

    });


    var numberOptions = [10, 5, 3, 7];

    for (var i = 0; i < numberOptions.length; i++) {

        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "./crystals/images.jpg");
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
        $("#crystals").append(imageCrystal);
        console.log(imageCrystal);
    }

    $(".crystal-image").on("click", function () {

        var crystalValue = ($(this).attr("data-crystalvalue"));
        alert("its working")
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;



        alert("New score: " + counter);

        if (counter === targetNumber) {
            alert("You win!");
        }

        else if (counter >= targetNumber) {
            alert("You lose!!");
        }

    });

    $("#box1").on("click", function () {

        targetNumber = 30;   // just going to give it a value
        counter += increment;

        $("#totalscore").html(counter);
        alert("New score: " + counter);

        // updateScore(counter);
        // scoreCheck(counter, targetNumber);


    });





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
            console.log(counter)
        }





    }

});
