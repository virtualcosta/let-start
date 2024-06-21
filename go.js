const isEven = (num) => num % 2 === 0;
const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));