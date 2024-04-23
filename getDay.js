const merge = [...new Set(a.concat(b))];
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);