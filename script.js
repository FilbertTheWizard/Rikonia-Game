// coordinate system for game

var xcoord = 0
var ycoord = 0


// define functions

// get user input
var getInput = function(msg) {
  
  var input = prompt(msg);
  console.log(input)
  
  if (input == null)
    return input;

  if (input.toLowerCase() === "north") {
    ycoord += 1;
  } else if (input.toLowerCase() === "south") {
    ycoord -= 1;
  } else if  (input.toLowerCase() === "east") {
    xcoord += 1;
  } else if (input.toLowerCase() === "west") {
    xcoord -= 1;
  }
  
  return input;
}

// single game logic step
var step = function() {
  return getInput("Where would you like to go?");
}

// main loop
var loop = function() {
  while (true) {
    if (step() == null)
      break;
  }
}

// reset game state
var reset = function() {
  xcoord = 0;
  ycoord = 0;
}

// starting point
var start = function() {
  reset();
  if (getInput("Hello there. Welcome to Rikonia. You are standing in the middle of a field. Which direction would you like to go?") == null)
    return;
  loop();
}


// start game

/*$(document).ready(() => {
  start();
});*/
