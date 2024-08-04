// Create an array within a range
// Input: start: 1, end: 5

const createRangeArray = (start, end) => {
  const arr = [];
  if(start === end) {
    arr.push(start)
    return arr;
  } else {
    arr.push(start);
    return arr.concat(createRangeArray(start + 1, end));
  }
}

console.log(createRangeArray(2, 10))
