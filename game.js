
//  with JQuery


$(document).ready(function () {

    //////////
    alert("this is connected to javascript");

    $("#randomscore").on("click", function () {
        var randNumber = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
        $("#randomscore").html(randNumber);
    });

    ////////
    // $("#tablecontainer").on("click", function () {

    // });

    $("#box1").on("click", function () {

        $("#randomscore").html(randNumber);
        alert("New score: " + counter);

    });

    $("#box2").on("click", function () {


        alert("New score: " + counter);
    });

    $("#box3").on("click", function () {


        alert("New score: " + counter);
    });

    $("#box4").on("click", function () {


        alert("New score: " + counter);

    });

    // if (counter === targetNumber) {
    //     alert("You win!");
    // }

    // else if (counter >= targetNumber) {
    //     alert("You lose!!");
    // }

});
