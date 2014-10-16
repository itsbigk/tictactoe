var TTTApp = angular.module('TTTApp', ["firebase"]);

TTTApp.controller('TTTController', function ($scope, $firebase) {
  
  $scope.remoteGameSave = $firebase(new Firebase("kyleknott-ttt.firebaseio.com/gameDbSave"));

  $scope.testString = "Working";

  $scope.board = [
  {xoStatus: ""}, {xoStatus: ""}, {xoStatus: ""}, 
  {xoStatus: ""}, {xoStatus: ""}, {xoStatus: ""}, 
  {xoStatus: ""}, {xoStatus: ""}, {xoStatus: ""}
  ];

  $scope.gameSave = {
    boardArray: $scope.board,
    boardMoves: $scope.board.xoStatus
  };

  $scope.remoteGameSave.$bind($scope, "gameSave");

  $scope.moveCounter = 0;

  $scope.replay = function() {
    // Make the game reset. Eventually making sure that the record or x wins and o wins are also there.

  };

  // $scope.board[0].xoStatus!!!!! SELECTING THE INDEX!

  $scope.playerPicks = function(oneCellObject) {
    // $scope.moveCounter = $scope.moveCounter + 1;
    console.log("Made it to the function!!");
    if ($scope.moveCounter == 0) {
      oneCellObject.xoStatus = "X";
      $scope.moveCounter = $scope.moveCounter + 1;  
    } 

    else {
      oneCellObject.xoStatus = "O";
      $scope.moveCounter = $scope.moveCounter - 1;
    } 
    
    if ($scope.board[0].xoStatus == "X" && $scope.board[1].xoStatus == "X" && $scope.board[2].xoStatus == "X" || 
      $scope.board[0].xoStatus == "X" && $scope.board[3].xoStatus == "X" && $scope.board[6].xoStatus == "X" || 
      $scope.board[0].xoStatus == "X" && $scope.board[4].xoStatus == "X" && $scope.board[8].xoStatus == "X" ||
      $scope.board[3].xoStatus == "X" && $scope.board[4].xoStatus == "X" && $scope.board[5].xoStatus == "X" ||
      $scope.board[6].xoStatus == "X" && $scope.board[7].xoStatus == "X" && $scope.board[8].xoStatus == "X" ||
      $scope.board[2].xoStatus == "X" && $scope.board[4].xoStatus == "X" && $scope.board[6].xoStatus == "X" ||
      $scope.board[1].xoStatus == "X" && $scope.board[4].xoStatus == "X" && $scope.board[7].xoStatus == "X" ||
      $scope.board[2].xoStatus == "X" && $scope.board[5].xoStatus == "X" && $scope.board[8].xoStatus == "X") {
      alert("X is the winner!");
    }

    else if($scope.board[0].xoStatus == "O" && $scope.board[1].xoStatus == "O" && $scope.board[2].xoStatus == "O" || 
      $scope.board[0].xoStatus == "O" && $scope.board[3].xoStatus == "O" && $scope.board[6].xoStatus == "O" || 
      $scope.board[0].xoStatus == "O" && $scope.board[4].xoStatus == "O" && $scope.board[8].xoStatus == "O" ||
      $scope.board[3].xoStatus == "O" && $scope.board[4].xoStatus == "O" && $scope.board[5].xoStatus == "O" ||
      $scope.board[6].xoStatus == "O" && $scope.board[7].xoStatus == "O" && $scope.board[8].xoStatus == "O" ||
      $scope.board[2].xoStatus == "O" && $scope.board[4].xoStatus == "O" && $scope.board[6].xoStatus == "O" ||
      $scope.board[1].xoStatus == "O" && $scope.board[4].xoStatus == "O" && $scope.board[7].xoStatus == "O" ||
      $scope.board[2].xoStatus == "O" && $scope.board[5].xoStatus == "O" && $scope.board[8].xoStatus == "O") {
      alert("O is the winner!");
    }
  };
});

// Make sure to fully define your functions for testing.