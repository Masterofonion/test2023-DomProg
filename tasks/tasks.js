function findUnique(array) {
  let uniqueNumbers = new Map();
  array.forEach((val) => {
    if (!uniqueNumbers.has(val)) {
      uniqueNumbers.set(val, val);
    }
  });
  return Array.from(uniqueNumbers.keys());
}

function findMissing(array) {
  let fullLength = array.length + 1;
  let arraySum = array.reduce((acc, val) => acc + val, 0);
  let fullSum = 0;
  let i = 1;
  while (i <= fullLength) {
    fullSum += i;
    i++;
  }
  return fullSum - arraySum;
}

function reversePrint(obj) {
  if (!obj.next) {
    console.log(obj.value);
    return;
  }
  this.reversePrint(obj.next);
  console.log(obj.value);
}
