

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
  //this or array.splice(0,1) also does not work
  //what is wrong
}

var secondArray = destructivelyRemoveElementFromBeginningOfArray(chocolateBars);


console.log(chocolateBars);
console.log("\n");
console.log(secondArray);

