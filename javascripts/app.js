var rover1 = {
  
  position:[0,0],
  direction: "N",
}

console.log('Your current direction is: ' + rover1.direction);
console.log('Your current position is: ' + rover1.position);
console.log('======================');

function createMatrix(columns, rows) {
  var matrix = [];
  for (var i = 0; i < columns; i++) {
    matrix[i] = new Array(rows);
  }
  return matrix;
}

var myGrid = createMatrix(10, 10);

console.log(myGrid);

console.log('======================');


var travelLog = [];

// Rover Object Goes Here
// ======================


// ==========left or Right============
function turnLeft(rover1){
  switch (rover1.direction) {
    case 'N':
      rover1.direction = 'W';
      break;

    case 'E':
      rover1.direction = 'N';
      break;

    case 'S':
      rover1.direction = 'E';
      break;

    case 'W':
      rover1.direction = 'S';
      break;
  }

  console.log(rover1);
}

function turnRight(rover1){
  switch (rover1.direction) {
    case 'N':
      rover1.direction = 'E';
      break;

    case 'E':
      rover1.direction = 'S';
      break;

    case 'S':
      rover1.direction = 'W';
      break;

    case 'W':
      rover1.direction = 'N';
      break;}

  console.log("turnRight was called!");
  }


function turning(rover1) {
	switch (turn) {
		case 'left':
			turnLeft();
			break;

		case 'right':
			turnRight();
			break;
	}

	RegisterTravelLogTurn();
}

// =============Forward and Back=====================
function moveForward(rover1){
  switch (rover1.direction) {
    case 'N':
      rover1.position[0] = rover1.position[0] - 1;
      break;

    case 'E':
      rover1.position[1] = rover1.position[1] + 1;
      break;

    case 'S':
      rover1.position[0] = rover1.position[0] + 1;
      break;

    case 'W':
      rover1.position[1] = rover1.position[1] - 1;
      break;
  }}
  function moveBackwards(rover) {
    switch (rover1.direction) {
      case 'N':
        rover1.position[0] = rover1.position[0] + 1;
        break;

      case 'E':
        rover1.position[1] = rover1.position[1] - 1;
        break;

      case 'S':
        rover1.position[0] = rover1.position[0] - 1;
        break;

      case 'W':
        rover1.position[1] = rover1.position[1] + 1;
        break;
    }}

  oops('forward');

  console.log(rover1);

  console.log("moveForward was called")


//===============limits and Log=======================//

      function oops(movement) {
        if (rover1.position[0] < 0 || rover1.position[0] >= 10) {
          console.log('Oops! your reached the border, you cannot move ' + movement);
          rover1.position[0] = 0;
        }
        if (rover1.position[1] < 0) {
          console.log('Oops! your reached the border, you cannot move ' + movement);
          rover1.position[1] = 0;
        } else {
          RegisterTravelLogMovement();
        }
      }

      function RegisterTravelLogMovement() {
        travelLog.push(
          'Rover moved Forward, Rovers position is: ' + rover1.position
        );
      }

      function RegisterTravelLogTurn() {
        travelLog.push(
          'Rover turned ' +
          turn +
          ', now Rovers direction is: ' +
          rover1.direction
        )}


// ===============commands==============

function commands(command) {
	for (var i = 0; i < command.length; i++) {
		switch (command[i]) {
			case 'b':
				moveBackwards();
				break;

			case 'f':
				moveForward();
				break;

			case 'r':
				turn = 'right';
				turning();
				break;

			case 'l':
				turn = 'left';
				turning();
				break;
		}
	}
}

//TEST COMMANDS HERE
console.log('COMMANDS TESTING');

commands('rrfflffb');

console.log('======================');
// ======================
console.log('TRAVEL LOG TEST');

console.log(travelLog);
console.log('======================');

console.log('======================');
// ======================
console.log('COMMANDS TESTING ON GRID');

console.log(rover);

myGrid[rover.position[0]][rover.position[1]] = 'rover';

console.log(myGrid);

