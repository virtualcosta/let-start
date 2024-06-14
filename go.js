const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const average = arr => arr.reduce((a, b) => a + b) / arr.length;