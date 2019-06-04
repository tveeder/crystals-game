
//  with JQuery


$(document).ready(function () {

    //////////
    alert("this is connected to javascript");

    $("#randomscore").on("click", function () {
        var randNumber = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
        $("#randomscore").html(randNumber);
    });

    ////////
    $("#tablecontainer").on("click", function () {


        // console.log(randNumber);

        // ////////    

        // $("#totalscore").html(randNumber);

        // // $("#scoreLabel").html("Total: " + randNumber);

    });

    $(".crystal-image").on("click", function () {

        // We'll then increment the counter each time by the randomly selected number.
        // If the number is 11, then users can win. (11 + 11 + 11 + 11 + 11 = 55)
        // If the number is 10, then there is no way for the user to win. (10 + 10 + 10 + 10 + 10 = 60)
        counter += increment;

        alert("New score: " + counter);


        if (counter === targetNumber) {
            alert("You win!");
        }

        else if (counter >= targetNumber) {
            alert("You lose!!");
        }
    });


});

