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
  // Add something to show the move counter?
  //Look into using the wait javascript tool for the winning move.

  $scope.playerPicks = function(oneCellObject) {
    $scope.moveCounter = $scope.moveCounter + 1;
    console.log("Made it to the function!!");
    if (($scope.moveCounter % 2) == 0) {
      oneCellObject.xoStatus = "X";
      winCondition("X");
      $scope.moveCounter + 1;

    } 

    else {
      oneCellObject.xoStatus = "O";
      winCondition("O");
      $scope.moveCounter + 1;
    } 
  };
  // Make if statement to only check the winning possibilities on turn 5 and above
  function winCondition(cellValue) {
    if ($scope.gameSave.boardArray[0].xoStatus == cellValue && $scope.gameSave.boardArray[1].xoStatus == cellValue && $scope.gameSave.boardArray[2].xoStatus == cellValue || 
      $scope.gameSave.boardArray[0].xoStatus == cellValue && $scope.gameSave.boardArray[3].xoStatus == cellValue && $scope.gameSave.boardArray[6].xoStatus == cellValue || 
      $scope.gameSave.boardArray[0].xoStatus == cellValue && $scope.gameSave.boardArray[4].xoStatus == cellValue && $scope.gameSave.boardArray[8].xoStatus == cellValue ||
      $scope.gameSave.boardArray[3].xoStatus == cellValue && $scope.gameSave.boardArray[4].xoStatus == cellValue && $scope.gameSave.boardArray[5].xoStatus == cellValue ||
      $scope.gameSave.boardArray[6].xoStatus == cellValue && $scope.gameSave.boardArray[7].xoStatus == cellValue && $scope.gameSave.boardArray[8].xoStatus == cellValue ||
      $scope.gameSave.boardArray[2].xoStatus == cellValue && $scope.gameSave.boardArray[4].xoStatus == cellValue && $scope.gameSave.boardArray[6].xoStatus == cellValue ||
      $scope.gameSave.boardArray[1].xoStatus == cellValue && $scope.gameSave.boardArray[4].xoStatus == cellValue && $scope.gameSave.boardArray[7].xoStatus == cellValue ||
      $scope.gameSave.boardArray[2].xoStatus == cellValue && $scope.gameSave.boardArray[5].xoStatus == cellValue && $scope.gameSave.boardArray[8].xoStatus == cellValue) {
      alert(cellValue + " is the winner!");
    }
  }
});

// Make sure to fully define your functions for testing.