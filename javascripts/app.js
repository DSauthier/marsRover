function createMatrix(columns, rows) {
  var matrix = [];
  for (var i = 0; i < columns; i++) {
    matrix[i] = new Array(rows);
  }
  return matrix;
}


// Rover Object Goes Here
// ======================

var rover1 = {
  
  position:[0,0],
  direction: "n",

}
// ======================
function turnLeft(rover1){
  switch (rover1.direction) {
    case 'n':
      rover1.direction = 'w';
      break;

    case 'e':
      rover1.direction = 'n';
      break;

    case 's':
      rover1.direction = 'e';
      break;

    case 'w':
      rover1.direction = 's';
      break;
  }

  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch (rover1.direction) {
    case 'n':
      rover1.direction = 'e';
      break;

    case 'e':
      rover1.direction = 's';
      break;

    case 's':
      rover1.direction = 'w';
      break;

    case 'w':
      rover1.direction = 'n';
      break;}

  console.log("turnRight was called!");
  }
function moveForward(rover){
  switch (rover.direction) {
    case 'N':
      rover.position[0] = rover.position[0] - 1;
      break;

    case 'E':
      rover.position[1] = rover.position[1] + 1;
      break;

    case 'S':
      rover.position[0] = rover.position[0] + 1;
      break;

    case 'W':
      rover.position[1] = rover.position[1] - 1;
      break;
  }
  function moveBackwards(rover) {
    switch (rover.direction) {
      case 'N':
        rover.position[0] = rover.position[0] + 1;
        break;

      case 'E':
        rover.position[1] = rover.position[1] - 1;
        break;

      case 'S':
        rover.position[0] = rover.position[0] - 1;
        break;

      case 'W':
        rover.position[1] = rover.position[1] + 1;
        break;
    }}

  oops('forward');

  console.log(rover);

  console.log("moveForward was called")
}

//==============================================//

      function oops(movement) {
        if (rover.position[0] < 0 || rover.position[0] >= 10) {
          console.log('Oops! your reached the border, you cannot move ' + movement);
          rover.position[0] = 0;
        }
        if (rover.position[1] < 0) {
          console.log('Oops! your reached the border, you cannot move ' + movement);
          rover.position[1] = 0;
        } else {
          RegisterTravelLogMovement();
        }
      }

      function RegisterTravelLogMovement() {
        travelLog.push(
          'Rover moved Forward, Rovers position is: ' + rover.position
        );
      }

      function RegisterTravelLogTurn() {
        travelLog.push(
          'Rover turned ' +
          turn +
          ', now Rovers direction is: ' +
          rover.direction
        )}
