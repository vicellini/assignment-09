
// Part 07 : getMinimum()

// Write a function cthat will find the minimum of four
// input numbers. You can do it using nested if statements,
// boolean operators, or both (but not neither).

function getMinimum(val1, val2, val3, val4){
  if(val1 < val2 && val1 < val3 && val1 < val4){
    return val1;
  }else if(val2 < val1 && val2 < val3 && val2 < val4){
    return val2;
  }else if(val3 < val1 && val3 < val2 && val3 < val4){
    return val3;
  }else{
    return val4;
  }
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( getMinimum(1,2,4,0) === 0 )
console.assert( getMinimum(1000,-2,-99,50) === -99 )
console.assert( getMinimum(-1000,-2,-99,50) === -1000 )
console.assert( getMinimum(400,-11,12,-5) === -11 )
