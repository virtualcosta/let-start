const removeDuplicates = (arr) => [...new Set(arr)];
const resultingPromises = urls.map((url) => makHttpRequest(url));