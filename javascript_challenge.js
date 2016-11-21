// Without using any libraries, write a function in JavaScript which does the following:
//
// duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]


Array.prototype.duplicate = function(){
  return this.concat(this);
}

duplicate([1,2,3,4,5])
