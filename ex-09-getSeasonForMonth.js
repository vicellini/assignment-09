
// Part 08: getSeasonForMonth()

// Write a function called getSeasonForMonth() that accepts
// an integer as an argument and returns the season of year.
//   e.g. getSeasonForMonth(6) => 'summer'

// The function should be built to accept integer values
// of 1-12.
//
// It should also return false if the function is given
// bad input.

function getSeasonForMonth(val){
  if(val === 12 || val === 1 || val === 2){
    return "winter";
  }else if(val === 3 || val === 4 || val === 5){
    return "spring";
  }else if(val === 6 || val === 7 || val === 8){
    return "summer";
  }else if(val === 9 || val === 10 || val === 11){
    return "fall"
  }else{
    return false;
  }
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( getSeasonForMonth(1) === "winter")
console.assert( getSeasonForMonth(3) === "spring")
console.assert( getSeasonForMonth(5) === "spring")
console.assert( getSeasonForMonth(7) === "summer")
console.assert( getSeasonForMonth(9) === "fall")
console.assert( getSeasonForMonth(12) === "winter")

console.assert( getSeasonForMonth(13) === false)
console.assert( getSeasonForMonth(32) === false)
console.assert( getSeasonForMonth(0) === false)
console.assert( getSeasonForMonth("June") === false)
