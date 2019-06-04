
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

        var randNumber = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;

        $("#tablecontainer").html(randNumber);

        console.log(randNumber);

        ////////    

        $("#totalscore").html(randNumber);

        $("#scoreLabel").html(randNumber);

    });




});

