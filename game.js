
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
    numberOptions;  //resets the array

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

    theImage.attr("src", "./crystals/images.jpg");

    // theImage.attr("data-crystalvalue", Math.floor((Math.random() * 100) + 1));
    theImage.attr("data-crystalvalue", numberOptions[i]);

    $("#box" + i).append(theImage);
}

// action which happens when you click a crystal
$(".crystal-image").on("click", function () {

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
    }

    else if (counter >= targetNumber) {
        alert("You lose!!");
        scoreloss++;
        $("#scoreloss").text(scoreloss);
        newGame();
    }

});






























// //  with JQuery

// alert("this is connected to javascript");

// var numberOptions = [10, 11];
// var increment = numberOptions[Math.round(Math.random())];
// var counter = 0;
// var targetNumber = 0;

// $("#randomscore").on("click", function () {
//     var randNumber = Math.floor(Math.random() * (120 - 1 + 1)) + 1;
//     $("#randomscore").html(randNumber);
//     targetNumber = randNumber;
//     $("#totalscore").html(randNumber);

//     //   return targetNumber;

// });


// var numberOptions = [10, 5, 3, 7];

// for (var i = 0; i < numberOptions.length; i++) {

//     var theImage = $("<img>");
//     theImage.addClass("crystal-image");
//     theImage.attr("src", "./crystals/images.jpg");
//     theImage.attr("data-crystalvalue", numberOptions[i]);

//     $("#crystals").append(theImage);
//     //console.log(theImage);
// }

// $(".crystal-image").on("click", function () {

//     var crystalValue = ($(this).attr("data-crystalvalue"));
//     crystalValue = parseInt(crystalValue);
//     console.log(crystalValue)
//     counter += crystalValue;

//     alert("New score: " + counter);

//     if (counter === targetNumber) {
//         alert("You win!");
//     }

//     else if (counter >= targetNumber) {
//         alert("You lose!!");
//     }

// });

// // $("#box1").on("click", function () {

// //     targetNumber = 30;   // just going to give it a value
// //     counter += increment;

// //     $("#totalscore").html(counter);
// //     alert("New score: " + counter);

// //     // updateScore(counter);
// //     // scoreCheck(counter, targetNumber);


// // });





// // $("#box2").on("click", function () {
// //     counter += increment;
// //     alert("New score: " + counter);


// // });

// // var counter = 0;
// // var numberOptions = [10, 11];
// // var increment = numberOptions[Math.round(Math.random())];

// // $("#box3").on("click", function () {
// //     counter += increment;
// //     alert("New score: " + counter);


// // });

// // var counter = 0;
// // var numberOptions = [10, 11];
// // var increment = numberOptions[Math.round(Math.random())];

// // $("#box4").on("click", function () {
// //     counter += increment;
// //     alert("New score: " + counter);


// // })

// // function resetCounts() {

// //     var targetNumber = 0;
// //     var counter = 0;
// //     var randNumber = Math.floor(Math.random() * (120 - 1 + 1)) + 1;
// //     $("#randomscore").html(randNumber);
// //     var targetNumber = randNumber;
// // }

// // function scoreCheck(counter, targetNumber) {

// //     if (counter > targetNumber) {
// //         alert("You win!");
// //         console.log(targetNumber)
// //     }
// //     else if (counter < targetNumber) {
// //         alert("You lose!!");
// //     }

// //     function updateScore(counter) {
// //         $("#totalscore").html(counter);
// //         console.log(counter)
// //     }

// // }

