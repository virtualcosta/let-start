const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const resultingPromises = urls.map((url) => makHttpRequest(url));