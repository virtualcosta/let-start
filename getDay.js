const resultingPromises = urls.map((url) => makHttpRequest(url));
const flattenedArray = arr => [].concat(...arr);