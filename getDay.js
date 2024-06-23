const flattenedArray = arr => [].concat(...arr);
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;