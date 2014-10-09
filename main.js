// //Waits until the document is loaded to run the initializeGame function
//         window.onload = function() {
//             initializeGame();
//         };
//         //initializeGame makes the c0 id clickable
//         function initializeGame() {
//             //defining a variable called count to count the number of clicks 
//             var count = 0;
//             //starting a for loop that applies a number to the class number and making it a part of the new variable "cellId"
//             for (var cellId = 0; cellId < 9; cellId++) {
//                 //the variable current cell is defined 9 times to assign the cellId values
//                 var currentCell = document.getElementById('c' + cellId);
//                 //adding the event listener "click" and calling the function that will assign all of the new colors to the divs
//                 //when it says count % 2 it is checking to see if the count variable is divisible by 2. If it is then it changes it
//                 //to green and if it is now divisible by 2 then it changes it to purple
//                 currentCell.addEventListener('click', function(){
//                     this.style.backgroundColor = ((count % 2) === 0) ? "green" : "purple";
//                     count ++;
//                     //alert(this.id);
//             });
//         };   
//     }

var tttApp = angular.module('tttApp', []);

tttApp.controller('tttController', function ($scope) {
    
    $scope.testing = "testing";

    //Storing status of cells
    $scope.cellList = [
        {status: "A"},
        {status: "B"},
        {status: "C"},
        {status: "D"},
        {status: "E"},
        {status: "F"}
    ];

    $scope.testJS = function() {
        console.log("clicking is working.");
    };

    $scope.playerPicks = function(thisCell) {
        //click stuff will go here.
        console.log("Cell was: " + thisCell.status);
        thisCell.status = "O";
        console.log("Cell is now " + thisCell.status);
    };
});






//Notes: Make sure to add an if else statement to display which person's turn it is. if turn counter % 2 == 0 then it's player blahblah's turn.