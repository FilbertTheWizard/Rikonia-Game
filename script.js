// coordinate system for game

var xcoord = 0
var ycoord = 0

// define functions

var getInput = function(msg) {
  
  var input = prompt(msg);
  console.log(input)


  if (input.toLowercase() === "north") {
    ycoord += 1;
  } else if (input.toLowercase() === "south") {
    ycoord -= 1;
  } else if  (input.toLowercase() === "east") {
    xcoord += 1;
  } else if (input.toLowercase() === "west") {
    xcoord -= 1;
  }
}

//initial starting point

getInput("Hello there. Welcome Rikonia. You are standing in the middle of a field. Which direction would you like to go?");

